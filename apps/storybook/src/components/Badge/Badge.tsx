/**
 * Badge — GFG Design System
 *
 * Figma props (from componentPropertyDefinitions — 13 variants):
 *   Variant → Standard | Dot
 *   Color   → Default | Primary | Secondary | Error | Warning | Info | Success
 *   Content → text (shown when Variant=Standard)
 *
 * Figma node: component set in file OjFchNAdeHiNH5W4wYLSGS
 */

import React from 'react';

export type BadgeVariant = 'standard' | 'dot';
export type BadgeColor = 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';

export interface BadgeProps {
  /** Maps to Figma "Variant" property */
  variant?: BadgeVariant;
  /** Maps to Figma "Color" property */
  color?: BadgeColor;
  /** Maps to Figma "Content" text property — displayed when variant is standard */
  content?: string | number;
  /** The element the badge is anchored to */
  children?: React.ReactNode;
  className?: string;
}

// Color palette from design-tokens/colors.json
const colorMap: Record<BadgeColor, { bg: string; text: string }> = {
  default:   { bg: '#e0e0e0', text: 'rgba(0,0,0,0.87)' },
  primary:   { bg: '#AF9577', text: '#fff' },   // GFG Dark Dust
  secondary: { bg: '#9c27b0', text: '#fff' },
  error:     { bg: '#d32f2f', text: '#fff' },
  warning:   { bg: '#ed6c02', text: '#fff' },
  info:      { bg: '#0288d1', text: '#fff' },
  success:   { bg: '#2e7d32', text: '#fff' },
};

export function Badge({
  variant = 'standard',
  color = 'primary',
  content = '1',
  children,
  className,
}: BadgeProps) {
  const c = colorMap[color];

  const badgeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translate(50%, -50%)',
    transformOrigin: '100% 0%',
    backgroundColor: c.bg,
    color: c.text,
    borderRadius: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: '0.14px',
    lineHeight: '20px',
    minWidth: variant === 'dot' ? '10px' : '20px',
    height: variant === 'dot' ? '10px' : '20px',
    padding: variant === 'dot' ? '0' : '0 6px',
  };

  if (children) {
    return (
      <span className={className} style={{ position: 'relative', display: 'inline-flex' }}>
        {children}
        <span style={badgeStyle}>
          {variant === 'standard' && content}
        </span>
      </span>
    );
  }

  // Standalone badge (no anchor)
  return (
    <span
      className={className}
      style={{
        ...badgeStyle,
        position: 'relative',
        transform: 'none',
        display: 'inline-flex',
      }}
    >
      {variant === 'standard' && content}
    </span>
  );
}

export default Badge;
