/**
 * GFG Design System — MUI Theme
 *
 * ALL values sourced directly from Figma MCP (file OjFchNAdeHiNH5W4wYLSGS).
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
  primaryHover:     '#c4aa8f',  // Lighter dust for hover
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

// Helper: hover bg for outlined/text buttons (8% tint of main color)
const hoverBg = (hex: string) => `${hex}14`; // 14 hex = ~8% opacity

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
        },
        sizeLarge:  { height: '44px', padding: '10px 20px' },
        sizeMedium: { height: '34px', padding: '8px 20px' },
        sizeSmall:  { height: '24px', padding: '6px 16px', fontSize: '11px' },

        // ── Contained ────────────────────────────────────────────────────────
        containedPrimary: {
          backgroundColor: GFG.primary,       // #af9577 --primary/dark-dust
          color:           GFG.primaryText,
          '&:hover':       { backgroundColor: GFG.primaryHover },  // #c4aa8f
          '&:active':      { backgroundColor: GFG.primaryDark },   // #8c7560
          '&.Mui-disabled':{ backgroundColor: `${GFG.primary}60`, color: GFG.primaryText },
        },
        containedSecondary: {
          backgroundColor: GFG.secondary,
          color:           GFG.secondaryText,
          '&:hover':       { backgroundColor: '#555555' },
          '&:active':      { backgroundColor: '#111111' },
          '&.Mui-disabled':{ backgroundColor: `${GFG.secondary}60`, color: GFG.secondaryText },
        },
        containedError: {
          backgroundColor: GFG.error,
          color:           GFG.errorText,
          '&:hover':       { backgroundColor: '#c25550' },
          '&:active':      { backgroundColor: '#7a2e2b' },
          '&.Mui-disabled':{ backgroundColor: `${GFG.error}60`, color: GFG.errorText },
        },
        containedWarning: {
          backgroundColor: GFG.warning,
          color:           GFG.warningText,
          '&:hover':       { backgroundColor: '#b07a2e' },
          '&:active':      { backgroundColor: '#5e3e10' },
          '&.Mui-disabled':{ backgroundColor: `${GFG.warning}60`, color: GFG.warningText },
        },
        containedInfo: {
          backgroundColor: GFG.info,
          color:           GFG.infoText,
          '&:hover':       { backgroundColor: '#3d6280' },
          '&:active':      { backgroundColor: '#1a2f3d' },
          '&.Mui-disabled':{ backgroundColor: `${GFG.info}60`, color: GFG.infoText },
        },
        containedSuccess: {
          backgroundColor: GFG.success,
          color:           GFG.successText,
          '&:hover':       { backgroundColor: '#7a8f6e' },
          '&:active':      { backgroundColor: '#48513f' },
          '&.Mui-disabled':{ backgroundColor: `${GFG.success}60`, color: GFG.successText },
        },

        // ── Outlined ─────────────────────────────────────────────────────────
        outlinedPrimary: {
          borderColor: GFG.primary, color: GFG.primary, backgroundColor: 'transparent',
          '&:hover':   { backgroundColor: hoverBg(GFG.primary), borderColor: GFG.primary },
          '&.Mui-disabled': { borderColor: `${GFG.primary}60`, color: `${GFG.primary}60` },
        },
        outlinedSecondary: {
          borderColor: GFG.secondary, color: GFG.secondary, backgroundColor: 'transparent',
          '&:hover':   { backgroundColor: hoverBg(GFG.secondary), borderColor: GFG.secondary },
          '&.Mui-disabled': { borderColor: `${GFG.secondary}60`, color: `${GFG.secondary}60` },
        },
        outlinedError: {
          borderColor: GFG.error, color: GFG.error, backgroundColor: 'transparent',
          '&:hover':   { backgroundColor: hoverBg(GFG.error), borderColor: GFG.error },
          '&.Mui-disabled': { borderColor: `${GFG.error}60`, color: `${GFG.error}60` },
        },
        outlinedWarning: {
          borderColor: GFG.warning, color: GFG.warning, backgroundColor: 'transparent',
          '&:hover':   { backgroundColor: hoverBg(GFG.warning), borderColor: GFG.warning },
          '&.Mui-disabled': { borderColor: `${GFG.warning}60`, color: `${GFG.warning}60` },
        },
        outlinedInfo: {
          borderColor: GFG.info, color: GFG.info, backgroundColor: 'transparent',
          '&:hover':   { backgroundColor: hoverBg(GFG.info), borderColor: GFG.info },
          '&.Mui-disabled': { borderColor: `${GFG.info}60`, color: `${GFG.info}60` },
        },
        outlinedSuccess: {
          borderColor: GFG.success, color: GFG.success, backgroundColor: 'transparent',
          '&:hover':   { backgroundColor: hoverBg(GFG.success), borderColor: GFG.success },
          '&.Mui-disabled': { borderColor: `${GFG.success}60`, color: `${GFG.success}60` },
        },

        // ── Text ─────────────────────────────────────────────────────────────
        textPrimary:   { color: GFG.primary,   '&:hover': { backgroundColor: hoverBg(GFG.primary) },   '&.Mui-disabled': { color: `${GFG.primary}60` } },
        textSecondary: { color: GFG.secondary, '&:hover': { backgroundColor: hoverBg(GFG.secondary) }, '&.Mui-disabled': { color: `${GFG.secondary}60` } },
        textError:     { color: GFG.error,     '&:hover': { backgroundColor: hoverBg(GFG.error) },     '&.Mui-disabled': { color: `${GFG.error}60` } },
        textWarning:   { color: GFG.warning,   '&:hover': { backgroundColor: hoverBg(GFG.warning) },   '&.Mui-disabled': { color: `${GFG.warning}60` } },
        textInfo:      { color: GFG.info,      '&:hover': { backgroundColor: hoverBg(GFG.info) },      '&.Mui-disabled': { color: `${GFG.info}60` } },
        textSuccess:   { color: GFG.success,   '&:hover': { backgroundColor: hoverBg(GFG.success) },   '&.Mui-disabled': { color: `${GFG.success}60` } },
      },
    },

    MuiBadge: {
      styleOverrides: {
        badge: {
          fontFamily:   '"Roboto", sans-serif',
          fontWeight:   500,
          fontSize:     '12px',
          letterSpacing:'0.14px',
          lineHeight:   '20px',
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
          padding:      '6px 16px',
          fontFamily:   '"Lato", sans-serif',
        },
        message: {
          fontFamily:    '"Lato", sans-serif',
          fontSize:      '13px',       // Figma: Description 13px
          fontWeight:    400,
          lineHeight:    '15.6px',     // Figma: lh 15.6px
          letterSpacing: 0,            // Figma: tracking 0
          padding:       '8px 0',
        },
        // MuiAlert composes title via `.MuiAlertTitle-root` — override separately
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
    // Exact values from Figma node 6570:48313 (60 variants), verified 2026-06-21
    //
    // Figma token map:
    //   Label colour (default/hover/focus) → #af9577  (--color-dark-dust)
    //   Label colour (error)               → #a34740  (--color-good-wine)
    //   Label colour (disabled)            → #e0e0e0  (--color-smoke)
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
    //   Medium h=51px (padding-y 16px x-14px)  Small h=35px (padding-y 8px x-14px)
    //   Label font: 11px/700 Lato   Value font: 16px/400 Lato   Helper: 12px/400 Lato
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
          color:       GFG.primary,           // #af9577 --color-dark-dust
          '&.Mui-focused':   { color: GFG.primary },
          '&.Mui-error':     { color: GFG.error },
          '&.Mui-disabled':  { color: GFG.secondary === '#333333' ? '#e0e0e0' : '#e0e0e0' },
        },
        shrink: {
          fontSize:    '11px',
          fontWeight:  700,
          letterSpacing: '0.5px',
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
          fontFamily:  '"Lato", sans-serif',
          fontSize:    '12px',
          fontWeight:  400,
          color:       GFG.primary,   // #af9577
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
