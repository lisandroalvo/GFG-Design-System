import type { Meta, StoryObj } from '@storybook/react';
import Mail from '@mui/icons-material/Mail';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6587:47476\` · 13 variants

Built on **MUI Badge** with the GFG theme applied.

**Last synced:** June 18, 2026 at 6:51 PM - Synced from Figma via MCP

### Exact Figma color tokens
| Color | Hex | Figma token |
|---|---|---|
| Primary | \`#d946ef\` | Pink/magenta accent |
| Secondary | \`#333333\` | \`--neutral/rodeo-black\` |
| Error | \`#a34740\` | \`--good-wine-(error)/wine-1\` |
| Warning | \`#8a5d1f\` | \`--good-ochre-(warning)/ochre-1\` |
| Info | \`#2b4a60\` | \`--good-night-(info)/night-1\` |
| Success | \`#637058\` | \`--good-sage-(success)/sage-1\` |
| Font | Lato Bold 12px |
| Dot size | 8×8px |

### Developer usage
\`\`\`tsx
import Badge from '@mui/material/Badge';
import Mail from '@mui/icons-material/Mail';

<Badge badgeContent={4} color="primary">
  <Mail />
</Badge>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
      description: 'Maps to Figma "Variant" — Standard | Dot',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Maps to Figma "Color"',
    },
    badgeContent: {
      control: 'text',
      description: 'Maps to Figma "Content" text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: { color: 'primary', variant: 'standard', badgeContent: 4 },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Badge {...args}><Mail sx={{ fontSize: 32 }} /></Badge>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {(['default','primary','secondary','error','warning','info','success'] as const).map(color => (
        <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Badge color={color} badgeContent={4}>
            <Mail sx={{ fontSize: 32 }} />
          </Badge>
          <span style={{ fontSize: '11px', color: '#666', fontFamily: 'Roboto, sans-serif' }}>{color}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma: Color = Default | Primary | Secondary | Error | Warning | Info | Success' } } },
};

export const DotVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {(['primary','error','success','warning','info','secondary'] as const).map(color => (
        <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Badge variant="dot" color={color}>
            <Mail sx={{ fontSize: 32 }} />
          </Badge>
          <span style={{ fontSize: '11px', color: '#666', fontFamily: 'Roboto, sans-serif' }}>{color}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma: Variant=Dot — 8×8px dot indicator, no content' } } },
};

export const LargeValues: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px', alignItems: 'center' }}>
      <Badge badgeContent={1} color="primary"><Mail sx={{ fontSize: 32 }} /></Badge>
      <Badge badgeContent={12} color="error"><Mail sx={{ fontSize: 32 }} /></Badge>
      <Badge badgeContent={100} color="secondary" max={99}><Mail sx={{ fontSize: 32 }} /></Badge>
      <Badge badgeContent={0} color="primary" showZero><Mail sx={{ fontSize: 32 }} /></Badge>
    </div>
  ),
  parameters: { docs: { description: { story: 'Various badge content values — max prop caps at 99+, showZero forces display of 0' } } },
};
