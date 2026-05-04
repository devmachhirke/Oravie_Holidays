/**
 * @file VisaSection.jsx
 * @description About Us section — company overview text + promoter cards.
 */

import React from 'react';
import { VISA_CARDS } from '../../../data/visaCards';
import { SectionBadge } from '../../common/SectionBadge';
import styles from './VisaSection.module.css';

export function VisaSection() {
  return (
    <section className={styles.section} id="aboutus">

      <div className={styles.header}>
        <div>
          <SectionBadge style={{ color: 'var(--gold-light)' }}>
            About Us
          </SectionBadge>

          <h2 className="section-title" style={{ color: 'var(--dark-warm)' }}>
            Crafted by Experts<br />
            <em style={{ color: 'var(--gold-light)' }}>
              Defined by Excellence
            </em>
          </h2>
        </div>
      </div>

      <div className={styles.aboutContent}>
        <p>
          At ORAVIE HOLIDAYS, we believe true wealth lies in your memories. Blending 'Ora' (gold)
          and 'Vie' (life), we don't just sell tours—we help you write the most unforgettable,
          golden chapters of your life story. We are a community driven by a passion for happiness.
          For us, travel is the ultimate way to connect, bringing families closer, reigniting
          romance, and turning strangers into lifelong friends.
        </p>
        <p>
          Our greatest specialty is listening. From budget-friendly student adventures to family
          luxury and sacred elder pilgrimages, we craft highly personalized experiences tailored
          to your unique dreams. The Oravie difference is our 'gold standard' of service. With
          flawless execution and unparalleled, end-to-end care, we remove all the guesswork,
          elevating every journey into an extraordinary escape.
        </p>
      </div>

      {/* Meet the Team */}
      <div className={styles.grid}>
        {VISA_CARDS.map(card => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={card.image}
                alt={`Photo of ${card.name}`}
                className={styles.flagImg}
              />
              <div className={styles.overlay} />
            </div>

            <div className={styles.cardBody}>
              <div className={styles.name}>{card.name}</div>
              <div className={styles.divider} />
              <div className={styles.type}>{card.type}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
