/**
 * Button — GFG Design System
 *
 * Figma props (from componentPropertyDefinitions — 270 variants):
 *   Size      → Large | Medium | Small
 *   Color     → Primary | Secondary | Error | Warning | Info | Success
 *   State     → Enabled | Hovered | Focused | Pressed | Disabled
 *   Variant   → Contained | Outlined | Text
 *   Start Icon → boolean
 *   End Icon   → boolean
 *   Label      → text
 *
 * Figma node: component set in file OjFchNAdeHiNH5W4wYLSGS
 * 270 total variants
 */

import React from 'react';

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type ButtonVariant = 'contained' | 'outlined' | 'text';

export interface ButtonProps {
  /** Maps to Figma "Variant" property */
  variant?: ButtonVariant;
  /** Maps to Figma "Color" property */
  color?: ButtonColor;
  /** Maps to Figma "Size" property */
  size?: ButtonSize;
  /** Maps to Figma "Label" text property */
  label?: string;
  /** Maps to Figma "Start Icon" boolean */
  startIcon?: React.ReactNode;
  /** Maps to Figma "End Icon" boolean */
  endIcon?: React.ReactNode;
  /** Maps to Figma "State=Disabled" */
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

// GFG primary color: Dark Dust #AF9577 (from design-tokens/colors.json)
const colorMap: Record<ButtonColor, { main: string; dark: string; light: string; contrast: string }> = {
  primary:   { main: '#AF9577', dark: '#8a7660', light: '#C8B298', contrast: '#fff' },
  secondary: { main: '#9c27b0', dark: '#7b1fa2', light: '#ba68c8', contrast: '#fff' },
  error:     { main: '#d32f2f', dark: '#c62828', light: '#ef5350', contrast: '#fff' },
  warning:   { main: '#ed6c02', dark: '#e65100', light: '#ff9800', contrast: '#fff' },
  info:      { main: '#0288d1', dark: '#01579b', light: '#03a9f4', contrast: '#fff' },
  success:   { main: '#2e7d32', dark: '#1b5e20', light: '#4caf50', contrast: '#fff' },
};

const sizeMap: Record<ButtonSize, { padding: string; fontSize: string; height: string }> = {
  large:  { padding: '10px 22px', fontSize: '15px', height: '44px' },
  medium: { padding: '8px 20px',  fontSize: '14px', height: '36px' },
  small:  { padding: '6px 16px',  fontSize: '13px', height: '30px' },
};

export function Button({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  label = 'Button',
  startIcon,
  endIcon,
  disabled = false,
  onClick,
  className,
}: ButtonProps) {
  const c = colorMap[color];
  const s = sizeMap[size];

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontWeight: 700,
    fontFamily: 'Lato, sans-serif',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background 0.2s, color 0.2s, border-color 0.2s',
    border: 'none',
    outline: 'none',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  };

  let variantStyle: React.CSSProperties = {};
  if (variant === 'contained') {
    variantStyle = {
      backgroundColor: c.main,
      color: c.contrast,
      border: 'none',
    };
  } else if (variant === 'outlined') {
    variantStyle = {
      backgroundColor: 'transparent',
      color: c.main,
      border: `1px solid ${c.main}`,
    };
  } else {
    variantStyle = {
      backgroundColor: 'transparent',
      color: c.main,
      border: 'none',
    };
  }

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      style={{ ...baseStyle, ...variantStyle }}
    >
      {startIcon && <span style={{ display: 'flex', alignItems: 'center' }}>{startIcon}</span>}
      {label}
      {endIcon && <span style={{ display: 'flex', alignItems: 'center' }}>{endIcon}</span>}
    </button>
  );
}

export default Button;
