'use client'
import React from 'react';
import './Navbar.css';
import { usePathname } from 'next/navigation'

import Link from 'next/link';

const daNavbarItems = [
  { label: "Hjem", href: "/" },
  { label: "Bygningen", href: "/bygningen" },
  { label: "Kollegieliv", href: "/livet-pa-kollegiet" },
  // { label: "Press", href: "/en/apply-and-become-a-resident/" },
]

const enNavbarItems = [
  { label: "Home", href: "/en" },
  { label: "Building", href: "/en/the-building" },
  { label: "Dorm Life", href: "/en/living-at-tietgenkollegiet/" },
  // { label: "Press", href: "/en/apply-and-become-a-resident/" },
]

const Navbar = () => {
  const pathname = usePathname()
  const locale = pathname.split("/")[1];

  let contactLabel = "Kontakt";
  let contactURL = "/kontakt-og-find-vej/";
  let applyLabel = "Ansøg";
  let applyURL = "/ansog-og-bliv-beboer/";
  let flag = "🇩🇰";
  let items = daNavbarItems;
  let oppositeURL = "/en"

  if (locale === "en") {
    items = enNavbarItems;
    contactLabel = "Contact"; 
    contactURL = "/en/contact/"; 
    applyLabel = "Apply";
    applyURL = "/en/apply-and-become-a-resident/";
    oppositeURL = "/"

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

          <Link href={oppositeURL} className="nav-language">{flag}</Link>

          <div className="cta_buttons">
            <Link href={contactURL} className="contact_cta">{contactLabel}</Link>
            <Link href={applyURL} className="apply_cta">{applyLabel}<img src="/rightarrow.svg" /></Link>
          </div>

        </div>
      </div>
  )
};

export default Navbar;
