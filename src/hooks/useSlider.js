/**
 * @file useSlider.js
 * @description Reusable hook for managing a cyclic slider index with optional auto-play.
 *
 * @param {number} total       - Total number of slides
 * @param {number} [interval]  - Auto-play interval in ms (omit to disable)
 * @returns {{ current, goTo, next, prev }}
 */

import { useState, useEffect, useCallback } from 'react';

export function useSlider(total, interval) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);
  const goTo = useCallback(n => setCurrent(n), []);

  useEffect(() => {
    if (!interval) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [interval, next]);

  return { current, goTo, next, prev };
}
