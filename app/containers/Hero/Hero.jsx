'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Hero.css';

const Hero = () => {

  useEffect(() => {
    const loader = document.querySelector('.loader-done');

    const showTitle = () => {
      window.scrollTo(0, 0);

      const heroTitle = document.querySelector('.app__hero-title');
      const navbar = document.querySelector('.app__navbar');
      const navbarMobile = document.querySelector('.app__navbar-mobile');
      const navlogo = document.querySelector('.nav-logo');
      heroTitle.classList.add('show');
      navbar.classList.add('show');
      navbarMobile.classList.add('show');
      navlogo.classList.add('show');

      document.documentElement.style.setProperty('--loader-opacity', '0');

      let elements = document.querySelectorAll('.app__section1-card');

      elements.forEach((element) => {
        element.classList.add('show');
      });
    };

    if (loader) {
      showTitle();
    } else {
      const navbar = document.querySelector('.app__navbar');
      navbar.classList.add('hide');
      const navbarMobile = document.querySelector('.app__navbar-mobile');
      navbarMobile.classList.add('hide');
    }

    const handleMutation = (mutationsList, observer) => {
      for(let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
          if (document.querySelector('.loader-done')) {
            showTitle();
            observer.disconnect(); // No need to keep observing once the loader is done
          }
        }
      }
    };

    const observer = new MutationObserver(handleMutation);

    observer.observe(document.body, { attributes: true, childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app__hero">
      
      <div className="logo-container" >
        <img className="nav-logo" src="/logo.png" />
      </div>

      <div className="app__hero-container" >
        <h1 className="app__hero-title">Tietgenkollegiet</h1>
      </div>

      <img className="app__hero-bg" src="/loader/9.webp" alt="hero image" />
    </div>
  ) 
};

export default Hero;
