import type { Meta, StoryObj } from '@storybook/react';
// MS3 icon library — Figma uses *Filled naming → MUI base name (no suffix)
// Default Start Icon: ChevronLeftFilled  [7475:54235] → ChevronLeft
// Default End Icon:   ChevronRightFilled [7475:54246] → ChevronRight
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ArrowForward from '@mui/icons-material/ArrowForward';   // ArrowForwardFilled [7475:54125]
import Delete from '@mui/icons-material/Delete';                // DeleteFilled       [9602:112393]
import Send from '@mui/icons-material/Send';                    // SendFilled         [9602:112395]
import Add from '@mui/icons-material/Add';                      // AddFilled          [7475:65638]
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

### Icon convention — MS3 library
Figma uses the **MS3 icon library** with \`*Filled\` naming (e.g. \`ChevronLeftFilled\`).
MUI equivalent: strip the \`Filled\` suffix and import from \`@mui/icons-material\`.

| Figma MS3 icon | MUI import | Usage |
|---|---|---|
| \`ChevronLeftFilled\` | \`ChevronLeft\` | Default Start Icon |
| \`ChevronRightFilled\` | \`ChevronRight\` | Default End Icon |
| \`ArrowForwardFilled\` | \`ArrowForward\` | Navigation forward |
| \`AddFilled\` | \`Add\` | Add / create |
| \`DeleteFilled\` | \`Delete\` | Destructive actions |
| \`SendFilled\` | \`Send\` | Submit / send |

### Developer usage
\`\`\`tsx
import Button from '@mui/material/Button';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

<Button variant="contained" color="primary" startIcon={<ChevronLeft />}>
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
// Figma default icons: ChevronLeftFilled (start) · ChevronRightFilled (end)
// All from MS3 icon library — *Filled naming → MUI base name
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button startIcon={<ChevronLeft />}>Start Icon</Button>
      <Button endIcon={<ChevronRight />}>End Icon</Button>
      <Button startIcon={<Send />} endIcon={<ArrowForward />}>Both Icons</Button>
      <Button variant="outlined" startIcon={<Delete />} color="error">Delete</Button>
      <Button startIcon={<Add />} color="secondary">Add</Button>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: "Start Icon?=True" / "End Icon?=True" — MS3 icons, default ChevronLeftFilled / ChevronRightFilled. MUI convention: *Filled → base name (ChevronLeft, ChevronRight, etc.)' } },
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
