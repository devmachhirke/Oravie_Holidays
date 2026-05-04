/**
 * @file CTASection.jsx
 * @description Gold gradient call-to-action banner with phone and email actions.
 */

import React from 'react';
import { Button } from '../../common/Button';
import styles from './CTASection.module.css';

export function CTASection() {
  return (
    <div className={styles.section} id="contact">
      <div className={styles.text}>
        <h2 className={styles.title}>
          Ready to Turn Your<br />Travel Dreams into Reality?
        </h2>
        <p className={styles.sub}>
          From hotel to flight reservations and personalized holidays services 
          we are here to help you 24x7 support

        </p>
      </div>
      <div className={styles.actions}>
        <Button variant="dark" href="tel:+919322178463">Call Us Now</Button>
        <Button 
  variant="ghost" 
  href="https://wa.me/9322178463" 
  target="_blank"
>
  Send Message
</Button>
      </div>
    </div>
  );
}
