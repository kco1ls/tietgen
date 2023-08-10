'use client'
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { usePathname } from 'next/navigation'

import Link from 'next/link';

const daNavbarItems = [
  { label: "Hjem", href: "/" },
  { label: "Bygningen", href: "/bygningen" },
  { label: "Kollegieliv", href: "/livet-pa-kollegiet" },
]

const enNavbarItems = [
  { label: "Home", href: "/en" },
  { label: "Building", href: "/en/the-building" },
  { label: "Dorm Life", href: "/en/living-at-tietgenkollegiet" },
]

const daNavbarResources = [
  { label: "Arkiv", href: "/arkiv" },
  { label: "Presse", href: "/presse" },
  { label: "Organisation", href: "/organisation" },
  { label: "Kontakt", href: "/kontakt-og-find-vej" },
]

const enNavbarResources = [
  { label: "Archive", href: "/en/archive" },
  { label: "Media", href: "/en/media" },
  { label: "Organisation", href: "/en/organisation" },
  { label: "Contact", href: "/en/contact" },
]

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = React.createRef();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname()

  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      setMobileMenuOpen(false)
    }
  }, [pathname]);

    
  const locale = pathname.split("/")[1];

  let contactLabel = "Kontakt";
  let contactURL = "/kontakt-og-find-vej/";
  let applyLabel = "Ansøg";
  let applyURL = "/ansog-og-bliv-beboer/";
  let flag = "🇩🇰";
  let items = daNavbarItems;
  let resourceItems = daNavbarResources;
  let oppositeURL = "/en"
  let language = "Sprog"
  let openMsg = "Åben Menu"
  let closeMsg = "Luk Menu"
  let resourceName = "Ressourcer"
  let mobileItems = daNavbarItems.concat(daNavbarResources);

  if (locale === "en") {
    items = enNavbarItems;
    resourceItems = enNavbarResources;
    contactLabel = "Contact"; 
    contactURL = "/en/contact/"; 
    applyLabel = "Apply";
    applyURL = "/en/apply-and-become-a-resident/";
    oppositeURL = "/"
    language = "Language"
    openMsg = "Open Menu"
    closeMsg = "Close Menu"
    resourceName = "Resources"
    mobileItems = enNavbarItems.concat(enNavbarResources);

    flag = "🇬🇧";
  }

  return (
      <div className="app__navbar-container">
        <div className="app__navbar">

          {items.map((item, index) => (
            <Link key={index} className="nav-btn" href={item.href}>
              {item.label}
            </Link>
          ))}

          <div className="nav-resources">
            {resourceName}
            <div className="submenu">

              {resourceItems.map((item, index) => (
                <Link key={index} className="submenu-item" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href={oppositeURL} className="nav-language">{flag}</Link>

          <div className="cta_buttons">
            <Link href={applyURL} className="apply_cta">{applyLabel}<img src="/rightarrow.svg" /></Link>
          </div>

        </div>
      
        <div className="app__navbar-mobile">

            <div ref={mobileMenuRef} className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
              {mobileItems.map((item, index) => (
                <Link key={index} className="mobile-menu-item" href={item.href}>
                  {item.label}
                </Link>
              ))}

              <Link href={oppositeURL} className="nav-language">{language} {flag}</Link>

              <div className="cta_buttons">
                <Link href={applyURL} className="apply_cta">{applyLabel}<img src="/rightarrow.svg" /></Link>
              </div>
            </div>

            <button onClick={toggleMobileMenu} className="hamburger">
              <div className="hbar" />
              <h1>{!isMobileMenuOpen ? openMsg : closeMsg }</h1>
              <div className="hbar" />
            </button>
      
        </div>
      
      </div>
  )
};

export default Navbar;
