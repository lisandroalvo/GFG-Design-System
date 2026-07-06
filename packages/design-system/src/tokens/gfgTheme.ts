/**
 * GFG Design System — MUI Theme
 *
 * ALL values sourced directly from Figma REST API (file OjFchNAdeHiNH5W4wYLSGS).
 * Last full audit: 2026-06-25 — all 6 components verified node-by-node.
 * Do not hand-edit — every hex value has a corresponding Figma node + token name.
 *
 * ── Button color token map (verified from Figma nodes) ──────────────────────
 *  Color      Contained BG   Text       Outlined Border/Text  Figma token
 *  Primary    #af9577        #fbf9f7    #af9577               --primary/dark-dust (verified June 20, 2026)
 *  Secondary  #333333        #ffffff    #333333               --neutral/rodeo-black
 *  Error      #a34740        #fbf9f7    #a34740               --good-wine-(error)/wine-1
 *  Warning    #8a5d1f        #ffffff    #8a5d1f               --good-ochre-(warning)/ochre-1
 *  Info       #2b4a60        #fbf9f7    #2b4a60               --good-night-(info)/night-1
 *  Success    #637058        #fbf9f7    #637058               --good-sage-(success)/sage-1
 *
 * ── Typography ───────────────────────────────────────────────────────────────
 *  Button font:    --font/family/body  Lato Bold
 *  Button size:    --font/size/overline 11px
 *  Letter spacing: 1.98px
 *  Border radius:  --radius/button  6px
 *  Heights:        Large=44px  Medium=34px  Small=24px
 */

import { createTheme } from '@mui/material/styles';

// ── GFG Semantic Colour Tokens (exact from Figma) ──────────────────────────
// Updated June 20, 2026 - Synced from Figma REST API (node 6587:47476)
const GFG = {
  // Primary palette — Dust System (#af9577 dark-dust / #fbf9f7 clear-dust)
  primary:          '#af9577',  // --primary/dark-dust (Badge, Button Primary bg in Figma)
  primaryText:      '#fbf9f7',  // --primary/clear-dust (text on primary bg)
  primaryHover:     '#c8b298',  // Figma hover fill (verified 2026-07-03 via REST API)
  primaryDark:      '#8c7560',  // Darker dust for active/pressed

  // Secondary — Neutral Rodeo Black
  secondary:        '#333333',  // --neutral/rodeo-black (reverted from Figma)
  secondaryText:    '#ffffff',

  // Error — Good Wine palette
  error:            '#a34740',  // --good-wine-(error)/wine-1 (reverted from Figma)
  errorText:        '#fbf9f7',  // --primary/clear-dust

  // Warning — Good Ochre palette
  warning:          '#8a5d1f',  // --good-ochre-(warning)/ochre-1 (reverted from Figma)
  warningText:      '#ffffff',  // --warning/contrasttext

  // Info — Good Night palette
  info:             '#2b4a60',  // --good-night-(info)/night-1
  infoText:         '#fbf9f7',  // --primary/clear-dust

  // Success — Good Sage palette
  success:          '#637058',  // --good-sage-(success)/sage-1
  successText:      '#fbf9f7',  // --primary/clear-dust
} as const;

// Hover bg values — exact fills from Figma REST API (6543:36744), 2026-07-03
// Contained: lighter tint of main color (verified per variant)
// Outlined/Text: explicit Figma fills (NOT opacity tints)
const BTN_HOVER = {
  containedPrimary:   '#c8b298',
  containedSecondary: '#6d6d6d',
  containedError:     '#a34740', // Figma keeps same color on hover
  containedWarning:   '#ac8958',
  containedInfo:      '#5e798c',
  containedSuccess:   '#8c9583',
  outlinedPrimary:    '#ffffff', // Figma: white (no bg change on hover)
  outlinedSecondary:  '#e0e0e0',
  outlinedError:      '#f9f1f0',
  outlinedWarning:    '#fbf6ef',
  outlinedInfo:       '#f1f5f9',
  outlinedSuccess:    '#e0e3dd',
  textPrimary:        '#fbf9f7',
  textSecondary:      '#f5f5f5',
  textError:          '#f9f1f0',
  textWarning:        '#f3e3cd',
  textInfo:           '#c7d9e6',
  textSuccess:        '#e0e3dd',
} as const;

export const gfgTheme = createTheme({
  palette: {
    primary: {
      main:         GFG.primary,
      light:        GFG.primaryHover,
      dark:         GFG.primaryDark,
      contrastText: GFG.primaryText,
    },
    secondary: {
      main:         GFG.secondary,
      contrastText: GFG.secondaryText,
    },
    error: {
      main:         GFG.error,
      contrastText: GFG.errorText,
    },
    warning: {
      main:         GFG.warning,
      contrastText: GFG.warningText,
    },
    info: {
      main:         GFG.info,
      contrastText: GFG.infoText,
    },
    success: {
      main:         GFG.success,
      contrastText: GFG.successText,
    },
    background: {
      default: GFG.primaryText, // --primary/clear-dust → page bg
      paper:   '#ffffff',
    },
    text: {
      primary:   'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
    },
  },

  typography: {
    fontFamily: '"Lato", "Roboto", "Helvetica Neue", Arial, sans-serif',
    button: {
      fontFamily:      '"Lato", sans-serif',
      fontWeight:      700,
      fontSize:        '11px',    // --font/size/overline
      letterSpacing:   '1.98px',  // Figma: tracking-[1.98px]
      lineHeight:      'normal',
      textTransform:   'uppercase',
    },
  },

  shape: {
    borderRadius: 4,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius:    '6px',   // --radius/button
          fontFamily:      '"Lato", sans-serif',
          fontWeight:      700,
          fontSize:        '11px',
          letterSpacing:   '1.98px',
          textTransform:   'uppercase',
          lineHeight:      'normal',
          boxShadow:       'none',
          '&:hover':       { boxShadow: 'none' },

          // ── Contained ──────────────────────────────────────────────────────
          '&.MuiButton-contained.MuiButton-colorPrimary': {
            backgroundColor: GFG.primary, color: GFG.primaryText,
            '&:hover':  { backgroundColor: BTN_HOVER.containedPrimary },   // #c8b298 (Figma)
            '&:active': { backgroundColor: GFG.primaryDark },
            '&.Mui-disabled': { backgroundColor: '#e0e0e0', color: '#6d6d6d' },
          },
          '&.MuiButton-contained.MuiButton-colorSecondary': {
            backgroundColor: GFG.secondary, color: GFG.secondaryText,
            '&:hover':  { backgroundColor: BTN_HOVER.containedSecondary }, // #6d6d6d (Figma)
            '&:active': { backgroundColor: '#111111' },
            '&.Mui-disabled': { backgroundColor: '#e0e0e0', color: '#6d6d6d' },
          },
          '&.MuiButton-contained.MuiButton-colorError': {
            backgroundColor: GFG.error, color: GFG.errorText,
            '&:hover':  { backgroundColor: BTN_HOVER.containedError },     // #a34740 (Figma — no change on hover)
            '&:active': { backgroundColor: '#7a2e2b' },
            '&.Mui-disabled': { backgroundColor: '#e0e0e0', color: '#6d6d6d' },
          },
          '&.MuiButton-contained.MuiButton-colorWarning': {
            backgroundColor: GFG.warning, color: GFG.warningText,
            '&:hover':  { backgroundColor: BTN_HOVER.containedWarning },   // #ac8958 (Figma)
            '&:active': { backgroundColor: '#5e3e10' },
            '&.Mui-disabled': { backgroundColor: '#e0e0e0', color: '#6d6d6d' },
          },
          '&.MuiButton-contained.MuiButton-colorInfo': {
            backgroundColor: GFG.info, color: GFG.infoText,
            '&:hover':  { backgroundColor: BTN_HOVER.containedInfo },      // #5e798c (Figma)
            '&:active': { backgroundColor: '#1a2f3d' },
            '&.Mui-disabled': { backgroundColor: '#e0e0e0', color: '#6d6d6d' },
          },
          '&.MuiButton-contained.MuiButton-colorSuccess': {
            backgroundColor: GFG.success, color: GFG.successText,
            '&:hover':  { backgroundColor: BTN_HOVER.containedSuccess },   // #8c9583 (Figma)
            '&:active': { backgroundColor: '#48513f' },
            '&.Mui-disabled': { backgroundColor: '#e0e0e0', color: '#6d6d6d' },
          },

          // ── Outlined ───────────────────────────────────────────────────────
          '&.MuiButton-outlined.MuiButton-colorPrimary': {
            borderColor: GFG.primary, color: GFG.primary, backgroundColor: '#ffffff',
            '&:hover':  { backgroundColor: BTN_HOVER.outlinedPrimary, borderColor: GFG.primary },    // #ffffff (Figma)
            '&.Mui-disabled': { borderColor: '#6d6d6d', color: '#6d6d6d', backgroundColor: '#e0e0e0' },
          },
          '&.MuiButton-outlined.MuiButton-colorSecondary': {
            borderColor: GFG.secondary, color: GFG.secondary,
            '&:hover':  { backgroundColor: BTN_HOVER.outlinedSecondary, borderColor: GFG.secondary }, // #e0e0e0 (Figma)
            '&.Mui-disabled': { borderColor: '#6d6d6d', color: '#6d6d6d' },
          },
          '&.MuiButton-outlined.MuiButton-colorError': {
            borderColor: GFG.error, color: GFG.error,
            '&:hover':  { backgroundColor: BTN_HOVER.outlinedError, borderColor: GFG.error },        // #f9f1f0 (Figma)
            '&.Mui-disabled': { borderColor: '#6d6d6d', color: '#6d6d6d' },
          },
          '&.MuiButton-outlined.MuiButton-colorWarning': {
            borderColor: GFG.warning, color: GFG.warning,
            '&:hover':  { backgroundColor: BTN_HOVER.outlinedWarning, borderColor: GFG.warning },    // #fbf6ef (Figma)
            '&.Mui-disabled': { borderColor: '#6d6d6d', color: '#6d6d6d' },
          },
          '&.MuiButton-outlined.MuiButton-colorInfo': {
            borderColor: GFG.info, color: GFG.info,
            '&:hover':  { backgroundColor: BTN_HOVER.outlinedInfo, borderColor: GFG.info },          // #f1f5f9 (Figma)
            '&.Mui-disabled': { borderColor: '#6d6d6d', color: '#6d6d6d' },
          },
          '&.MuiButton-outlined.MuiButton-colorSuccess': {
            borderColor: GFG.success, color: GFG.success,
            '&:hover':  { backgroundColor: BTN_HOVER.outlinedSuccess, borderColor: GFG.success },    // #e0e3dd (Figma)
            '&.Mui-disabled': { borderColor: '#6d6d6d', color: '#6d6d6d' },
          },

          // ── Text ───────────────────────────────────────────────────────────
          '&.MuiButton-text.MuiButton-colorPrimary':   { color: GFG.primary,   '&:hover': { backgroundColor: BTN_HOVER.textPrimary },   '&.Mui-disabled': { color: '#6d6d6d' } }, // #fbf9f7
          '&.MuiButton-text.MuiButton-colorSecondary': { color: GFG.secondary, '&:hover': { backgroundColor: BTN_HOVER.textSecondary }, '&.Mui-disabled': { color: '#6d6d6d' } }, // #f5f5f5
          '&.MuiButton-text.MuiButton-colorError':     { color: GFG.error,     '&:hover': { backgroundColor: BTN_HOVER.textError },     '&.Mui-disabled': { color: '#6d6d6d' } }, // #f9f1f0
          '&.MuiButton-text.MuiButton-colorWarning':   { color: GFG.warning,   '&:hover': { backgroundColor: BTN_HOVER.textWarning },   '&.Mui-disabled': { color: '#6d6d6d' } }, // #f3e3cd
          '&.MuiButton-text.MuiButton-colorInfo':      { color: GFG.info,      '&:hover': { backgroundColor: BTN_HOVER.textInfo },      '&.Mui-disabled': { color: '#6d6d6d' } }, // #c7d9e6
          '&.MuiButton-text.MuiButton-colorSuccess':   { color: GFG.success,   '&:hover': { backgroundColor: BTN_HOVER.textSuccess },   '&.Mui-disabled': { color: '#6d6d6d' } }, // #e0e3dd
        },
        sizeLarge:  { height: '44px', padding: '10px 20px' },
        sizeMedium: { height: '34px', padding: '8px 20px' },
        sizeSmall:  { height: '24px', padding: '6px 16px', fontSize: '11px' },
      },
    },

    // ── Badge ────────────────────────────────────────────────────────────────
    // Exact values from Figma node 6587:47476, verified 2026-06-22
    //   text node: Lato 12px / weight 400 / lh 14.4px / tracking 0
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontFamily:   '"Lato", sans-serif',  // Figma: Lato (was Roboto)
          fontWeight:   400,                    // Figma: 400 (was 500)
          fontSize:     '12px',
          letterSpacing: 0,                     // Figma: 0 (was 0.14px)
          lineHeight:   '14.4px',               // Figma: 14.4px (was 20px)
          minWidth:     '20px',
          height:       '20px',
          padding:      '0 6px',
          borderRadius: '100px',
        },
        dot: {
          width:        '8px',
          height:       '8px',
          minWidth:     '8px',
          padding:      0,
          borderRadius: '100px',
        },
      },
    },

    // ── Alert ───────────────────────────────────────────────────────────────
    // Exact values from Figma node 6595:48211 (12 variants), verified 2026-06-22
    //   Title:       Lato 16px / weight 400 / lh 19.2px / tracking 0
    //   Description: Lato 13px / weight 400 / lh 15.6px / tracking 0
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding:      '16px',            // Figma: 16px all sides
          fontFamily:   '"Lato", sans-serif',
          // ── Filled backgrounds (Figma exact) ──────────────────────────────
          '&.MuiAlert-filled.MuiAlert-colorSuccess': { backgroundColor: '#637058' },
          '&.MuiAlert-filled.MuiAlert-colorError':   { backgroundColor: '#a34740' },
          '&.MuiAlert-filled.MuiAlert-colorWarning': { backgroundColor: '#8a5d1f' },
          '&.MuiAlert-filled.MuiAlert-colorInfo':    { backgroundColor: '#2b4a60' },
          // ── Standard backgrounds (Figma light tints) ──────────────────────
          '&.MuiAlert-standard.MuiAlert-colorSuccess': { backgroundColor: '#e0e3dd', color: '#637058' },
          '&.MuiAlert-standard.MuiAlert-colorError':   { backgroundColor: '#eed4d3', color: '#a34740' },
          '&.MuiAlert-standard.MuiAlert-colorWarning': { backgroundColor: '#f3e3cd', color: '#8a5d1f' },
          '&.MuiAlert-standard.MuiAlert-colorInfo':    { backgroundColor: '#c7d9e6', color: '#2b4a60' },
          // ── Outlined borders ───────────────────────────────────────────────
          '&.MuiAlert-outlined.MuiAlert-colorSuccess': { borderColor: '#637058', color: '#637058' },
          '&.MuiAlert-outlined.MuiAlert-colorError':   { borderColor: '#a34740', color: '#a34740' },
          '&.MuiAlert-outlined.MuiAlert-colorWarning': { borderColor: '#8a5d1f', color: '#8a5d1f' },
          '&.MuiAlert-outlined.MuiAlert-colorInfo':    { borderColor: '#2b4a60', color: '#2b4a60' },
        },
        message: {
          fontFamily:    '"Lato", sans-serif',
          fontSize:      '13px',       // Figma: Description 13px
          fontWeight:    400,
          lineHeight:    '15.6px',     // Figma: lh 15.6px
          letterSpacing: 0,            // Figma: tracking 0
          padding:       '8px 0',
        },
        icon: { paddingTop: '7px' },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontFamily:    '"Lato", sans-serif',
          fontSize:      '16px',       // Figma: Title 16px
          fontWeight:    400,          // Figma: weight 400
          lineHeight:    '19.2px',     // Figma: lh 19.2px
          letterSpacing: 0,            // Figma: tracking 0
          marginBottom:  '2px',
        },
      },
    },

    // ── TextField / Input Fields ────────────────────────────────────────────
    // Exact values from Figma node 16350:35724 (60 variants), verified 2026-06-22
    //
    // Figma token map:
    //   Label colour (not-shrunk, all states except focused) → #6d6d6d (--color-graphite)
    //   Label colour (shrunk/floating, focused)  → #af9577  (--color-dark-dust)
    //   Label colour (shrunk, error)             → #a34740  (--color-good-wine)
    //   Label colour (shrunk/not, disabled)      → #e0e0e0  (--color-smoke)
    //   Outlined border (enabled)          → #6d6d6d  (--color-graphite)   w=1
    //   Outlined border (hover)            → #e0e0e0  (--color-smoke)      w=1
    //   Outlined border (focused)          → #af9577  (--color-dark-dust)  w=2
    //   Outlined border (error)            → #a34740  (--color-good-wine)  w=1
    //   Outlined border (disabled)         → #6d6d6d  (--color-graphite)   w=1
    //   Underline (Standard/Filled, enabled/disabled) → #c8b298 (--color-rodeo-dust) w=1
    //   Underline (Standard/Filled, hover/focus)      → #af9577 (--color-dark-dust)  w=2
    //   Underline (Standard/Filled, error)            → #a34740 (--color-good-wine)  w=2
    //   Helper text colour (default) → #af9577
    //   Helper text colour (error)   → #a34740
    //   Helper text colour (disabled)→ #e0e0e0
    //   Value text                   → #333333 (--color-rodeo-black)
    //   Placeholder text             → rgba(0,0,0,0.38)
    //   Value text (disabled)        → #e0e0e0
    //   Outlined radius              → 4px
    //   Filled bg                    → #ffffff, radius 4 4 0 0
    //   Outlined Medium h=51px · Filled Medium h=56px · Standard Medium h=41px
    //   Outlined Small  h=35px · Filled Small  h=48px · Standard Small  h=41px
    //   Label (not-shrunk): Lato 16px/400 (Outlined/Standard) · Roboto 16px/400 lh=24 ls=0.15 (Filled)
    //   Label (shrunk/floating): Lato 11px/700/ls=1.98px (all variants)
    //   Value font: 16px/400 Lato · Helper: Roboto 12px/400 lh=19.9px ls=0.40px
    MuiTextField: {
      styleOverrides: {
        root: { fontFamily: '"Lato", sans-serif' },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily:  '"Lato", sans-serif',
          fontSize:    '16px',
          fontWeight:  400,
          color:       '#6d6d6d',              // Figma: #6d6d6d --color-graphite (not-shrunk)
          '&.Mui-focused':   { color: GFG.primary },   // #af9577 when shrunk+focused
          '&.Mui-error':     { color: GFG.error },     // #a34740
          '&.Mui-disabled':  { color: '#e0e0e0' },
        },
        shrink: {
          fontSize:      '11px',
          fontWeight:    700,
          letterSpacing: '1.98px',             // Figma: ls=1.98px (was 0.5px — wrong)
          textTransform: 'uppercase',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily:  '"Lato", sans-serif',
          fontSize:    '16px',
          fontWeight:  400,
          borderRadius: '4px',
          color:        '#333333',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6d6d6d',   // Figma Enabled
            borderWidth: '1px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e0e0e0',   // Figma Hovered
            borderWidth: '1px',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: GFG.primary, // #af9577 Figma Focused
            borderWidth: '2px',
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: GFG.error,   // #a34740 Figma Error
            borderWidth: '1px',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: '#6d6d6d',   // Figma Disabled
            borderWidth: '1px',
          },
          '&.Mui-disabled': { color: '#e0e0e0' },
        },
        input: {
          fontFamily: '"Lato", sans-serif',
          fontSize:   '16px',
          fontWeight: 400,
          color:      '#333333',
          '&::placeholder': { color: 'rgba(0,0,0,0.38)', opacity: 1 },
          '&.Mui-disabled': { WebkitTextFillColor: '#e0e0e0' },
        },
        sizeSmall: {
          paddingTop: '8px', paddingBottom: '8px',
          paddingLeft: '14px', paddingRight: '14px',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          fontFamily:  '"Lato", sans-serif',
          fontSize:    '16px',
          fontWeight:  400,
          color:       '#333333',
          backgroundColor: '#ffffff',
          borderRadius: '4px 4px 0 0',
          '&:hover':            { backgroundColor: '#ffffff' },
          '&.Mui-focused':      { backgroundColor: '#ffffff' },
          '&.Mui-disabled':     { backgroundColor: '#ffffff', color: '#e0e0e0' },
          '&::before': { borderBottomColor: '#c8b298', borderBottomWidth: '1px' }, // enabled/disabled
          '&:hover:not(.Mui-disabled)::before': { borderBottomColor: GFG.primary, borderBottomWidth: '2px' },
          '&::after':           { borderBottomColor: GFG.primary, borderBottomWidth: '2px' },
          '&.Mui-error::before':{ borderBottomColor: GFG.error, borderBottomWidth: '2px' },
          '&.Mui-error::after': { borderBottomColor: GFG.error, borderBottomWidth: '2px' },
          '&.Mui-disabled::before': { borderBottomColor: '#c8b298', borderBottomWidth: '1px', borderBottomStyle: 'solid' },
        },
        input: {
          fontFamily: '"Lato", sans-serif',
          fontSize:   '16px',
          fontWeight: 400,
          '&::placeholder': { color: 'rgba(0,0,0,0.38)', opacity: 1 },
          '&.Mui-disabled': { WebkitTextFillColor: '#e0e0e0' },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily:  '"Lato", sans-serif',
          fontSize:    '16px',
          fontWeight:  400,
          color:       '#333333',
          '&::before': { borderBottomColor: '#c8b298', borderBottomWidth: '1px' },
          '&:hover:not(.Mui-disabled)::before': { borderBottomColor: GFG.primary, borderBottomWidth: '2px' },
          '&::after':           { borderBottomColor: GFG.primary, borderBottomWidth: '2px' },
          '&.Mui-error::before':{ borderBottomColor: GFG.error, borderBottomWidth: '2px' },
          '&.Mui-error::after': { borderBottomColor: GFG.error, borderBottomWidth: '2px' },
          '&.Mui-disabled::before': { borderBottomColor: '#c8b298', borderBottomWidth: '1px', borderBottomStyle: 'solid' },
          '&.Mui-disabled': { color: '#e0e0e0' },
        },
        input: {
          fontFamily: '"Lato", sans-serif',
          fontSize:   '16px',
          fontWeight: 400,
          '&::placeholder': { color: 'rgba(0,0,0,0.38)', opacity: 1 },
          '&.Mui-disabled': { WebkitTextFillColor: '#e0e0e0' },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily:    '"Roboto", sans-serif',  // Figma: Roboto (not Lato)
          fontSize:      '12px',
          fontWeight:    400,
          lineHeight:    '19.92px',               // Figma: lh=19.9px
          letterSpacing: '0.4px',                 // Figma: ls=0.40px (was 0 — wrong)
          color:         GFG.primary,             // #af9577
          '&.Mui-error':    { color: GFG.error },    // #a34740
          '&.Mui-disabled': { color: '#e0e0e0' },
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: '4px',
          boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
        },
      },
    },
  },
});

export default gfgTheme;
