import type { Meta, StoryObj } from '@storybook/react';

// ── Data sourced from Figma file OjFchNAdeHiNH5W4wYLSGS ─────────────────────
// Frame: 'Color Palette' (15608:5742) · verified via Figma REST API 2026-06-21

type Swatch = { name: string; hex: string; cssVar: string; muiKey?: string; use: string };
type Palette = { name: string; description: string; muiKey?: string; colors: Swatch[] };

const PALETTES: Palette[] = [
  {
    name: 'Primary Palette (Dust System)',
    description: 'Warm earthy primary colours used for actions, surfaces and accents.',
    colors: [
      { name: 'Dark Dust',  hex: '#AF9577', cssVar: '--color-dark-dust',  muiKey: 'palette.primary.main',     use: 'Primary actions, buttons' },
      { name: 'Rodeo Dust', hex: '#C8B298', cssVar: '--color-rodeo-dust', muiKey: 'palette.primary.light',    use: 'Hover / secondary surfaces' },
      { name: 'Light Dust', hex: '#F4EFEA', cssVar: '--color-light-dust', muiKey: 'palette.primary.lighter',  use: 'Background accents' },
      { name: 'Clear Dust', hex: '#FBF9F7', cssVar: '--color-clear-dust', muiKey: 'palette.primary.lightest', use: 'Page backgrounds, cards' },
    ],
  },
  {
    name: 'Neutral Palette',
    description: 'Text, dividers and surface tones for the UI chrome.',
    colors: [
      { name: 'Rodeo Black', hex: '#333333', cssVar: '--color-rodeo-black', muiKey: 'palette.text.primary',       use: 'Primary text' },
      { name: 'Graphite',    hex: '#6D6D6D', cssVar: '--color-graphite',    muiKey: 'palette.text.secondary',     use: 'Secondary text' },
      { name: 'Smoke',       hex: '#E0E0E0', cssVar: '--color-smoke',       muiKey: 'palette.divider',            use: 'Borders / dividers' },
      { name: 'Wax',         hex: '#F5F5F5', cssVar: '--color-wax',         muiKey: 'palette.grey[100]',          use: 'Subtle backgrounds' },
      { name: 'White',       hex: '#FFFFFF', cssVar: '--color-white',       muiKey: 'palette.background.paper',   use: 'Cards / surfaces' },
      { name: 'Background',  hex: '#FAFAFA', cssVar: '--color-background',  muiKey: 'palette.background.default', use: 'App background' },
    ],
  },
  {
    name: 'Good Sage (Success)',
    description: 'Sage green — semantic success palette.',
    muiKey: 'palette.success',
    colors: [
      { name: 'Sage 1', hex: '#637058', cssVar: '--color-good-sage',   use: 'Primary success' },
      { name: 'Sage 2', hex: '#8C9583', cssVar: '--color-good-sage-2', use: 'Hover / mid' },
      { name: 'Sage 3', hex: '#B5BBAF', cssVar: '--color-good-sage-3', use: 'Disabled / subtle' },
      { name: 'Sage 4', hex: '#E0E3DD', cssVar: '--color-good-sage-4', use: 'Background' },
      { name: 'Sage 5', hex: '#F5F6F4', cssVar: '--color-good-sage-5', use: 'Light background' },
    ],
  },
  {
    name: 'Good Wine (Error)',
    description: 'Wine red — semantic error palette.',
    muiKey: 'palette.error',
    colors: [
      { name: 'Wine 1', hex: '#A34740', cssVar: '--color-good-wine',   use: 'Primary error' },
      { name: 'Wine 2', hex: '#BB7570', cssVar: '--color-good-wine-2', use: 'Hover' },
      { name: 'Wine 3', hex: '#D4A4A1', cssVar: '--color-good-wine-3', use: 'Disabled' },
      { name: 'Wine 4', hex: '#EED4D3', cssVar: '--color-good-wine-4', use: 'Background' },
      { name: 'Wine 5', hex: '#F9F1F0', cssVar: '--color-good-wine-bg', use: 'Light background' },
    ],
  },
  {
    name: 'Good Ochre (Warning)',
    description: 'Ochre golden brown — semantic warning palette.',
    muiKey: 'palette.warning',
    colors: [
      { name: 'Ochre 1', hex: '#8A5D1F', cssVar: '--color-good-ochre',   use: 'Primary warning' },
      { name: 'Ochre 2', hex: '#AC8958', cssVar: '--color-good-ochre-2', use: 'Hover' },
      { name: 'Ochre 3', hex: '#CFB591', cssVar: '--color-good-ochre-3', use: 'Disabled' },
      { name: 'Ochre 4', hex: '#F3E3CD', cssVar: '--color-good-ochre-4', use: 'Background' },
      { name: 'Ochre 5', hex: '#FBF6EF', cssVar: '--color-good-ochre-bg', use: 'Light background' },
    ],
  },
  {
    name: 'Good Night (Info)',
    description: 'Night blue — semantic info palette.',
    muiKey: 'palette.info',
    colors: [
      { name: 'Night 1', hex: '#2B4A60', cssVar: '--color-good-night',   use: 'Primary info' },
      { name: 'Night 2', hex: '#5E798C', cssVar: '--color-good-night-2', use: 'Hover' },
      { name: 'Night 3', hex: '#91A8B8', cssVar: '--color-good-night-3', use: 'Disabled' },
      { name: 'Night 4', hex: '#C7D9E6', cssVar: '--color-good-night-4', use: 'Background' },
      { name: 'Night 5', hex: '#F1F5F9', cssVar: '--color-good-night-bg', use: 'Light background' },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function hexToRgb(hex: string): string {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function isLight(hex: string): boolean {
  const h = hex.replace('#', '');
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 155;
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SwatchCard({ swatch }: { swatch: Swatch }) {
  const textColor = isLight(swatch.hex) ? '#333333' : '#FFFFFF';
  return (
    <div style={{ width: 180, fontFamily: '"Lato", sans-serif' }}>
      <div
        style={{
          height: 80,
          backgroundColor: swatch.hex,
          borderRadius: '6px 6px 0 0',
          border: swatch.hex.toUpperCase() === '#FFFFFF' || swatch.hex.toUpperCase() === '#FAFAFA' ? '1px solid #E0E0E0' : 'none',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '8px 10px',
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: textColor, letterSpacing: '0.5px' }}>
          {swatch.hex.toUpperCase()}
        </span>
      </div>
      <div
        style={{
          padding: '10px',
          background: '#fff',
          borderRadius: '0 0 6px 6px',
          border: '1px solid #E0E0E0',
          borderTop: 'none',
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, color: '#333', marginBottom: 2 }}>{swatch.name}</div>
        <div style={{ fontSize: 11, color: '#6D6D6D', marginBottom: 4, fontFamily: 'monospace' }}>{swatch.cssVar}</div>
        <div style={{ fontSize: 11, color: '#6D6D6D', marginBottom: 4 }}>{hexToRgb(swatch.hex)}</div>
        {swatch.muiKey && (
          <div style={{ fontSize: 10, color: '#AF9577', fontFamily: 'monospace', marginBottom: 4 }}>{swatch.muiKey}</div>
        )}
        <div style={{ fontSize: 11, color: '#333', marginTop: 4, lineHeight: 1.4 }}>{swatch.use}</div>
      </div>
    </div>
  );
}

function PaletteSection({ palette }: { palette: Palette }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
        <h2 style={{ margin: 0, fontFamily: '"Crimson Text", serif', fontSize: 22, fontWeight: 400, color: '#333' }}>
          {palette.name}
        </h2>
        {palette.muiKey && (
          <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#AF9577', background: '#FBF9F7', padding: '2px 6px', borderRadius: 4 }}>
            {palette.muiKey}
          </span>
        )}
      </div>
      <p style={{ margin: '0 0 16px', fontFamily: '"Lato", sans-serif', fontSize: 13, color: '#6D6D6D' }}>
        {palette.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {palette.colors.map((s) => <SwatchCard key={s.cssVar} swatch={s} />)}
      </div>
    </div>
  );
}

function ColorsPage() {
  return (
    <div style={{ padding: '32px 24px', maxWidth: 1100, fontFamily: '"Lato", sans-serif' }}>
      <h1 style={{ fontFamily: '"Crimson Text", serif', fontWeight: 400, fontSize: 30, color: '#333', margin: '0 0 8px' }}>
        Colors
      </h1>
      <p style={{ fontSize: 14, color: '#6D6D6D', margin: '0 0 8px' }}>
        Source of truth:{' '}
        <a href="https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS" target="_blank" rel="noreferrer" style={{ color: '#AF9577' }}>
          GFG Design System 2026 · Figma
        </a>
        {' '}— frame <code style={{ fontSize: 12 }}>Color Palette (15608:5742)</code>
      </p>
      <p style={{ fontSize: 13, color: '#6D6D6D', margin: '0 0 36px' }}>
        All values verified via Figma REST API on 2026-06-21. CSS variables are defined in{' '}
        <code style={{ fontSize: 12 }}>tokens.css</code>.
      </p>
      {PALETTES.map((p) => <PaletteSection key={p.name} palette={p} />)}
    </div>
  );
}

// ── Story config ──────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Foundation/Colors',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'GFG Design System color tokens, sourced from Figma file `OjFchNAdeHiNH5W4wYLSGS`. All values verified via Figma REST API.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const AllColors: Story = {
  name: 'All Colors',
  render: () => <ColorsPage />,
  parameters: {
    docs: { canvas: { sourceState: 'hidden' } },
  },
};
