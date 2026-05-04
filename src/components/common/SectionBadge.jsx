/**
 * @file SectionBadge.jsx
 * @description Decorative eyebrow label used above section headings.
 *
 * Props:
 *  - children:  string
 *  - style:     React.CSSProperties (optional overrides, e.g. color)
 *  - className: string
 */

import React from 'react';

export function SectionBadge({ children, style, className = '' }) {
  return (
    <div className={`section-badge ${className}`} style={style}>
      {children}
    </div>
  );
}
