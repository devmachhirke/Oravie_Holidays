/**
 * @file Testimonials.jsx
 * @description Infinite-loop horizontally-sliding testimonial cards.
 *              Clone technique: prepend + append clones for seamless wrap.
 *              Card widths are pixel-perfect (no % inside flex track).
 *              useSlider hook removed — local state handles everything.
 */

import React from 'react';
import { TESTIMONIALS } from '../../../data/testimonials';
import { SectionBadge } from '../../common/SectionBadge';
import styles from './Testimonials.module.css';

/* ── Keep these two values in sync with Testimonials.module.css ── */
const GAP  = 24;   // px  →  matches .track { gap: 24px }
const ANIM = 500;  // ms  →  matches .track { transition: transform 0.5s }

function getVisible() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
}

export function Testimonials() {
  const N = TESTIMONIALS.length;

  const [vis, setVis]          = React.useState(getVisible);
  const [currentPos, setPos]   = React.useState(0);   // 0 … N-1
  const [isAnimating, setAnim] = React.useState(false);

  const viewportRef = React.useRef(null);
  const trackRef    = React.useRef(null);

  /* ─────────────────────────────────────────────────────────
   * TRACK LAYOUT  (clone technique for infinite loop)
   *
   *  ┌──────────────────┬──────────────────────┬──────────────────┐
   *  │ prepend clones   │  real cards 0…N-1    │  append clones   │
   *  │ (last vis cards) │  slots vis…vis+N-1   │ (first vis cards)│
   *  └──────────────────┴──────────────────────┴──────────────────┘
   *
   *  currentPos 0   → real slot  vis + 0
   *  currentPos N-1 → real slot  vis + N - 1
   *
   *  NEXT at last  → animate into append-clone (slot vis+N)
   *                  then silently jump to real slot vis (pos 0)
   *
   *  PREV at first → animate into prepend-clone (slot vis-1)
   *                  then silently jump to real slot vis+N-1 (pos N-1)
   * ───────────────────────────────────────────────────────── */

  function cardPx() {
    if (!viewportRef.current) return 0;
    return (viewportRef.current.clientWidth - (vis - 1) * GAP) / vis;
  }

  function stepPx() { return cardPx() + GAP; }

  /* Apply CSS transform to track. animate=false → instant (no transition). */
  function applyTransform(slot, animate) {
    const el = trackRef.current;
    if (!el) return;
    const offset = slot * stepPx();
    if (!animate) {
      el.style.transition = 'none';
      el.style.transform  = `translateX(-${offset}px)`;
      void el.offsetWidth;   // force reflow so next frame can re-enable transition
      el.style.transition = '';
    } else {
      el.style.transform = `translateX(-${offset}px)`;
    }
  }

  /* Reposition silently whenever visible count or viewport changes */
  React.useLayoutEffect(() => {
    applyTransform(vis + currentPos, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vis]);

  /* Resize listener */
  React.useEffect(() => {
    let timer;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setVis(getVisible()), 150);
    };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); clearTimeout(timer); };
  }, []);

  /* ── Navigation ─────────────────────────────────────── */
  function goNext() {
    if (isAnimating) return;
    setAnim(true);

    if (currentPos + 1 < N) {
      // Normal forward
      const next = currentPos + 1;
      applyTransform(vis + next, true);
      setPos(next);
      setTimeout(() => setAnim(false), ANIM);
    } else {
      // Overflow → animate into append-clone, then silently jump to real pos 0
      applyTransform(vis + N, true);
      setTimeout(() => {
        setPos(0);
        applyTransform(vis, false);
        setAnim(false);
      }, ANIM);
    }
  }

  function goPrev() {
    if (isAnimating) return;
    setAnim(true);

    if (currentPos - 1 >= 0) {
      // Normal backward
      const prev = currentPos - 1;
      applyTransform(vis + prev, true);
      setPos(prev);
      setTimeout(() => setAnim(false), ANIM);
    } else {
      // Underflow → animate into prepend-clone, then silently jump to real pos N-1
      applyTransform(vis - 1, true);
      setTimeout(() => {
        setPos(N - 1);
        applyTransform(vis + N - 1, false);
        setAnim(false);
      }, ANIM);
    }
  }

  function goTo(pos) {
    if (isAnimating) return;
    setAnim(true);
    const safe = ((pos % N) + N) % N;
    applyTransform(vis + safe, true);
    setPos(safe);
    setTimeout(() => setAnim(false), ANIM);
  }

  /* ── Build slot list ────────────────────────────────── */
  const px = cardPx();
  const cardStyle = {
    width:    px > 0 ? `${px}px` : `calc(${100 / vis}% - ${(vis - 1) * GAP / vis}px)`,
    minWidth: px > 0 ? `${px}px` : `calc(${100 / vis}% - ${(vis - 1) * GAP / vis}px)`,
  };

  const slots = [
    ...TESTIMONIALS.slice(-vis),     // prepend clones  (last vis real cards)
    ...TESTIMONIALS,                 // real cards
    ...TESTIMONIALS.slice(0, vis),   // append clones   (first vis real cards)
  ];

  return (
    <section className={styles.section} id="testimonials">

      {/* ── Header — arrow button position unchanged ── */}
      <div className={styles.header}>
        <div>
          <SectionBadge style={{ color: 'var(--gold-light)' }}>Traveler Stories</SectionBadge>
          <h2 className="section-title">
            What Our<br />
            <em style={{ color: 'var(--gold-light)' }}>Travelers Say</em>
          </h2>
          <p className="section-sub">
            Real experiences from happy clients who've trusted ORAVIE Holidays for
            stress-free, personalized, and memorable journeys.
          </p>
        </div>

        {/* Arrow buttons — position unchanged from original */}
        <div className={styles.navBtns}>
          <button className={styles.navBtn} onClick={goPrev} aria-label="Previous">&#8592;</button>
          <button className={styles.navBtn} onClick={goNext} aria-label="Next">&#8594;</button>
        </div>
      </div>

      {/* ── Slider ── */}
      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.track} ref={trackRef}>
          {slots.map((t, i) => (
            <div key={i} className={styles.card} style={cardStyle}>
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

      {/* ── Dots ── */}
      <div className={styles.dots}>
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === currentPos ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
