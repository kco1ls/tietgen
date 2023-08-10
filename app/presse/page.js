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

      <h1>Presse</h1>
    
      <div className="app__press-text">
        <h2>Brug af billedemateriale</h2>
        <p>Bemærk, at med undtagelser af det materiale, der fremstilles nedenfor, må billeder, tegninger og grafik på Tietgenkollegiets website ikke benyttes uden tilladelse fra den pågældende rettighedshaver (typisk fotografen).</p>
      </div>

      <div className="app__press-content">

        <div className="app__press-text">
          <h2>Fotografer</h2>
          <p>Billederne på dette site er taget af:</p>
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
              <p>Sort / Hvid</p>
            </a>

            <a href="/logoneg.eps" className="app__press-logos-item a2">
              <img src="/logoneg.png" alt="Logo inverted" />
              <p>Negativ</p>
            </a>
          </div>
        </div>

      </div>

      <div className="app__press-text a1">
        <h2>Billeder til pressebrug</h2>

        <p>Billederne nedenfor kan frit benyttes i forbindelse med omtale af Tietgenkollegiet.</p>
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
