/**
 * Badge — GFG Design System
 *
 * Built on MUI Badge with the GFG theme applied.
 * Figma file OjFchNAdeHiNH5W4wYLSGS · node 6587:47500 · 13 variants
 *
 * Exact Figma color tokens (from GFG theme):
 *   Primary:   --primary/dark-dust           #af9577
 *   Secondary: --neutral/rodeo-black         #333333
 *   Error:     --good-wine-(error)/wine-1    #a34740
 *   Warning:   --good-ochre-(warning)/ochre-1 #8a5d1f
 *   Info:      --good-night-(info)/night-1   #2b4a60
 *   Success:   --good-sage-(success)/sage-1  #637058
 *   Font:      Roboto Medium 12px, tracking 0.14px
 *   Dot size:  8px × 8px
 *
 * Developer usage:
 *   import Badge from '@mui/material/Badge';
 *   <Badge badgeContent={4} color="primary"><MailIcon /></Badge>
 */

import React from 'react';
import MuiBadge from '@mui/material/Badge';

export interface BadgeProps {
  /** Maps to Figma "Variant" — Standard | Dot */
  variant?: 'standard' | 'dot';
  /** Maps to Figma "Color" */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
  /** Maps to Figma "Content" text — shown when variant=standard */
  badgeContent?: React.ReactNode;
  /** The element the badge anchors to */
  children?: React.ReactNode;
  /** Hide badge when content is zero */
  showZero?: boolean;
  max?: number;
}

export function Badge({
  variant = 'standard',
  color = 'primary',
  badgeContent,
  children,
  showZero = false,
  max = 99,
}: BadgeProps) {
  return (
    <MuiBadge
      variant={variant}
      color={color}
      badgeContent={variant === 'dot' ? undefined : badgeContent}
      showZero={showZero}
      max={max}
    >
      {children}
    </MuiBadge>
  );
}

export default Badge;
