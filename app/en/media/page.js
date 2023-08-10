import React from 'react';
import fs from 'fs';
import path from 'path';

import './press.css';

function getImages() {
    let publicDir = process.cwd() + '/public/press';

    const imageFiles = fs.readdirSync(publicDir).filter(file => file.endsWith('.jpg'));

    return imageFiles;
}

const Press = () => {
  let images = getImages();

  return (
    <div className="app__press" >

      <h1>Media</h1>
    
      <div className="app__press-text">
        <h2>Use of photographic material</h2>
        <p>Please note that with the exception of the images shown below, photographs, drawings, and graphics on this website may not be used without previous permission from the relevant copyright owner.</p>
      </div>

      <div className="app__press-content">

        <div className="app__press-text">
          <h2>Photographs</h2>
          <p>The photographs on this site were taken by</p>
          <ul>
            <li>Sten Lange</li>
            <li>Alexander Amundsen</li>
            <li>Julie Henriksen</li>
            <li>Hans Ole Madsen</li>
          </ul>
        </div>

        <div className="app__press-text">
          <h2>Logo downloads</h2>
          <div className="app__press-logos">
            <a href="/standardlogo.eps" className="app__press-logos-item">
              <img src="/logonorm.png" alt="Logo classic" />
              <p>Standard</p>
            </a>

            <a href="/logobw.eps" className="app__press-logos-item">
              <img src="/logobw.png" alt="Logo bw" />
              <p>Monochrome</p>
            </a>

            <a href="/logoneg.eps" className="app__press-logos-item a2">
              <img src="/logoneg.png" alt="Logo inverted" />
              <p>Inverted</p>
            </a>
          </div>
        </div>

      </div>

      <div className="app__press-text a1">
        <h2>Photographs for use in the media</h2>

        <p>The photographs below can be used in connection with coverage of Tietgenkollegiet.</p>
      </div>

      <div className="app__press-item">
        {images.map((image, index) => (
          <a href={`/press/${image}`}>
            <img key={index} src={`/press/${image}`} alt={image} />
          </a>
        ))}
      </div>

    </div>
  );
}

export default Press;
