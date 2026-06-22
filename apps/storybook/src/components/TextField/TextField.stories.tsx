import type { Meta, StoryObj } from '@storybook/react';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import { TextField } from './TextField';

// ── Figma source: OjFchNAdeHiNH5W4wYLSGS · node 16350:35724 · 60 variants ──
// Verified via Figma REST API 2026-06-22
//
// Figma property axes:
//   Variant    → Standard | Filled | Outlined
//   Size       → Medium | Small
//   State      → Enabled | Hovered | Focused | Disabled | Error
//   Has Value  → True | False
//   Booleans   → Helper, Adorn.Start, Adorn.End, Value, Placeholder, Type:number
//
// Note: No "Success" state exists in Figma for this component.

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/design/OjFchNAdeHiNH5W4wYLSGS) · Node \`16350:35724\` · 60 variants

Built on **MUI TextField** with exact GFG theme tokens applied.

**Last synced:** 2026-06-22 — Figma REST API

### Figma Variants
| Axis | Options |
|---|---|
| Variant | Standard · Filled · Outlined |
| Size | Medium · Small |
| State | Enabled · Hovered · Focused · Disabled · Error |
| Has Value | True · False |

### Exact Figma color tokens
| Element | State | Color | Figma token |
|---|---|---|---|
| Label (not-shrunk) | All states | \`#6d6d6d\` | \`--color-graphite\` |
| Label (floating/shrunk) | Focused | \`#af9577\` | \`--color-dark-dust\` |
| Label (floating/shrunk) | Error | \`#a34740\` | \`--color-good-wine\` |
| Label (any) | Disabled | \`#e0e0e0\` | \`--color-smoke\` |
| Helper text | Default | \`#af9577\` | \`--color-dark-dust\` |
| Helper text | Error | \`#a34740\` | \`--color-good-wine\` |
| Helper text | Disabled | \`#e0e0e0\` | \`--color-smoke\` |
| Outlined border | Enabled | \`#6d6d6d\` 1px | \`--color-graphite\` |
| Outlined border | Hovered | \`#e0e0e0\` 1px | \`--color-smoke\` |
| Outlined border | Focused | \`#af9577\` 2px | \`--color-dark-dust\` |
| Outlined border | Error | \`#a34740\` 1px | \`--color-good-wine\` |
| Underline (Std/Filled) | Enabled/Disabled | \`#c8b298\` 1px | \`--color-rodeo-dust\` |
| Underline (Std/Filled) | Hovered/Focused | \`#af9577\` 2px | \`--color-dark-dust\` |
| Underline (Std/Filled) | Error | \`#a34740\` 2px | \`--color-good-wine\` |
| Value text | — | \`#333333\` | \`--color-rodeo-black\` |
| Value text | Disabled | \`#e0e0e0\` | \`--color-smoke\` |
| Placeholder | — | \`rgba(0,0,0,0.38)\` | MUI default |
| Filled background | All states | \`#ffffff\` | — |

### Typography
| Element | Font | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Label (not-shrunk) — Outlined/Standard | Lato | 16px | 400 | 19.2px | 0 |
| Label (not-shrunk) — Filled | Roboto | 16px | 400 | 24px | 0.15px |
| Label (floating/shrunk) — all variants | Lato | 11px | 700 | 13.2px | 1.98px |
| Value / Placeholder | Lato | 16px | 400 | 19.2px | 0 |
| Helper text — all variants | Roboto | 12px | 400 | 19.9px | 0.40px |

### Developer usage
\`\`\`tsx
import { TextField } from './TextField';

// Outlined (default)
<TextField label="Email" helperText="Enter your email" />

// With adornments
<TextField
  label="Search"
  startAdornment={<SearchOutlined />}
  endAdornment={<VisibilityOutlined />}
/>

// Error state
<TextField label="Email" error helperText="Invalid email address" />

// Disabled
<TextField label="Email" disabled value="user@example.com" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
      description: 'Figma: Variant — Outlined | Filled | Standard',
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      description: 'Figma: Size — Medium | Small (heights differ per variant)',
    },
    label: {
      control: 'text',
      description: 'Figma: Label text',
    },
    error: {
      control: 'boolean',
      description: 'Figma: State=Error',
    },
    disabled: {
      control: 'boolean',
      description: 'Figma: State=Disabled',
    },
    helperText: {
      control: 'text',
      description: 'Figma: Helper boolean → helper text string',
    },
    placeholder: {
      control: 'text',
      description: 'Figma: Placeholder text (Has Value=False)',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretch to container width',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

// ── Playground ────────────────────────────────────────────────────────────────

export const Playground: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: '',
    error: false,
    disabled: false,
    fullWidth: false,
  },
  render: (args) => (
    <div style={{ padding: '32px', width: 280 }}>
      <TextField {...args} />
    </div>
  ),
};

// ── All States — Outlined ─────────────────────────────────────────────────────

export const OutlinedStates: Story = {
  name: 'Outlined — All States',
  render: () => (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      {/* Enabled */}
      <div>
        <div style={labelStyle}>Enabled (Has Value=True)</div>
        <TextField variant="outlined" label="Label" value="Value" helperText="Helper text" />
      </div>
      {/* Enabled empty */}
      <div>
        <div style={labelStyle}>Enabled (Has Value=False)</div>
        <TextField variant="outlined" label="Label" placeholder="Placeholder" helperText="Helper text" />
      </div>
      {/* Focused — simulated via autoFocus on a dedicated input */}
      <div>
        <div style={labelStyle}>Focused (Has Value=True) — click to activate</div>
        <TextField variant="outlined" label="Label" value="Value" helperText="Helper text" />
      </div>
      {/* Disabled */}
      <div>
        <div style={labelStyle}>Disabled (Has Value=True)</div>
        <TextField variant="outlined" label="Label" value="Value" helperText="Helper text" disabled />
      </div>
      {/* Disabled empty */}
      <div>
        <div style={labelStyle}>Disabled (Has Value=False)</div>
        <TextField variant="outlined" label="Label" placeholder="Placeholder" helperText="Helper text" disabled />
      </div>
      {/* Error */}
      <div>
        <div style={labelStyle}>Error (Has Value=True)</div>
        <TextField variant="outlined" label="Label" value="Value" helperText="Helper text" error />
      </div>
      {/* Error empty */}
      <div>
        <div style={labelStyle}>Error (Has Value=False)</div>
        <TextField variant="outlined" label="Label" placeholder="Placeholder" helperText="Helper text" error />
      </div>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Variant=Outlined — all 5 states × Has Value True/False. Border=`#6d6d6d` 1px enabled, `#af9577` 2px focused, `#a34740` 1px error, `#e0e0e0` labels when disabled. Radius=4px.' } },
  },
};

// ── All States — Filled ───────────────────────────────────────────────────────

export const FilledStates: Story = {
  name: 'Filled — All States',
  render: () => (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <div>
        <div style={labelStyle}>Enabled</div>
        <TextField variant="filled" label="Label" value="Value" helperText="Helper text" />
      </div>
      <div>
        <div style={labelStyle}>Enabled (empty)</div>
        <TextField variant="filled" label="Label" placeholder="Placeholder" helperText="Helper text" />
      </div>
      <div>
        <div style={labelStyle}>Focused — click to activate</div>
        <TextField variant="filled" label="Label" value="Value" helperText="Helper text" />
      </div>
      <div>
        <div style={labelStyle}>Disabled</div>
        <TextField variant="filled" label="Label" value="Value" helperText="Helper text" disabled />
      </div>
      <div>
        <div style={labelStyle}>Error</div>
        <TextField variant="filled" label="Label" value="Value" helperText="Helper text" error />
      </div>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Variant=Filled — bg=`#ffffff`, top-radius=4px. Underline: `#c8b298` 1px enabled/disabled, `#af9577` 2px hover/focus, `#a34740` 2px error.' } },
  },
};

// ── All States — Standard ─────────────────────────────────────────────────────

export const StandardStates: Story = {
  name: 'Standard — All States',
  render: () => (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <div>
        <div style={labelStyle}>Enabled</div>
        <TextField variant="standard" label="Label" value="Value" helperText="Helper text" />
      </div>
      <div>
        <div style={labelStyle}>Enabled (empty)</div>
        <TextField variant="standard" label="Label" placeholder="Placeholder" helperText="Helper text" />
      </div>
      <div>
        <div style={labelStyle}>Focused — click to activate</div>
        <TextField variant="standard" label="Label" value="Value" helperText="Helper text" />
      </div>
      <div>
        <div style={labelStyle}>Disabled</div>
        <TextField variant="standard" label="Label" value="Value" helperText="Helper text" disabled />
      </div>
      <div>
        <div style={labelStyle}>Error</div>
        <TextField variant="standard" label="Label" value="Value" helperText="Helper text" error />
      </div>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Variant=Standard — no border/background, underline only. Label uppercase 11px/700 Lato. Underline: `#c8b298` 1px enabled/disabled, `#af9577` 2px hover/focus, `#a34740` 2px error.' } },
  },
};

// ── Sizes ─────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <div>
        <div style={labelStyle}>Medium — h=51px (padding-y 16px, padding-x 14px)</div>
        <TextField variant="outlined" size="medium" label="Label" value="Value" />
      </div>
      <div>
        <div style={labelStyle}>Small — h=35px (padding-y 8px, padding-x 14px)</div>
        <TextField variant="outlined" size="small" label="Label" value="Value" />
      </div>
      <div>
        <div style={labelStyle}>Medium Filled</div>
        <TextField variant="filled" size="medium" label="Label" value="Value" />
      </div>
      <div>
        <div style={labelStyle}>Small Filled</div>
        <TextField variant="filled" size="small" label="Label" value="Value" />
      </div>
      <div>
        <div style={labelStyle}>Medium Standard</div>
        <TextField variant="standard" size="medium" label="Label" value="Value" />
      </div>
      <div>
        <div style={labelStyle}>Small Standard</div>
        <TextField variant="standard" size="small" label="Label" value="Value" />
      </div>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Size=Medium (h=51px, padding-y 16px) vs Size=Small (h=35px, padding-y 8px). Horizontal padding=14px for both.' } },
  },
};

// ── With Adornments ───────────────────────────────────────────────────────────

export const WithAdornments: Story = {
  name: 'With Adornments (Adorn. Start / Adorn. End)',
  render: () => (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <div>
        <div style={labelStyle}>Start adornment (Adorn. Start=True)</div>
        <TextField
          variant="outlined"
          label="Email"
          value="user@example.com"
          startAdornment={<EmailOutlined sx={{ color: '#af9577', fontSize: 20 }} />}
        />
      </div>
      <div>
        <div style={labelStyle}>End adornment (Adorn. End=True)</div>
        <TextField
          variant="outlined"
          label="Password"
          value="••••••••"
          type="password"
          endAdornment={<VisibilityOutlined sx={{ color: '#af9577', fontSize: 20 }} />}
        />
      </div>
      <div>
        <div style={labelStyle}>Both adornments</div>
        <TextField
          variant="outlined"
          label="Search"
          placeholder="Search…"
          startAdornment={<SearchOutlined sx={{ color: '#af9577', fontSize: 20 }} />}
          endAdornment={<VisibilityOutlined sx={{ color: '#af9577', fontSize: 20 }} />}
        />
      </div>
      <div>
        <div style={labelStyle}>Start adornment — Filled variant</div>
        <TextField
          variant="filled"
          label="Email"
          value="user@example.com"
          startAdornment={<EmailOutlined sx={{ color: '#af9577', fontSize: 20 }} />}
        />
      </div>
      <div>
        <div style={labelStyle}>Start adornment — Standard variant</div>
        <TextField
          variant="standard"
          label="Email"
          value="user@example.com"
          startAdornment={<EmailOutlined sx={{ color: '#af9577', fontSize: 20 }} />}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Adorn. Start / Adorn. End boolean props — Icon MS3 (outlined MUI icons). Icon color matches `#af9577` (--color-dark-dust). Available on all three variants.' } },
  },
};

// ── With Helper Text ──────────────────────────────────────────────────────────

export const WithHelperText: Story = {
  name: 'With Helper Text',
  render: () => (
    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 320 }}>
      <div>
        <div style={labelStyle}>Default helper — color #af9577</div>
        <TextField variant="outlined" label="Label" value="Value" helperText="This is helper text" />
      </div>
      <div>
        <div style={labelStyle}>Error helper — color #a34740</div>
        <TextField variant="outlined" label="Label" value="Invalid" helperText="This field is required" error />
      </div>
      <div>
        <div style={labelStyle}>Disabled helper — color #e0e0e0</div>
        <TextField variant="outlined" label="Label" value="Value" helperText="Field is disabled" disabled />
      </div>
      <div>
        <div style={labelStyle}>Filled — default helper</div>
        <TextField variant="filled" label="Label" value="Value" helperText="Helper text" />
      </div>
      <div>
        <div style={labelStyle}>Standard — default helper</div>
        <TextField variant="standard" label="Label" value="Value" helperText="Helper text" />
      </div>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Helper boolean — 12px/400 Lato. Default=`#af9577`, Error=`#a34740`, Disabled=`#e0e0e0`.' } },
  },
};

// ── All Variants Side-by-Side ─────────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All Variants × States',
  render: () => {
    const variants = ['outlined', 'filled', 'standard'] as const;
    const states: Array<{ label: string; props: object }> = [
      { label: 'Enabled',  props: {} },
      { label: 'Disabled', props: { disabled: true } },
      { label: 'Error',    props: { error: true, helperText: 'Error message' } },
    ];
    return (
      <div style={{ padding: '32px', overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'separate', borderSpacing: '16px 24px' }}>
          <thead>
            <tr>
              <th style={thStyle}>State</th>
              {variants.map((v) => (
                <th key={v} style={thStyle}>{v.charAt(0).toUpperCase() + v.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {states.map(({ label, props }) => (
              <tr key={label}>
                <td style={tdLabelStyle}>{label}</td>
                {variants.map((variant) => (
                  <td key={variant} style={{ verticalAlign: 'top' }}>
                    <TextField
                      variant={variant}
                      label="Label"
                      value="Value"
                      helperText="Helper text"
                      {...props}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: 'All 3 Figma variants (Outlined/Filled/Standard) × 3 primary states (Enabled/Disabled/Error) in a grid — Medium size with helper text.' } },
  },
};

// ── Small Size Grid ───────────────────────────────────────────────────────────

export const SmallSizeGrid: Story = {
  name: 'Small Size — All Variants',
  render: () => {
    const variants = ['outlined', 'filled', 'standard'] as const;
    const states: Array<{ label: string; props: object }> = [
      { label: 'Enabled',  props: {} },
      { label: 'Disabled', props: { disabled: true } },
      { label: 'Error',    props: { error: true } },
    ];
    return (
      <div style={{ padding: '32px', overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'separate', borderSpacing: '16px 24px' }}>
          <thead>
            <tr>
              <th style={thStyle}>State</th>
              {variants.map((v) => (
                <th key={v} style={thStyle}>{v.charAt(0).toUpperCase() + v.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {states.map(({ label, props }) => (
              <tr key={label}>
                <td style={tdLabelStyle}>{label}</td>
                {variants.map((variant) => (
                  <td key={variant} style={{ verticalAlign: 'top' }}>
                    <TextField variant={variant} size="small" label="Label" value="Value" {...props} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: 'Figma: Size=Small (h=35px, padding-y 8px) across all variants and states.' } },
  },
};

// ── Shared styles ─────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  fontSize: 11,
  fontFamily: '"Lato", sans-serif',
  fontWeight: 700,
  color: '#6d6d6d',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: 6,
};

const thStyle: React.CSSProperties = {
  fontSize: 12,
  fontFamily: '"Lato", sans-serif',
  fontWeight: 700,
  color: '#333',
  textAlign: 'left',
  paddingBottom: 4,
  borderBottom: '2px solid #af9577',
  minWidth: 200,
};

const tdLabelStyle: React.CSSProperties = {
  fontSize: 12,
  fontFamily: '"Lato", sans-serif',
  color: '#6d6d6d',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  verticalAlign: 'top',
  paddingTop: 14,
  paddingRight: 8,
  whiteSpace: 'nowrap',
};
