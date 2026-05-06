/**
 * @file Testimonials.jsx
 * @description Horizontally-sliding testimonial cards with prev/next navigation.
 *              Visibility count is responsive (1 / 2 / 3 cards visible).
 */

import React from 'react';
import { TESTIMONIALS } from '../../../data/testimonials';
import { SectionBadge } from '../../common/SectionBadge';
import { useSlider } from '../../../hooks/useSlider';
import styles from './Testimonials.module.css';

function getVisible() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
}

export function Testimonials() {
  const [vis, setVis] = React.useState(getVisible);
  const max = TESTIMONIALS.length - vis;
  const { current: idx, next, prev } = useSlider(max + 1);

  React.useEffect(() => {
    const handler = () => setVis(getVisible());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const safeIdx = Math.min(idx, max);
  const offset = safeIdx * (100 / vis);

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.header}>
        <div>
          <SectionBadge style={{ color: 'var(--gold-light)' }}>Traveler Stories</SectionBadge>
          <h2 className="section-title">
            What Our<br /><em style={{ color: 'var(--gold-light)' }}>Travelers Say</em>
          </h2>
          <p className="section-sub">
            Real experiences from happy clients who've trusted ORAVIE Holidays for
            stress-free, personalized, and memorable journeys.
          </p>
        </div>
        <div className={styles.navBtns}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">&#8592;</button>
          <button className={styles.navBtn} onClick={next} aria-label="Next">&#8594;</button>
        </div>
      </div>

      <div className={styles.viewport}>
        <div className={styles.track} style={{ transform: `translateX(-${offset}%)` }}>
          {TESTIMONIALS.map(t => (
            <div key={t.id} className={styles.card} style={{ minWidth: `calc(${100 / vis}% - ${(vis - 1) * 24 / vis}px)` }}>
              <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.loc}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
