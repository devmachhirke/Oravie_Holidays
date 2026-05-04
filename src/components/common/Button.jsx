/**
 * @file Button.jsx
 * @description Shared polymorphic button / anchor component.
 *
 * Props:
 *  - variant: 'primary' | 'outline' | 'dark' | 'ghost'  (default: 'primary')
 *  - href:    string – renders an <a> instead of <button>
 *  - className, children, ...rest are forwarded
 */

import React from 'react';

const variantMap = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  dark:    'btn-dark',
  ghost:   'btn-ghost',
};

export function Button({ variant = 'primary', href, className = '', children, ...rest }) {
  const cls = `${variantMap[variant] ?? variantMap.primary} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
