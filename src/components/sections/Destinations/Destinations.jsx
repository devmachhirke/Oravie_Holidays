/**
 * @file Destinations.jsx
 * @description Featured destination cards in an asymmetric masonry-style grid.
 */

import React from 'react';
import { DESTINATIONS } from '../../../data/destinations';
import { SectionBadge } from '../../common/SectionBadge';
import { Button } from '../../common/Button';
import styles from './Destinations.module.css';

export function Destinations() {
  return (
    <section className={styles.section} id="ourservice">
      <div className={styles.header}>
        <div>
          <SectionBadge>Our Services</SectionBadge>
          <h2 className="section-title">
            Experience World-Class Services<br />with <em>ORAVIE HOLIDAYS</em>
          </h2>
          <p className="section-sub">
            Planning Every Detail, Perfecting Every Journey
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {DESTINATIONS.map((dest, i) => (
          <div
            key={dest.id}
            className={`${styles.card} ${i === 0 ? styles.cardFeatured : ''}`}
            onClick={() => window.location.href = '#contact'}
          >
            <img src={dest.img} alt={dest.alt} loading="lazy" />
            <div className={styles.info}>
              {dest.tag && <span className={styles.tag}>{dest.tag}</span>}
              <div className={styles.region}>{dest.region}</div>
              <div className={styles.name}>{dest.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}