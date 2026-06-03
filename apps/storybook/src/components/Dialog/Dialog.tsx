/**
 * Dialog — GFG Design System
 *
 * Built on MUI Dialog with the GFG theme applied.
 * Figma file OjFchNAdeHiNH5W4wYLSGS · node 127:59921 · 5 variants
 *
 * Figma props:
 *   Max Width → xs | sm | md | lg | xl
 *
 * Developer usage:
 *   import Dialog from '@mui/material/Dialog';
 */

import React from 'react';
import MuiDialog from '@mui/material/Dialog';
import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import MuiDialogContentText from '@mui/material/DialogContentText';
import MuiDialogActions from '@mui/material/DialogActions';

export interface DialogProps {
  /** Controls open state */
  open?: boolean;
  /** Maps to Figma "Max Width" — xs | sm | md | lg | xl */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Dialog title */
  title?: string;
  /** Dialog content */
  children?: React.ReactNode;
  /** Action buttons */
  actions?: React.ReactNode;
  /** Callback when backdrop/Escape pressed */
  onClose?: () => void;
  fullWidth?: boolean;
}

export function Dialog({
  open = true,
  maxWidth = 'sm',
  title,
  children,
  actions,
  onClose,
  fullWidth = true,
}: DialogProps) {
  return (
    <MuiDialog
      open={open}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      onClose={onClose}
    >
      {title && <MuiDialogTitle>{title}</MuiDialogTitle>}
      {children && (
        <MuiDialogContent dividers={!!title}>
          {typeof children === 'string'
            ? <MuiDialogContentText>{children}</MuiDialogContentText>
            : children}
        </MuiDialogContent>
      )}
      {actions && <MuiDialogActions>{actions}</MuiDialogActions>}
    </MuiDialog>
  );
}

export default Dialog;
