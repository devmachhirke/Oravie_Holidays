/**
 * @file Navbar.jsx
 * @description Fixed top navigation bar with logo, nav links (dropdown), and CTA.
 *              Uses useScrollNav hook to apply a 'scrolled' shadow on scroll.
 */

import React from 'react';
import { useScrollNav } from '../../hooks/useScrollNav';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  
  { label: 'Our services',        href: '#ourservice', 
    
  },
  { label: 'About-Us',         href: '#aboutus' },
  { label: 'Why Us',       href: '#why-us' },
  { label: 'Stories',      href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

export function Navbar() {
  const scrolled = useScrollNav(60);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      {/* Logo */}
      <a href="#" className={styles.logo}>
        <img
          src="https://69f1dcc61c78705e2c4ae10e.imgix.net/logo/WhatsApp_Image_2026-04-29_at_1.22.18_PM-removebg-preview.png?w=368&h=272"
          alt="Oravie Holidays Logo"
          className={styles.logoImg}
        />
        <div className={styles.logoText}>
          <span className={styles.brand}>ORAVIE HOLIDAYS</span>
          <span className={styles.tagline}>Travel the golden moments in life</span>
        </div>
      </a>

      {/* Nav Links */}
      <ul className={styles.links}>
        {NAV_LINKS.map(link => (
          <li key={link.label} className={link.dropdown ? styles.dropdown : ''}>
            <a href={link.href}>{link.label}</a>
            {link.dropdown && (
              <ul className={styles.dropdownMenu}>
                {link.dropdown.map(sub => (
                  <li key={sub.label}>
                    <a href={sub.href}>{sub.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* CTA */}
      {/* <a href="#contact" className={styles.cta}>Book a Plan</a> */}
    </nav>
  );
}
