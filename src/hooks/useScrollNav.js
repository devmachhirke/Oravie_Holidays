/**
 * @file useScrollNav.js
 * @description Detects page scroll position and returns a boolean indicating
 *              whether the page has been scrolled past a given threshold.
 *
 * @param {number} [threshold=60] - Scroll-Y threshold in pixels
 * @returns {boolean} scrolled
 */

import { useState, useEffect } from 'react';

export function useScrollNav(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
}
