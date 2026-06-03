/**
 * TextField — GFG Design System
 *
 * Built on MUI TextField with the GFG theme applied.
 * Figma file OjFchNAdeHiNH5W4wYLSGS · node 6570:48313 · 60 variants
 *
 * Figma props → MUI props:
 *   Variant      → variant    (Standard | Filled | Outlined)
 *   Size         → size       (Medium | Small)
 *   State=Error  → error      (boolean)
 *   State=Disabled → disabled (boolean)
 *   Helper       → helperText (boolean in Figma → string in code)
 *   Adorn. Start → InputProps.startAdornment
 *   Adorn. End   → InputProps.endAdornment
 *   Label        → label
 *
 * Developer usage:
 *   import TextField from '@mui/material/TextField';
 */

import React from 'react';
import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export interface TextFieldProps {
  /** Maps to Figma "Variant" — Standard | Filled | Outlined */
  variant?: 'standard' | 'filled' | 'outlined';
  /** Maps to Figma "Size" — Medium | Small */
  size?: 'medium' | 'small';
  /** Maps to Figma "Label" text */
  label?: string;
  /** Maps to Figma "State=Error" */
  error?: boolean;
  /** Maps to Figma "State=Disabled" */
  disabled?: boolean;
  /** Maps to Figma "Helper" boolean — helper text below the field */
  helperText?: string;
  /** Maps to Figma "Adorn. Start" boolean */
  startAdornment?: React.ReactNode;
  /** Maps to Figma "Adorn. End" boolean */
  endAdornment?: React.ReactNode;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  fullWidth?: boolean;
}

export function TextField({
  variant = 'outlined',
  size = 'medium',
  label = 'Label',
  error = false,
  disabled = false,
  helperText,
  startAdornment,
  endAdornment,
  placeholder,
  type = 'text',
  value,
  onChange,
  fullWidth = false,
}: TextFieldProps) {
  return (
    <MuiTextField
      variant={variant}
      size={size}
      label={label}
      error={error}
      disabled={disabled}
      helperText={helperText}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment: startAdornment
          ? <InputAdornment position="start">{startAdornment}</InputAdornment>
          : undefined,
        endAdornment: endAdornment
          ? <InputAdornment position="end">{endAdornment}</InputAdornment>
          : undefined,
      }}
    />
  );
}

export default TextField;
