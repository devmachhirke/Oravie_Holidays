/**
 * @file WhyUs.jsx
 * @description "Why Choose Oravie" 3×2 feature grid with icon, title, and description.
 */

import React from 'react';
import { WHY_US_ITEMS } from '../../../data/whyUsItems';
import { SectionBadge } from '../../common/SectionBadge';
import styles from './WhyUs.module.css';

export function WhyUs() {
  return (
    <section className={styles.section} id="why-us">
      <div className={styles.intro}>
        <SectionBadge style={{ justifyContent: 'center' }}>Why Choose ORAVIE Holidays</SectionBadge>
        <h2 className="section-title">
          Personalized care,<br />Live <em>Unforgettable stories</em>
        </h2>
        <p className="section-sub" style={{ margin: '0 auto' }}>
          Oravie Holidays gives you what today's market is missing.
Genuine, personalized care for your golden moments.
        </p>
      </div>

      <div className={styles.grid}>
        {WHY_US_ITEMS.map(item => (
          <div key={item.id} className={styles.item}>
            <div className={styles.icon}>{item.icon}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
