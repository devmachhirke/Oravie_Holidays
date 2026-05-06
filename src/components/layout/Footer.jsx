/**
 * @file Footer.jsx
 * @description Site-wide footer with brand info, quick links, services, and contact.
 */

import React from 'react';
import styles from './Footer.module.css';

const QUICK_LINKS = [
  { label: 'Our Services',         href: '#ourservice' },
  { label: 'About-Us',        href: '#aboutus' },
  { label: 'Why Us',          href: '#why-us' },
  { label: 'Stories',     href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

const SERVICES = [
  'Holiday & Tour Packages',
  'Hotel Reservations',
  'Train & Bus Reservations',
  'Flight Booking',
  'Car Renatals & Transfers',
  
];

const SOCIALS = [
  // { label: 'f',  href: 'https://www.facebook.com/travensotravel' },
  { label: 'in', href: 'https://www.instagram.com/oravieholidays?igsh=bmE2bndqYXpxMDRh' },
  // { label: 'li', href: 'https://www.linkedin.com/company/travenso-travel' },
  { label: 'wa', href: 'https://wa.me/9322178463' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <p className={styles.brandName}>Oravie Holidays</p>
          <p className={styles.brandDesc}>
            Oravie Holidays is a Nagpur-based travel company dedicated to crafting seamless and memorable journeys. From bookings and reservations to curated tour experiences, we handle every detail with precision and care. With a vision to expand beyond borders, we aim to deliver world-class travel services and create lasting experiences for travelers across the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4>Our Services</h4>
          <ul>
            {SERVICES.map(s => (
              <li key={s}><a href="#ourservice">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={`${styles.col} ${styles.contact}`}>
          <h4>Contact Us</h4>
          <p>
44C6+3HG 3rd Floor, Rasad Palace Tukdoji Sq. to Chhota Tajbagh Road, Nagpur - 24, Raghuji Nagar, Nagpur, Maharashtra 440024

          </p>
          <p><a href="tel:+919322178463">+91 93221 78463</a></p>
          <p><a href="mailto:contact@oravieholidays.in">contact@oravieholidays.in</a></p>
          <div className={styles.socials}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} className={styles.socialLink} target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.goldLine} />

      <div className={styles.bottom}>
        <p>© 2025 Oravie Holidays LLP. All rights reserved.</p>
        <p>
          <a href="#">Privacy Policy</a>&nbsp;|&nbsp;
          <a href="#">Terms &amp; Conditions</a>
        </p>
      </div>
    </footer>
  );
}
