/**
 * Dialog — GFG Design System
 *
 * Figma props (from componentPropertyDefinitions — 5 variants):
 *   Max Width → xs | sm | md | lg | xl
 *
 * Figma node: component set in file OjFchNAdeHiNH5W4wYLSGS
 */

import React, { useEffect } from 'react';

export type DialogMaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface DialogProps {
  /** Whether the dialog is open */
  open?: boolean;
  /** Maps to Figma "Max Width" property */
  maxWidth?: DialogMaxWidth;
  /** Dialog title */
  title?: string;
  /** Dialog content */
  children?: React.ReactNode;
  /** Action buttons rendered at the bottom */
  actions?: React.ReactNode;
  /** Called when backdrop is clicked */
  onClose?: () => void;
  className?: string;
}

const maxWidthMap: Record<DialogMaxWidth, string> = {
  xs: '444px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

export function Dialog({
  open = true,
  maxWidth = 'sm',
  title,
  children,
  actions,
  onClose,
  className,
}: DialogProps) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    /* Backdrop */
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1300,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'dialog-title' : undefined}
    >
      {/* Paper */}
      <div
        className={className}
        style={{
          backgroundColor: '#fff',
          borderRadius: '4px',
          maxWidth: maxWidthMap[maxWidth],
          width: '100%',
          margin: '32px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
          fontFamily: 'Roboto, sans-serif',
          maxHeight: 'calc(100% - 64px)',
          overflow: 'hidden',
        }}
      >
        {/* Title */}
        {title && (
          <div style={{ padding: '16px 24px' }}>
            <p
              id="dialog-title"
              style={{
                margin: 0,
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'rgba(0,0,0,0.87)',
                letterSpacing: '0.15px',
              }}
            >
              {title}
            </p>
          </div>
        )}

        {/* Content */}
        {children && (
          <div
            style={{
              padding: '16px 24px',
              flex: '1 1 auto',
              overflowY: 'auto',
              borderTop: title ? '1px solid rgba(0,0,0,0.12)' : 'none',
              borderBottom: actions ? '1px solid rgba(0,0,0,0.12)' : 'none',
            }}
          >
            {typeof children === 'string' ? (
              <p style={{ margin: 0, fontSize: '16px', color: 'rgba(0,0,0,0.87)', lineHeight: 1.5 }}>
                {children}
              </p>
            ) : children}
          </div>
        )}

        {/* Actions */}
        {actions && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '8px',
            padding: '8px',
          }}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dialog;
