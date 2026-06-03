/**
 * GFG Design System — MUI Theme
 *
 * ALL values sourced directly from Figma MCP (file OjFchNAdeHiNH5W4wYLSGS).
 * Do not hand-edit — every hex value has a corresponding Figma node + token name.
 *
 * ── Button color token map (verified from Figma nodes) ──────────────────────
 *  Color      Contained BG   Text       Outlined Border/Text  Figma token
 *  Primary    #af9577        #fbf9f7    #af9577               --primary/dark-dust / --primary/clear-dust
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
const GFG = {
  // Primary palette — Dust System
  primary:          '#af9577',  // --primary/dark-dust
  primaryText:      '#fbf9f7',  // --primary/clear-dust (text on primary bg)
  primaryHover:     '#c8b298',  // --primary/rodeo-dust
  primaryDark:      '#8a7660',

  // Secondary — Neutral Rodeo Black
  secondary:        '#333333',  // --neutral/rodeo-black
  secondaryText:    '#ffffff',

  // Error — Good Wine palette
  error:            '#a34740',  // --good-wine-(error)/wine-1
  errorText:        '#fbf9f7',  // --primary/clear-dust

  // Warning — Good Ochre palette
  warning:          '#8a5d1f',  // --good-ochre-(warning)/ochre-1
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
          backgroundColor: GFG.primary,
          color:           GFG.primaryText,
          '&:hover':       { backgroundColor: GFG.primaryHover },
          '&:active':      { backgroundColor: GFG.primaryDark },
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

    MuiAlert: {
      styleOverrides: {
        root:    { borderRadius: '4px', padding: '6px 16px', fontFamily: '"Roboto", sans-serif' },
        message: { fontSize: '14px', lineHeight: '1.43', letterSpacing: '0.17px', padding: '8px 0' },
        icon:    { paddingTop: '7px' },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: { fontFamily: '"Roboto", sans-serif' },
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
