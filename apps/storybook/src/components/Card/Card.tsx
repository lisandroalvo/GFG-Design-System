/**
 * Card — GFG Design System
 *
 * Figma props (from componentPropertyDefinitions):
 *   Small Screen → boolean (False | True)
 *   Blank        → boolean (False | True)
 *
 * Figma node: component set in file OjFchNAdeHiNH5W4wYLSGS
 */

import React from 'react';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card subtitle / secondary text */
  subtitle?: string;
  /** Media area — pass an image URL or a React element */
  media?: string | React.ReactNode;
  /** Main content of the card */
  children?: React.ReactNode;
  /** Action buttons rendered at the bottom */
  actions?: React.ReactNode;
  /** Maps to Figma "Small Screen" boolean — reduces padding on small screens */
  smallScreen?: boolean;
  /** Maps to Figma "Blank" boolean — renders a minimal empty card */
  blank?: boolean;
  /** Adds a box shadow (elevation) */
  raised?: boolean;
  className?: string;
}

export function Card({
  title,
  subtitle,
  media,
  children,
  actions,
  smallScreen = false,
  blank = false,
  raised = true,
  className,
}: CardProps) {
  const padding = smallScreen ? '12px' : '16px';

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '4px',
    overflow: 'hidden',
    width: smallScreen ? '100%' : '344px',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: raised
      ? '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
      : 'none',
    border: raised ? 'none' : '1px solid rgba(0,0,0,0.12)',
    fontFamily: 'Roboto, sans-serif',
  };

  if (blank) {
    return (
      <div className={className} style={{ ...cardStyle, minHeight: '120px' }} />
    );
  }

  return (
    <div className={className} style={cardStyle}>
      {/* Header */}
      {(title || subtitle) && (
        <div style={{ padding }}>
          {title && (
            <p style={{
              margin: 0,
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: 1.334,
              color: 'rgba(0,0,0,0.87)',
              letterSpacing: '0px',
            }}>
              {title}
            </p>
          )}
          {subtitle && (
            <p style={{
              margin: '4px 0 0',
              fontSize: '14px',
              color: 'rgba(0,0,0,0.54)',
              lineHeight: 1.43,
            }}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Media */}
      {media && (
        <div style={{ width: '100%', height: '194px', overflow: 'hidden', flexShrink: 0 }}>
          {typeof media === 'string' ? (
            <img
              src={media}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {media}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      {children && (
        <div style={{ padding, flex: 1 }}>
          {children}
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
  );
}

export default Card;
