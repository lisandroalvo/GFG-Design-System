import type { Preview } from '@storybook/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { gfgTheme } from '../src/tokens/gfgTheme';
import '../src/tokens/tokens.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={gfgTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
  },
};

export default preview;
