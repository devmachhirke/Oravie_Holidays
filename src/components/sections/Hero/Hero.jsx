/**
 * @file Hero.jsx
 * @description Full-viewport hero with auto-rotating slide backgrounds,
 *              dynamic title/subtitle, and dot navigation.
 *              Auto-plays every 5 seconds via useSlider hook.
 */

import React from 'react';
import { useSlider } from '../../../hooks/useSlider';
import { HERO_SLIDES } from '../../../data/heroSlides';
import { Button } from '../../common/Button';
import styles from './Hero.module.css';

export function Hero() {
  const { current, goTo } = useSlider(HERO_SLIDES.length, 5000);
  const slide = HERO_SLIDES[current];

  return (
    <section className={styles.hero} id="home">
      {/* Background slides */}
      <div className={styles.slides}>
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.id}
            className={`${styles.slide} ${i === current ? styles.active : ''}`}
            style={{ backgroundImage: `url('${s.bgUrl}')` }}
            aria-hidden={i !== current}
          />
        ))}
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: slide.title }}
        />
        <p className={styles.subtitle}>{slide.subtitle}</p>
        <div className={styles.btns}>
          <Button href="#ourservice">Our Services</Button>
          
        </div>
      </div>

      {/* Scroll hint */}
      {/* <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div> */}

      {/* Dots */}
      <div className={styles.dots}>
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
