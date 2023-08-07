'use client'

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './Loader.css';

const Loader = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [stopSignal, setStopSignal] = useState(false);
  const [maximizeImage, setMaximizeImage] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const loaderLastDisplayed = sessionStorage.getItem('loaderDisplayed');

    const lastDisplayedTime = Number(loaderLastDisplayed || 0);

    var currentTime = new Date().getTime(); 

    let playAnimation;
    if (window.performance.timeOrigin === undefined) {
      let difference = currentTime - lastDisplayedTime;

      if (difference < 300000) {
        playAnimation = false;
      }
    } else {
      let timeOrigin = window.performance.timeOrigin;
      let difference = currentTime - timeOrigin;

      if (difference < 4000) {
        playAnimation = true;
      }
    }

    if (!playAnimation) {
      const heroTitle = document.querySelector('.app__hero-title');
      const navbar = document.querySelector('.app__navbar');
      const navlogo = document.querySelector('.nav-logo');

      heroTitle.style.transition = 'all 0s';
      navbar.style.transition = 'all 0s';
      navlogo.style.transition = 'all 0s';

      let elements = document.querySelectorAll('.app__section1-card');
      elements.forEach((element) => {
        element.style.transition = 'all 0s';
      });
        
      setShowLoader(false);
    } else {
      setShowLoader(true);
      sessionStorage.setItem('loaderDisplayed', String(new Date().getTime()));
    }

    if (!showLoader) {
      let stateElementCheck = setInterval(() => {
        let stateElement = document.querySelector('.empty_state');
        if (stateElement !== null) {

          stateElement.classList.add('loader-done');
          clearInterval(stateElementCheck);
        }
      }, 5);
    }

  }, []);
  
  useEffect(() => {
    if (showLoader) return;

    let stateElement = document.querySelector('.empty_state');
    stateElement.classList.add('loader-done');

    
  }, [showLoader]);
    
  const images = Array.from({ length: 9 }, (_, i) => i + 1);

  const imageRefs = useRef(images.map(() => React.createRef()));

  const [imageTops, setImageTops] = useState(images.map(() => 0));

  const handleImageLoad = (index) => {
    const image = imageRefs.current[index].current;
    const top = (233.33 - image.offsetHeight) / 2;
    setImageTops(prevTops => {
      const newTops = [...prevTops];
      newTops[index] = top;
      return newTops;
    });
  }

  useEffect(() => {
    if (!showLoader) return;
    images.forEach((_, index) => handleImageLoad(index));
  }, []);

  useEffect(() => {
    if (stopSignal) return;

    const timer = setInterval(() => {
      setCurrentImage((prevImage) => {
        let nextImage;
        if (prevImage < 9) {
          nextImage = prevImage + 1;
        } else {
          setMaximizeImage(true);
          resizeImage();
          setStopSignal(true); 
            
          setTimeout(() => {
            setShowLoader(false);
            let stateElement = document.querySelector('.empty_state');
            stateElement.classList.add('loader-done');
          }, 900);

          return prevImage;
        }

        return nextImage;
      });
    }, 380);

    return () => {
      clearInterval(timer);
    };
  }, [stopSignal]);

  function resizeImage() {
    let checkInterval = setInterval(() => {
      let imageElement = document.querySelector('.final-image');

      if (imageElement) {
        let viewportWidth = window.innerWidth;

        let rect = imageElement.getBoundingClientRect();

        let offsetX = rect.left;
        let offsetY = rect.top;

        let currentTopValue = imageElement.style.top.replace('px', '');
        let currentTop = currentTopValue ? parseInt(currentTopValue) : 0;

        imageElement.style.position = 'absolute';
        imageElement.style.left = 6 + 'px';
        imageElement.style.top = (-offsetY + currentTop + 6) + 'px';

        let heroElement = document.querySelector('.app__hero-bg');

        let galleryElement = document.querySelector('.loader__gallery_images');
        let heroWidth = heroElement.offsetWidth;

        imageElement.style.width = heroWidth + 'px';
        imageElement.style.height = 'auto';

        clearInterval(checkInterval);
      }
    }, 10);
  }

  useEffect(() => {
    if (currentImage === 9 && maximizeImage) {
      const maximizeImageElement = document.querySelector('.image-maximize');
      const finalImageElement = document.querySelector('.final-image');

      if (maximizeImageElement && finalImageElement) {
        const rect = maximizeImageElement.getBoundingClientRect();
        finalImageElement.style.position = 'absolute'; // Ensure the position is absolute
        finalImageElement.style.top = `${rect.top}px`;
        finalImageElement.style.left = `${rect.left}px`;
      }
    }
  }, [currentImage, maximizeImage]);

  return showLoader && (
    <div className="app__loader">
      
      <div className="loader__gallery">

        <h1>
        TIETGEN
      
        <div className="loader__gallery_images">
          {images.map((imageIndex, index) => (
            <Image
              loading="eager"
              priority={true}
              width={350}
              quality={100}
              height={233.33}
              key={imageIndex}
              ref={imageRefs.current[index]}
              className={`${imageIndex === currentImage ? "visible" : ""} ${maximizeImage && imageIndex === 9 ? "image-maximize" : ""}`}
              src={`/loader/${imageIndex}.jpg`}
              style={{top: `${imageTops[index]}px`}}
            />
          ))}
        </div>

        KOLLEGIET
        </h1>

      </div> 

      <Image
        quality={100}
        width={1210}
        height={706}
        loading="eager"
        priority={true}
        className={`final-image ${currentImage === 9 ? "visible" : ""}`}
        src="/loader/9.jpg"
        alt="Tietgen Kollegiet"
      />

    </div>
  );
}

export default Loader;
