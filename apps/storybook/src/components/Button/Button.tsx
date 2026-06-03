/**
 * Button — GFG Design System
 *
 * Built on MUI Button with the GFG theme applied.
 * All token values sourced from Figma (file OjFchNAdeHiNH5W4wYLSGS, node 6543:36744).
 *
 * Exact Figma tokens used:
 *   Contained/Primary bg:    --primary/dark-dust   #af9577
 *   Contained/Primary text:  --primary/clear-dust  #fbf9f7
 *   Outlined border/text:    --primary/dark-dust   #af9577
 *   Text variant text:       --primary/dark-dust   #af9577
 *   Font family:             --font/family/body    Lato Bold
 *   Font size:               --font/size/overline  11px
 *   Letter spacing:          1.98px
 *   Border radius:           --radius/button       6px
 *   Height Large:            44px
 *   Height Medium:           34px
 *   Height Small:            24px
 *
 * Figma variants: 270 total
 *   Size    → Large | Medium | Small
 *   Color   → Primary | Secondary | Error | Warning | Info | Success
 *   Variant → Contained | Outlined | Text
 *   State   → Enabled | Hovered | Focused | Pressed | Disabled
 *
 * Developer usage:
 *   import Button from '@mui/material/Button';
 *   // Apply GFG theme via ThemeProvider
 */

import React from 'react';
import MuiButton from '@mui/material/Button';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps {
  /** Maps to Figma "Variant" — Contained | Outlined | Text */
  variant?: 'contained' | 'outlined' | 'text';
  /** Maps to Figma "Color" — Primary | Secondary | Error | Warning | Info | Success */
  color?: MuiButtonProps['color'];
  /** Maps to Figma "Size" — Large | Medium | Small */
  size?: 'large' | 'medium' | 'small';
  /** Maps to Figma "Label" text property */
  children?: React.ReactNode;
  /** Maps to Figma "Start Icon" boolean */
  startIcon?: React.ReactNode;
  /** Maps to Figma "End Icon" boolean */
  endIcon?: React.ReactNode;
  /** Maps to Figma "State=Disabled" */
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
}

export function Button({
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  children = 'Button',
  startIcon,
  endIcon,
  disabled = false,
  onClick,
  fullWidth = false,
}: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      fullWidth={fullWidth}
      disableElevation
    >
      {children}
    </MuiButton>
  );
}

export default Button;
