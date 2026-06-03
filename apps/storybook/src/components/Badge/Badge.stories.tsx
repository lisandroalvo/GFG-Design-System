import type { Meta, StoryObj } from '@storybook/react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6587:47500\` · 13 variants

Built on **MUI Badge** with the GFG theme applied.

### Exact Figma token values (Badge uses standard MUI palette)
| Color | Hex |
|---|---|
| Primary | \`#1976d2\` |
| Secondary | \`#9c27b0\` |
| Error | \`#d32f2f\` |
| Warning | \`#ef6c00\` |
| Info | \`#0288d1\` |
| Success | \`#2e7d32\` |
| Font | Roboto Medium 12px |
| Dot size | 8×8px |

### Developer usage
\`\`\`tsx
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

<Badge badgeContent={4} color="primary">
  <MailIcon />
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
      <Badge {...args}><MailIcon sx={{ fontSize: 32, color: '#af9577' }} /></Badge>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
      {(['default','primary','secondary','error','warning','info','success'] as const).map(color => (
        <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Badge color={color} badgeContent={4}>
            <MailIcon sx={{ fontSize: 32, color: '#af9577' }} />
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
            <NotificationsIcon sx={{ fontSize: 32, color: '#af9577' }} />
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
      <Badge badgeContent={1} color="primary"><ShoppingCartIcon sx={{ fontSize: 32 }} /></Badge>
      <Badge badgeContent={12} color="error"><ShoppingCartIcon sx={{ fontSize: 32 }} /></Badge>
      <Badge badgeContent={100} color="secondary" max={99}><ShoppingCartIcon sx={{ fontSize: 32 }} /></Badge>
      <Badge badgeContent={0} color="primary" showZero><MailIcon sx={{ fontSize: 32 }} /></Badge>
    </div>
  ),
  parameters: { docs: { description: { story: 'Various badge content values — max prop caps at 99+, showZero forces display of 0' } } },
};
