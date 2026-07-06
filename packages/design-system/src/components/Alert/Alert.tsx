/**
 * Alert — GFG Design System
 *
 * Built on MUI Alert with the GFG theme applied.
 * Figma file OjFchNAdeHiNH5W4wYLSGS · 12 variants
 *
 * Figma props → MUI props mapping:
 *   Type        → severity  (Error | Warning | Info | Success)
 *   Variant     → variant   (Filled | Outlined | Standard)
 *   On Close    → onClose   (boolean in Figma → callback in code)
 *   Title       → title string (boolean in Figma)
 *   Description → children
 *   Action      → action slot (boolean in Figma)
 *
 * Developer usage:
 *   import Alert from '@mui/material/Alert';
 *   import AlertTitle from '@mui/material/AlertTitle';
 */

import React from 'react';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export interface AlertProps {
  /** Maps to Figma "Type" — Error | Warning | Info | Success */
  severity?: 'error' | 'warning' | 'info' | 'success';
  /** Maps to Figma "Variant" — Filled | Outlined | Standard */
  variant?: 'filled' | 'outlined' | 'standard';
  /** Maps to Figma "Title" boolean — shows bold title when provided */
  title?: string;
  /** Maps to Figma "Description" */
  children?: React.ReactNode;
  /** Maps to Figma "On Close" boolean — shows × button when provided */
  onClose?: () => void;
  /** Maps to Figma "Action" boolean — custom action element */
  action?: React.ReactNode;
}

export function Alert({
  severity = 'success',
  variant = 'standard',
  title,
  children = 'This is an alert message.',
  onClose,
  action,
}: AlertProps) {
  return (
    <MuiAlert
      severity={severity}
      variant={variant}
      onClose={onClose}
      action={action}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );
}

export default Alert;
