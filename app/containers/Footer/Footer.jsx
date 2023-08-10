'use client'
import Image from 'next/image'
import React from 'react';
import { usePathname } from 'next/navigation'
import './Footer.css';

const Footer = () => {
  let thanks = "En gave fra"
  const pathname = usePathname()
  const locale = pathname.split("/")[1];

  if (locale === "en") {
    thanks = "A gift from"
  }

  return (
    <div className="app__footer">
      <div className="app__footer-part app__footer-left">
        <h1>TIETGENKOLLEGIET</h1>
      </div>

      <div className="app__footer-part app__footer-center">
        <p className="app__footer-copyright">© 2023 Tietgenkollegiet</p>
      </div>

      <div className="app__footer-part app__footer-right">
        <p>{thanks}</p>
        <Image width={140} height={62} alt="Nordea Fonden" className="thanks-img" src="/nordeafonden.svg" />
      </div>
    </div>
  );
}

export default Footer;
