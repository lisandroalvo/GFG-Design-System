/**
 * TextField — GFG Design System
 *
 * Figma props (from componentPropertyDefinitions — 60 variants):
 *   Variant    → Standard | Filled | Outlined
 *   Size       → Medium | Small
 *   State      → Enabled | Hovered | Focused | Disabled | Error
 *   Has Value  → False | True
 *   Helper     → boolean
 *   Adorn. Start → boolean
 *   Adorn. End   → boolean
 *   Label        → text
 *
 * Figma node: component set in file OjFchNAdeHiNH5W4wYLSGS
 */

import React, { useState } from 'react';

export type TextFieldVariant = 'standard' | 'filled' | 'outlined';
export type TextFieldSize = 'medium' | 'small';
export type TextFieldState = 'enabled' | 'focused' | 'disabled' | 'error';

export interface TextFieldProps {
  /** Maps to Figma "Variant" property */
  variant?: TextFieldVariant;
  /** Maps to Figma "Size" property */
  size?: TextFieldSize;
  /** Maps to Figma "State" property */
  state?: TextFieldState;
  /** Maps to Figma "Label" text property */
  label?: string;
  /** Maps to Figma "Helper" boolean — shows helper text below */
  helperText?: string;
  /** Maps to Figma "Adorn. Start" boolean */
  startAdornment?: React.ReactNode;
  /** Maps to Figma "Adorn. End" boolean */
  endAdornment?: React.ReactNode;
  /** Controlled value */
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

const accentColor = '#AF9577'; // GFG Dark Dust — primary colour from design-tokens

export function TextField({
  variant = 'outlined',
  size = 'medium',
  state = 'enabled',
  label = 'Label',
  helperText,
  startAdornment,
  endAdornment,
  value,
  onChange,
  placeholder,
  type = 'text',
  className,
}: TextFieldProps) {
  const [focused, setFocused] = useState(false);
  const [internalValue, setInternalValue] = useState('');

  const isDisabled = state === 'disabled';
  const isError = state === 'error';
  const isFocused = focused && !isDisabled;
  const hasValue = (value ?? internalValue).length > 0;
  const labelUp = isFocused || hasValue;

  const height = size === 'small' ? '40px' : '56px';
  const labelSmallSize = '12px';
  const labelNormalSize = size === 'small' ? '14px' : '16px';
  const borderColor = isError ? '#d32f2f' : isFocused ? accentColor : 'rgba(0,0,0,0.23)';
  const labelColor = isError ? '#d32f2f' : isFocused ? accentColor : 'rgba(0,0,0,0.6)';

  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'column',
    width: '220px',
    fontFamily: 'Roboto, sans-serif',
    opacity: isDisabled ? 0.5 : 1,
  };

  const inputContainerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height,
    borderRadius: variant === 'outlined' ? '4px' : variant === 'filled' ? '4px 4px 0 0' : '0',
    backgroundColor:
      variant === 'filled' ? 'rgba(0,0,0,0.06)' : 'transparent',
    border: variant === 'outlined'
      ? `${isFocused ? '2px' : '1px'} solid ${borderColor}`
      : 'none',
    borderBottom: variant !== 'outlined'
      ? `${isFocused ? '2px' : '1px'} solid ${borderColor}`
      : undefined,
    padding: startAdornment ? '0 12px 0 0' : '0 12px',
    boxSizing: 'border-box',
    cursor: isDisabled ? 'not-allowed' : 'text',
  };

  const labelStyle: React.CSSProperties = {
    position: 'absolute',
    left: startAdornment ? '40px' : variant === 'outlined' ? '14px' : '12px',
    top: labelUp ? (variant === 'outlined' ? '-8px' : '8px') : '50%',
    transform: labelUp ? 'none' : 'translateY(-50%)',
    fontSize: labelUp ? labelSmallSize : labelNormalSize,
    fontWeight: 400,
    color: labelColor,
    backgroundColor: labelUp && variant === 'outlined' ? '#fff' : 'transparent',
    padding: labelUp && variant === 'outlined' ? '0 4px' : '0',
    transition: 'all 0.15s ease',
    pointerEvents: 'none',
    lineHeight: '1.2',
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontSize: size === 'small' ? '14px' : '16px',
    color: 'rgba(0,0,0,0.87)',
    lineHeight: '24px',
    letterSpacing: '0.15px',
    padding: variant === 'filled'
      ? (size === 'small' ? '16px 12px 4px' : '20px 12px 8px')
      : (size === 'small' ? '8px 0' : '12px 0'),
    cursor: isDisabled ? 'not-allowed' : 'text',
    width: '100%',
  };

  return (
    <div className={className} style={wrapperStyle}>
      <div style={inputContainerStyle}>
        {startAdornment && (
          <span style={{ display: 'flex', alignItems: 'center', paddingLeft: '12px', paddingRight: '8px', color: 'rgba(0,0,0,0.54)', flexShrink: 0 }}>
            {startAdornment}
          </span>
        )}

        <label style={labelStyle}>{label}</label>

        <input
          type={type}
          disabled={isDisabled}
          placeholder={focused ? placeholder : undefined}
          value={value ?? internalValue}
          onChange={onChange ?? (e => setInternalValue(e.target.value))}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={inputStyle}
          aria-invalid={isError}
          aria-describedby={helperText ? 'helper-text' : undefined}
        />

        {endAdornment && (
          <span style={{ display: 'flex', alignItems: 'center', paddingRight: '12px', color: 'rgba(0,0,0,0.54)', flexShrink: 0 }}>
            {endAdornment}
          </span>
        )}
      </div>

      {helperText && (
        <p
          id="helper-text"
          style={{
            margin: '3px 14px 0',
            fontSize: '12px',
            color: isError ? '#d32f2f' : 'rgba(0,0,0,0.6)',
            lineHeight: '1.66',
            letterSpacing: '0.4px',
          }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}

export default TextField;
