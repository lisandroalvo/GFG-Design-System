/**
 * Alert — GFG Design System
 *
 * Figma props (from componentPropertyDefinitions):
 *   Type      → Error | Warning | Info | Success
 *   Variant   → Filled | Outlined | Standard
 *   On Close  → boolean
 *   Action    → boolean
 *   Title     → boolean
 *   Description → boolean
 *
 * Figma node: component set in file OjFchNAdeHiNH5W4wYLSGS
 */

import React from 'react';

export type AlertSeverity = 'error' | 'warning' | 'info' | 'success';
export type AlertVariant = 'standard' | 'filled' | 'outlined';

export interface AlertProps {
  /** Maps to Figma "Type" property */
  severity?: AlertSeverity;
  /** Maps to Figma "Variant" property */
  variant?: AlertVariant;
  /** Maps to Figma "Title" boolean — shows a bold title above message */
  title?: string;
  /** Maps to Figma "Description" boolean — the main alert message */
  children?: React.ReactNode;
  /** Maps to Figma "On Close" boolean — shows × button when provided */
  onClose?: () => void;
  /** Maps to Figma "Action" boolean — slot for an action element */
  action?: React.ReactNode;
  className?: string;
}

const icons: Record<AlertSeverity, React.ReactElement> = {
  success: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5-4-4 1.41-1.41L10 13.67l6.59-6.59L18 8.5l-8 8z" />
    </svg>
  ),
  error: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </svg>
  ),
  warning: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  ),
  info: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  ),
};

type StyleSet = { root: string; icon: string; title: string; text: string };

const styles: Record<AlertSeverity, Record<AlertVariant, StyleSet>> = {
  success: {
    standard:  { root: 'gfg-alert--success-standard',  icon: '#2e7d32', title: '#1e4620', text: '#1e4620' },
    filled:    { root: 'gfg-alert--success-filled',    icon: '#fff',    title: '#fff',    text: '#fff' },
    outlined:  { root: 'gfg-alert--success-outlined',  icon: '#2e7d32', title: '#1e4620', text: '#1e4620' },
  },
  error: {
    standard:  { root: 'gfg-alert--error-standard',   icon: '#d32f2f', title: '#5f2120', text: '#5f2120' },
    filled:    { root: 'gfg-alert--error-filled',     icon: '#fff',    title: '#fff',    text: '#fff' },
    outlined:  { root: 'gfg-alert--error-outlined',   icon: '#d32f2f', title: '#5f2120', text: '#5f2120' },
  },
  warning: {
    standard:  { root: 'gfg-alert--warning-standard', icon: '#ed6c02', title: '#663c00', text: '#663c00' },
    filled:    { root: 'gfg-alert--warning-filled',   icon: '#fff',    title: '#fff',    text: '#fff' },
    outlined:  { root: 'gfg-alert--warning-outlined', icon: '#ed6c02', title: '#663c00', text: '#663c00' },
  },
  info: {
    standard:  { root: 'gfg-alert--info-standard',    icon: '#0288d1', title: '#01579b', text: '#014361' },
    filled:    { root: 'gfg-alert--info-filled',      icon: '#fff',    title: '#fff',    text: '#fff' },
    outlined:  { root: 'gfg-alert--info-outlined',    icon: '#0288d1', title: '#01579b', text: '#014361' },
  },
};

const rootStyles: Record<AlertSeverity, Record<AlertVariant, React.CSSProperties>> = {
  success: {
    standard: { backgroundColor: 'rgb(237,247,237)', border: 'none' },
    filled:   { backgroundColor: 'rgb(46,125,50)',   border: 'none' },
    outlined: { backgroundColor: 'transparent',      border: '1px solid rgb(46,125,50)' },
  },
  error: {
    standard: { backgroundColor: 'rgb(253,237,237)', border: 'none' },
    filled:   { backgroundColor: 'rgb(211,47,47)',   border: 'none' },
    outlined: { backgroundColor: 'transparent',      border: '1px solid rgb(211,47,47)' },
  },
  warning: {
    standard: { backgroundColor: 'rgb(255,244,229)', border: 'none' },
    filled:   { backgroundColor: 'rgb(237,108,2)',   border: 'none' },
    outlined: { backgroundColor: 'transparent',      border: '1px solid rgb(237,108,2)' },
  },
  info: {
    standard: { backgroundColor: 'rgb(229,246,253)', border: 'none' },
    filled:   { backgroundColor: 'rgb(2,136,209)',   border: 'none' },
    outlined: { backgroundColor: 'transparent',      border: '1px solid rgb(2,136,209)' },
  },
};

export function Alert({
  severity = 'success',
  variant = 'standard',
  title,
  children = 'This is an alert message.',
  onClose,
  action,
  className,
}: AlertProps) {
  const s = styles[severity][variant];
  const rs = rootStyles[severity][variant];

  return (
    <div
      role="alert"
      className={className}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
        padding: '6px 16px',
        borderRadius: '4px',
        ...rs,
      }}
    >
      {/* Icon */}
      <span style={{ color: s.icon, paddingTop: '7px', flexShrink: 0 }}>
        {icons[severity]}
      </span>

      {/* Content */}
      <div style={{ flex: 1, paddingTop: '8px', paddingBottom: '8px', minWidth: 0 }}>
        {title && (
          <p style={{
            color: s.title,
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 1.5,
            margin: '0 0 4px',
          }}>
            {title}
          </p>
        )}
        <p style={{
          color: s.text,
          fontSize: '14px',
          lineHeight: 1.43,
          letterSpacing: '0.17px',
          margin: 0,
        }}>
          {children}
        </p>
        {action && (
          <div style={{ marginTop: '8px' }}>{action}</div>
        )}
      </div>

      {/* Close button — Figma "On Close" boolean */}
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close alert"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: s.icon,
            paddingTop: '6px',
            flexShrink: 0,
            opacity: 1,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Alert;
