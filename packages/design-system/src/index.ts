// GFG Design System — public package entry point
// Approved components only (verified against Figma file OjFchNAdeHiNH5W4wYLSGS)
//
// Usage:
//   import { Button, TextField, Alert, Badge, gfgTheme } from "@lisandroalvo/gfg-design-system";
//
// NOT exported: Card, Dialog (not yet approved in the GFG Design System)

export { Alert } from './components/Alert/Alert';
export type { AlertProps } from './components/Alert/Alert';

export { Badge } from './components/Badge/Badge';
export type { BadgeProps } from './components/Badge/Badge';

export { Button } from './components/Button/Button';
export type { ButtonProps } from './components/Button/Button';

export { TextField } from './components/TextField/TextField';
export type { TextFieldProps } from './components/TextField/TextField';

export { gfgTheme } from './tokens/gfgTheme';
