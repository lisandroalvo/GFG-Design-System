import type { Meta, StoryObj } from '@storybook/react';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6543:36744\`

Built on **MUI Button** with the GFG theme applied. 270 variants in Figma.

### Exact Figma color tokens (sourced from Figma MCP per variant node)
| Color | Contained BG | Text | Outlined / Text color | Figma token |
|---|---|---|---|---|
| Primary | \`#af9577\` | \`#fbf9f7\` | \`#af9577\` | \`--primary/dark-dust\` |
| Secondary | \`#333333\` | \`#ffffff\` | \`#333333\` | \`--neutral/rodeo-black\` |
| Error | \`#a34740\` | \`#fbf9f7\` | \`#a34740\` | \`--good-wine-(error)/wine-1\` |
| Warning | \`#8a5d1f\` | \`#ffffff\` | \`#8a5d1f\` | \`--good-ochre-(warning)/ochre-1\` |
| Info | \`#2b4a60\` | \`#fbf9f7\` | \`#2b4a60\` | \`--good-night-(info)/night-1\` |
| Success | \`#637058\` | \`#fbf9f7\` | \`#637058\` | \`--good-sage-(success)/sage-1\` |

### Typography tokens
| Token | Value |
|---|---|
| \`--font/family/body\` | Lato Bold |
| \`--font/size/overline\` | 11px |
| Letter spacing | 1.98px |
| \`--radius/button\` | 6px |
| Height Large | 44px |
| Height Medium | 34px |
| Height Small | 24px |

### Developer usage
\`\`\`tsx
import Button from '@mui/material/Button';
// Wrap app with <ThemeProvider theme={gfgTheme}>
<Button variant="contained" color="primary" size="medium">
  Button
</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Maps to Figma "Variant" — Contained | Outlined | Text',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Maps to Figma "Color"',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'Maps to Figma "Size" — Large (44px) | Medium (34px) | Small (24px)',
    },
    disabled: {
      control: 'boolean',
      description: 'Maps to Figma "State=Disabled"',
    },
    children: {
      control: 'text',
      description: 'Maps to Figma "Label" text property',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ── Playground (Default) ───────────────────────────────────────────────────
export const Playground: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    children: 'Button',
    disabled: false,
  },
};

// ── All Variants ───────────────────────────────────────────────────────────
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Variant = Contained | Outlined | Text (Primary color, Medium size)' } },
  },
};

// ── All Colors ─────────────────────────────────────────────────────────────
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary','secondary','error','warning','info','success'] as const).map(color => (
        <Button key={color} variant="contained" color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Color = Primary | Secondary | Error | Warning | Info | Success' } },
  },
};

// ── All Sizes ──────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="small">Small — 24px</Button>
      <Button size="medium">Medium — 34px</Button>
      <Button size="large">Large — 44px</Button>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Size = Small (24px) | Medium (34px) | Large (44px)' } },
  },
};

// ── With Icons ─────────────────────────────────────────────────────────────
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startIcon={<StarIcon />}>Start Icon</Button>
      <Button endIcon={<ArrowForwardIcon />}>End Icon</Button>
      <Button startIcon={<SendIcon />} endIcon={<ArrowForwardIcon />}>Both Icons</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />} color="error">Delete</Button>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: "Start Icon" and "End Icon" boolean properties' } },
  },
};

// ── States ─────────────────────────────────────────────────────────────────
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button>Enabled</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outlined" disabled>Outlined Disabled</Button>
      <Button variant="text" disabled>Text Disabled</Button>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: State = Enabled | Disabled' } },
  },
};

// ── Outlined All Colors ────────────────────────────────────────────────────
export const OutlinedColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary','secondary','error','warning','info','success'] as const).map(color => (
        <Button key={color} variant="outlined" color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

// ── Text All Colors ────────────────────────────────────────────────────────
export const TextColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary','secondary','error','warning','info','success'] as const).map(color => (
        <Button key={color} variant="text" color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  ),
};
