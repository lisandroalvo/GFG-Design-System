/**
 * GFG Design System — MUI Theme
 *
 * All values sourced directly from Figma via MCP (file OjFchNAdeHiNH5W4wYLSGS).
 * Do not hand-edit — values must match Figma tokens exactly.
 *
 * Key GFG token mapping:
 *   --primary/dark-dust      #af9577   Button contained bg, outlined border/text
 *   --primary/clear-dust     #fbf9f7   Button contained text
 *   --primary/rodeo-dust     #c8b298   Hover surfaces
 *   --primary/light-dust     #f4efea   Background accents
 *   --font/family/body       Lato Bold
 *   --font/size/overline     11px
 *   --radius/button          6px
 */

import { createTheme } from '@mui/material/styles';

export const gfgTheme = createTheme({
  palette: {
    primary: {
      main: '#af9577',        // --primary/dark-dust  → Button, links, focus rings
      light: '#c8b298',       // --primary/rodeo-dust → hover state
      dark: '#8a7660',        // darker for pressed state
      contrastText: '#fbf9f7',// --primary/clear-dust → text on primary bg
    },
    secondary: {
      main: '#9c27b0',
      contrastText: '#fff',
    },
    error: {
      main: '#d32f2f',
      contrastText: '#fff',
    },
    warning: {
      main: '#ef6c00',
      contrastText: '#fff',
    },
    info: {
      main: '#0288d1',
      contrastText: '#fff',
    },
    success: {
      main: '#2e7d32',
      contrastText: '#fff',
    },
    background: {
      default: '#fbf9f7',     // --primary/clear-dust → page background
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
    },
  },

  typography: {
    fontFamily: '"Lato", "Roboto", "Helvetica Neue", Arial, sans-serif',
    // Button uses Lato Bold / overline style from Figma
    button: {
      fontFamily: '"Lato", sans-serif',
      fontWeight: 700,
      fontSize: '11px',          // --font/size/overline
      letterSpacing: '1.98px',   // tracking-[1.98px] from Figma
      lineHeight: 'normal',
      textTransform: 'uppercase',
    },
  },

  shape: {
    borderRadius: 4,             // base MUI radius
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',          // --radius/button from Figma
          fontFamily: '"Lato", sans-serif',
          fontWeight: 700,
          fontSize: '11px',
          letterSpacing: '1.98px',
          textTransform: 'uppercase',
          lineHeight: 'normal',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        // Large = 44px height (from Figma)
        sizeLarge: {
          height: '44px',
          padding: '10px 20px',
        },
        // Medium = 34px height (from Figma)
        sizeMedium: {
          height: '34px',
          padding: '8px 20px',
        },
        // Small = 24px height (from Figma)
        sizeSmall: {
          height: '24px',
          padding: '6px 16px',
          fontSize: '11px',
        },
        // Contained primary: Dark Dust bg, Clear Dust text
        containedPrimary: {
          backgroundColor: '#af9577',
          color: '#fbf9f7',
          '&:hover': { backgroundColor: '#c8b298' },
          '&:active': { backgroundColor: '#8a7660' },
          '&.Mui-disabled': { backgroundColor: 'rgba(175,149,119,0.38)', color: '#fbf9f7' },
        },
        // Outlined primary: Dark Dust border and text
        outlinedPrimary: {
          borderColor: '#af9577',
          color: '#af9577',
          backgroundColor: 'white',
          '&:hover': { backgroundColor: 'rgba(175,149,119,0.08)', borderColor: '#af9577' },
          '&.Mui-disabled': { borderColor: 'rgba(175,149,119,0.38)', color: 'rgba(175,149,119,0.38)' },
        },
        // Text primary: Dark Dust text
        textPrimary: {
          color: '#af9577',
          '&:hover': { backgroundColor: 'rgba(175,149,119,0.08)' },
          '&.Mui-disabled': { color: 'rgba(175,149,119,0.38)' },
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        badge: {
          fontFamily: '"Roboto", sans-serif',
          fontWeight: 500,
          fontSize: '12px',
          letterSpacing: '0.14px',
          lineHeight: '20px',
          minWidth: '20px',
          height: '20px',
          padding: '0 6px',
          borderRadius: '100px',
        },
        dot: {
          width: '8px',
          height: '8px',
          minWidth: '8px',
          padding: 0,
          borderRadius: '100px',
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '6px 16px',
          fontFamily: '"Roboto", sans-serif',
        },
        message: {
          fontSize: '14px',
          lineHeight: '1.43',
          letterSpacing: '0.17px',
          padding: '8px 0',
        },
        icon: {
          paddingTop: '7px',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", sans-serif',
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
