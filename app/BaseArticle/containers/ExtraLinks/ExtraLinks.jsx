'use client';
import React, { useState } from 'react'; 
import Link from 'next/link';
import './ExtraLinks.css';

const ExtraLinks = ({currentURL, well, links}) => {
  let linkTitle = "Vigtige Links";
  let openTitle = "ÅBEN";
  let closeTitle = "LUK";
  if (currentURL.includes('/en/')) {
    linkTitle = "Important Links";
    openTitle = "EXPAND";
    closeTitle = "CLOSE";
  }


  const [openMenu, setOpenMenu] = useState(false); // Declare a state variable

  const toggleMenu = () => {
    setOpenMenu(!openMenu); // Toggle the state variable
  };

  return (
    <div className="app__extralinks">
      <div className="app__extralinks-container">

        {links.map((item, index) => (
          <Link key={index} href={item.url} className={currentURL === item.url ? 'active' : ''}>
            {item.label}
          </Link>
        ))}

      </div>

      <div className={`app__extralinks-mobile ${openMenu ? 'open' : ''}`}>
        <h2>{linkTitle}</h2>

        <div className="app__extralinks-mobile-container">
          {links.map((item, index) => (
            <Link key={index} href={item.url} className={currentURL === item.url ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </div>

        <button onClick={toggleMenu} className="app__extralinks-mobile-btn">{openMenu ? closeTitle : openTitle}</button>
      </div>

      {well && well.map((html, index) => (
        <div
          key={index}
          className="well-container"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ))}

            
    </div>
  );
}

export default ExtraLinks;
