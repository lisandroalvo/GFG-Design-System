import type { Meta, StoryObj } from '@storybook/react';

// ── Data sourced from Figma file OjFchNAdeHiNH5W4wYLSGS ─────────────────────
// Styles verified via Figma REST API nodes on 2026-06-21.
// Figma style path: GFG - Typography / <Category> / <Name>

type TypographyStyle = {
  name: string;
  figmaPath: string;
  category: 'Display' | 'Heading' | 'Body' | 'Micro';
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  textCase: 'UPPER' | null;
  use: string;
  cssVarPrefix: string;
};

const TYPOGRAPHY_STYLES: TypographyStyle[] = [
  {
    name: 'Stat',
    figmaPath: 'GFG - Typography/Stat/Stat',
    category: 'Display',
    fontFamily: 'Crimson Text',
    fontWeight: 400,
    fontSize: 42,
    lineHeight: 54.59,
    letterSpacing: 0,
    textCase: null,
    use: 'Large numbers, KPIs, hero stats',
    cssVarPrefix: '--typography-stat',
  },
  {
    name: 'H1',
    figmaPath: 'GFG - Typography/Heaeding/H1',
    category: 'Heading',
    fontFamily: 'Crimson Text',
    fontWeight: 400,
    fontSize: 30,
    lineHeight: 38.99,
    letterSpacing: 0,
    textCase: null,
    use: 'Page titles',
    cssVarPrefix: '--typography-h1',
  },
  {
    name: 'H2',
    figmaPath: 'GFG - Typography/Heaeding/H2',
    category: 'Heading',
    fontFamily: 'Crimson Text',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 31.20,
    letterSpacing: 0,
    textCase: null,
    use: 'Section headings',
    cssVarPrefix: '--typography-h2',
  },
  {
    name: 'H3',
    figmaPath: 'GFG - Typography/Heaeding/H3',
    category: 'Heading',
    fontFamily: 'Crimson Text',
    fontWeight: 400,
    fontSize: 22,
    lineHeight: 28.60,
    letterSpacing: 0,
    textCase: null,
    use: 'Subsection headings',
    cssVarPrefix: '--typography-h3',
  },
  {
    name: 'H4',
    figmaPath: 'GFG - Typography/Heaeding/H4',
    category: 'Heading',
    fontFamily: 'Crimson Text',
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 26.00,
    letterSpacing: 0,
    textCase: null,
    use: 'Card titles, smaller headings',
    cssVarPrefix: '--typography-h4',
  },
  {
    name: 'Supporting Text',
    figmaPath: 'GFG - Typography/Supporting Text/Supporting Text',
    category: 'Body',
    fontFamily: 'Lato',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: 21.60,
    letterSpacing: 0,
    textCase: null,
    use: 'Emphasised supporting copy',
    cssVarPrefix: '--typography-supporting-text',
  },
  {
    name: 'Body 1',
    figmaPath: 'GFG - Typography/Body/body-1',
    category: 'Body',
    fontFamily: 'Lato',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.20,
    letterSpacing: 0,
    textCase: null,
    use: 'Default body text',
    cssVarPrefix: '--typography-body-1',
  },
  {
    name: 'Body 2',
    figmaPath: 'GFG - Typography/Body/body-2',
    category: 'Body',
    fontFamily: 'Lato',
    fontWeight: 400,
    fontSize: 13,
    lineHeight: 15.60,
    letterSpacing: 0,
    textCase: null,
    use: 'Secondary body text',
    cssVarPrefix: '--typography-body-2',
  },
  {
    name: 'Caption',
    figmaPath: 'GFG - Typography/Micro Text/caption',
    category: 'Micro',
    fontFamily: 'Lato',
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.40,
    letterSpacing: 0,
    textCase: null,
    use: 'Captions, helper text',
    cssVarPrefix: '--typography-caption',
  },
  {
    name: 'Overline',
    figmaPath: 'GFG - Typography/Micro Text/Overline',
    category: 'Micro',
    fontFamily: 'Lato',
    fontWeight: 700,
    fontSize: 11,
    lineHeight: 13.20,
    letterSpacing: 1.98,
    textCase: 'UPPER',
    use: 'Section labels, eyebrow text',
    cssVarPrefix: '--typography-overline',
  },
];

const CATEGORY_ORDER: TypographyStyle['category'][] = ['Display', 'Heading', 'Body', 'Micro'];

const CATEGORY_LABEL: Record<TypographyStyle['category'], string> = {
  Display: 'Display',
  Heading: 'Headings',
  Body: 'Body',
  Micro: 'Micro',
};

// ── Sub-components ────────────────────────────────────────────────────────────

function Chip({ label }: { label: string }) {
  return (
    <span style={{
      fontSize: 10,
      fontFamily: 'monospace',
      background: '#FBF9F7',
      color: '#AF9577',
      border: '1px solid #E0E0E0',
      borderRadius: 4,
      padding: '1px 6px',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  );
}

function TypographyRow({ style }: { style: TypographyStyle }) {
  const sampleText = style.textCase === 'UPPER'
    ? style.name.toUpperCase()
    : style.name === 'Stat'
      ? '42'
      : `The quick brown fox — ${style.name}`;

  const lhPx = Math.round(style.lineHeight);
  const trackingStr = style.letterSpacing > 0 ? `${style.letterSpacing}px` : '0';

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      gap: 24,
      padding: '20px 0',
      borderBottom: '1px solid #E0E0E0',
      alignItems: 'center',
    }}>
      {/* Live sample */}
      <div style={{
        fontFamily: `"${style.fontFamily}", ${style.fontFamily === 'Crimson Text' ? 'serif' : 'sans-serif'}`,
        fontSize: style.fontSize,
        fontWeight: style.fontWeight,
        lineHeight: `${lhPx}px`,
        letterSpacing: style.letterSpacing > 0 ? `${style.letterSpacing}px` : undefined,
        textTransform: style.textCase === 'UPPER' ? 'uppercase' : undefined,
        color: '#333333',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>
        {sampleText}
      </div>

      {/* Specs */}
      <div style={{ fontFamily: '"Lato", sans-serif' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#333' }}>{style.name}</span>
          <span style={{ fontSize: 11, color: '#6D6D6D', fontStyle: 'italic' }}>{style.use}</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 6 }}>
          <Chip label={style.fontFamily} />
          <Chip label={`${style.fontSize}px`} />
          <Chip label={`weight ${style.fontWeight}`} />
          <Chip label={`lh ${lhPx}px`} />
          {style.letterSpacing > 0 && <Chip label={`tracking ${trackingStr}`} />}
          {style.textCase === 'UPPER' && <Chip label="UPPERCASE" />}
        </div>
        <div style={{ fontSize: 10, color: '#6D6D6D', fontFamily: 'monospace' }}>
          {style.cssVarPrefix}-*
        </div>
        <div style={{ fontSize: 10, color: '#91A8B8', fontFamily: 'monospace', marginTop: 2 }}>
          {style.figmaPath}
        </div>
      </div>
    </div>
  );
}

function TypographyPage() {
  return (
    <div style={{ padding: '32px 24px', maxWidth: 1000, fontFamily: '"Lato", sans-serif' }}>
      <h1 style={{ fontFamily: '"Crimson Text", serif', fontWeight: 400, fontSize: 30, color: '#333', margin: '0 0 8px' }}>
        Typography
      </h1>
      <p style={{ fontSize: 14, color: '#6D6D6D', margin: '0 0 4px' }}>
        Source of truth:{' '}
        <a href="https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS" target="_blank" rel="noreferrer" style={{ color: '#AF9577' }}>
          GFG Design System 2026 · Figma
        </a>
        {' '}— styles under <code style={{ fontSize: 12 }}>GFG - Typography/*</code>
      </p>
      <p style={{ fontSize: 13, color: '#6D6D6D', margin: '0 0 36px' }}>
        All values verified via Figma REST API on 2026-06-21.
        Font families: <strong>Crimson Text</strong> (display/headings) · <strong>Lato</strong> (body/micro).
        CSS variables defined in <code style={{ fontSize: 12 }}>tokens.css</code>.
      </p>

      {CATEGORY_ORDER.map((category) => {
        const styles = TYPOGRAPHY_STYLES.filter((s) => s.category === category);
        return (
          <div key={category} style={{ marginBottom: 48 }}>
            <h2 style={{
              fontFamily: '"Crimson Text", serif',
              fontWeight: 400,
              fontSize: 22,
              color: '#333',
              margin: '0 0 4px',
              borderBottom: '2px solid #AF9577',
              paddingBottom: 8,
            }}>
              {CATEGORY_LABEL[category]}
            </h2>
            <div>
              {styles.map((s) => <TypographyRow key={s.name} style={s} />)}
            </div>
          </div>
        );
      })}

      {/* Token reference table */}
      <div style={{ marginTop: 48 }}>
        <h2 style={{ fontFamily: '"Crimson Text", serif', fontWeight: 400, fontSize: 22, color: '#333', marginBottom: 16 }}>
          Token Reference
        </h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, fontFamily: 'monospace' }}>
          <thead>
            <tr style={{ background: '#FBF9F7', borderBottom: '2px solid #E0E0E0' }}>
              {['Style', 'Family', 'Size', 'Weight', 'Line Height', 'Tracking', 'Case'].map((h) => (
                <th key={h} style={{ padding: '8px 12px', textAlign: 'left', color: '#333', fontFamily: '"Lato", sans-serif', fontSize: 11, fontWeight: 700 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TYPOGRAPHY_STYLES.map((s, i) => (
              <tr key={s.name} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA', borderBottom: '1px solid #E0E0E0' }}>
                <td style={{ padding: '8px 12px', fontWeight: 700, color: '#333' }}>{s.name}</td>
                <td style={{ padding: '8px 12px', color: '#6D6D6D' }}>{s.fontFamily}</td>
                <td style={{ padding: '8px 12px', color: '#6D6D6D' }}>{s.fontSize}px</td>
                <td style={{ padding: '8px 12px', color: '#6D6D6D' }}>{s.fontWeight}</td>
                <td style={{ padding: '8px 12px', color: '#6D6D6D' }}>{Math.round(s.lineHeight)}px</td>
                <td style={{ padding: '8px 12px', color: '#6D6D6D' }}>{s.letterSpacing > 0 ? `${s.letterSpacing}px` : '—'}</td>
                <td style={{ padding: '8px 12px', color: '#6D6D6D' }}>{s.textCase ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Story config ──────────────────────────────────────────────────────────────

const meta: Meta = {
  title: 'Foundation/Typography',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'GFG Design System typography styles, sourced from Figma file `OjFchNAdeHiNH5W4wYLSGS`. All values verified via Figma REST API.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const AllStyles: Story = {
  name: 'All Styles',
  render: () => <TypographyPage />,
  parameters: {
    docs: { canvas: { sourceState: 'hidden' } },
  },
};
