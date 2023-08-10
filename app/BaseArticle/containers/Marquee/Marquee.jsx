'use client';
import React, { useState, useEffect, useRef } from 'react';
import './Marquee.css'

import Image from 'next/image';

function calculateSize(aspectRatio) {
  let desiredHeight, desiredWidth;

  if (aspectRatio > 1) {
    desiredWidth = 0.8 * window.innerWidth; // 80vw
    desiredHeight = desiredWidth / aspectRatio;

    if (desiredHeight > 0.75 * window.innerHeight) {
      desiredHeight = 0.75 * window.innerHeight; // 80vh
      desiredWidth = desiredHeight * aspectRatio;
    }
  } else {
    desiredHeight = 0.75 * window.innerHeight; // 80vh
    desiredWidth = aspectRatio * desiredHeight;

    if (desiredWidth > 0.8 * window.innerWidth) {
      desiredWidth = 0.8 * window.innerWidth; // 80vw
      desiredHeight = desiredWidth / aspectRatio;
    }
  }
  
  return [desiredHeight, desiredWidth];
}

const Marquee = ({range, folder, imageSize}) => {
    folder = folder.split("/public")[1];
    folder += "/";

    const [clickedImage, setClickedImage] = useState(null);
    const clickedOriginalImageRef = useRef(null);
    const marqueeRef = useRef(null);
    const galleryRef = useRef(null);

    const images = Array.from({ length: range }, (_, i) => `${folder}${i + 1}.webp`);

    const fadeOut = () => {
        const clickedImageElement = document.querySelector('.clicked-image');

        galleryRef.current.style.transition = "background-color 0.5s ease-in-out";
        galleryRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
        galleryRef.current.style.zIndex = "-1";

        if (clickedImageElement) {
            clickedImageElement.style.transition = "opacity 0.3s ease-in-out";
            clickedImageElement.style.opacity = "0";

            clickedOriginalImageRef.current.style.transition = 'opacity 0.3s ease-in-out';
            
            setTimeout(() => setClickedImage(null), 300);
        }
    };

    const handleImageClick = (event) => {
        event.stopPropagation();
    };
    
    useEffect(() => {
        const updateDimensions = () => {
            if (!clickedImage) return;
            const clickedImageElement = document.querySelector('.clicked-image');
            if (!clickedImageElement) return;

            let imageWidth = imageSize[parseInt(clickedImage.split('/').slice(-1)[0].split('.')[0]) - 1]
            let imageHeight = 768;
            const aspectRatio = imageWidth / imageHeight;
            
            let [desiredHeight, desiredWidth] = calculateSize(aspectRatio);


            clickedImageElement.style.height = `${desiredHeight}px`; 
            clickedImageElement.style.width = `${desiredWidth}px`;
        }

        updateDimensions();

        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        }
    }, [clickedImage]);

    const handleClick = (src, event) => {
        if (!src) return;
        const { target } = event;

        const { left: x, top: y, width: w, height: h } = target.getBoundingClientRect();

        const aspectRatio = w / h;

        let [desiredHeight, desiredWidth] = calculateSize(aspectRatio);

        const originalImageElement = event.target;
        if (originalImageElement) {
            clickedOriginalImageRef.current = originalImageElement;
        }

        let intervalID;

        const findImageAndExecute = () => {
            const clickedImageElement = document.querySelector('.clicked-image');
            if (clickedImageElement) {
                const clickedImage = clickedImageElement.querySelector('img');
                if (clickedImage) {
                    clearInterval(intervalID);

                    clickedImageElement.style.display = "block";
                    clickedImageElement.style.position = "fixed"; 
                    clickedImageElement.style.left = `${x}px`;
                    clickedImageElement.style.top = `${y}px`;
                    clickedImageElement.style.zIndex = 1;
                    clickedImageElement.style.transform = 'none';
                    clickedImageElement.style.height = `${h}px`;
                    clickedImageElement.style.width = `${w}px`;

                    void clickedImageElement.offsetWidth;

                    requestAnimationFrame(() => {
                        clickedImageElement.style.transition = "all 0.5s ease-in-out";
                        clickedImageElement.style.left = "50%";
                        clickedImageElement.style.top = "50%";
                        clickedImageElement.style.transform = "translate(-50%, -50%)";
                        clickedImageElement.style.height = `${desiredHeight}px`; 
                        clickedImageElement.style.width = `${desiredWidth}px`;

                        galleryRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                        galleryRef.current.style.zIndex = 1;
                    });
                }
            }
        };

        intervalID = setInterval(findImageAndExecute, 5);

        setClickedImage(src);

    };

    const handleImageChange = (src) => {
        if (!src) return;

        let imageWidth = imageSize[parseInt(src.split('/').slice(-1)[0].split('.')[0]) - 1]
        let imageHeight = 768;
        const aspectRatio = imageWidth / imageHeight;
        let [desiredHeight, desiredWidth] = calculateSize(aspectRatio);

        let intervalID;

        const findImageAndExecute = () => {
            const clickedImageElement = document.querySelector('.clicked-image');
            if (clickedImageElement) {
                const clickedImage = clickedImageElement.querySelector('img');
                if (clickedImage) {
                   clearInterval(intervalID);

                   clickedImageElement.style.transition = "all 0s ease";

                   clickedImageElement.style.height = `${desiredHeight}px`; 
                   clickedImageElement.style.width = `${desiredWidth}px`;
                }
            }
        };

        setClickedImage(src);
        intervalID = setInterval(findImageAndExecute, 5);
    };


    const nextImage = (event) => {
      event.stopPropagation();
      if (clickedImage) {
        let imageIndex = parseInt(clickedImage.split('/').slice(-1)[0].split('.')[0]);
        imageIndex = (imageIndex % range) + 1;
        handleImageChange(`${folder}${imageIndex}.webp`);
      }
    };

    const prevImage = (event) => {
      event.stopPropagation();
      if (clickedImage) {
        let imageIndex = parseInt(clickedImage.split('/').slice(-1)[0].split('.')[0]);
        imageIndex = (imageIndex - 2 + range) % range + 1;
        handleImageChange(`${folder}${imageIndex}.webp`);
      }
    };

    return (
        <div className="app__marquee" ref={marqueeRef}>
            <div className="total-marquee">
                {Array(3).fill().map((_, i) => (
                    <div key={i} className="marquee1">
                        {images.map((src, index) => (
                            <img 
                                quality={50}
                                alt="moving picture in marquee"
                                height={768}
                                width = {imageSize[parseInt(src.split('/').slice(-1)[0].split('.')[0]) - 1]}
                                key={index} 
                                src={src} 
                                onClick={(event) => handleClick(src, event)} 
                                style={clickedImage === src ? { opacity: '0' } : {}} 
                            />
                        ))}
                    </div>
                ))}
            </div>

            
            <div ref={galleryRef} className="gallery-overlay" onClick={fadeOut}>

              {clickedImage && 
                <>  
                <button className="close-button">CLOSE</button>
                <button className="prev-button" onClick={prevImage}><img src="/cardarrow.svg" /></button>
                <div className="clicked-image" onClick={handleImageClick}>
                  <img 
                    quality={100}
                    alt="expanded picture from marquee"
                    height={768}
                    width = {imageSize[parseInt(clickedImage.split('/').slice(-1)[0].split('.')[0]) - 1]}
                    src={clickedImage}
                  />
                </div>
                <button className="next-button" onClick={nextImage}><img src="/cardarrow.svg" /></button>
                </>
              }

            </div>

        </div>
    )
}

export default Marquee;
