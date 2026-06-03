/**
 * Card — GFG Design System
 *
 * Built on MUI Card with the GFG theme applied.
 * Figma file OjFchNAdeHiNH5W4wYLSGS · node 6562:38678
 *
 * Figma props:
 *   Small Screen → reduces padding on mobile layouts
 *   Blank        → renders an empty card shell
 *
 * Developer usage:
 *   import Card from '@mui/material/Card';
 *   import CardContent from '@mui/material/CardContent';
 */

import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card subtitle / secondary text */
  subheader?: string;
  /** Media — image URL */
  image?: string;
  /** Media height in px */
  imageHeight?: number;
  /** Card body content */
  children?: React.ReactNode;
  /** Action buttons */
  actions?: React.ReactNode;
  /** Maps to Figma "Small Screen" boolean */
  smallScreen?: boolean;
  /** Maps to Figma "Blank" boolean — empty card shell */
  blank?: boolean;
  /** Elevation shadow (Figma default: 1) */
  elevation?: number;
  sx?: object;
}

export function Card({
  title,
  subheader,
  image,
  imageHeight = 194,
  children,
  actions,
  smallScreen = false,
  blank = false,
  elevation = 1,
  sx,
}: CardProps) {
  const width = smallScreen ? '100%' : 344;

  if (blank) {
    return <MuiCard elevation={elevation} sx={{ width, minHeight: 120, ...sx }} />;
  }

  return (
    <MuiCard elevation={elevation} sx={{ width, ...sx }}>
      {(title || subheader) && (
        <CardHeader title={title} subheader={subheader} />
      )}
      {image && (
        <CardMedia component="img" height={imageHeight} image={image} alt={title || ''} />
      )}
      {children && (
        <CardContent>{children}</CardContent>
      )}
      {actions && (
        <CardActions sx={{ justifyContent: 'flex-end' }}>{actions}</CardActions>
      )}
    </MuiCard>
  );
}

export default Card;
