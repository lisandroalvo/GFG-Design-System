import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const MailIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="#AF9577" aria-hidden="true">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS)

Badge generates a small badge to the top-right of its child element. GFG Design System has **13 variants** in Figma.

**Figma props:**
- \`Variant\` → \`variant\` (Standard / Dot)
- \`Color\` → \`color\` (Default / Primary / Secondary / Error / Warning / Info / Success)
- \`Content\` → \`content\` text
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
      description: 'Maps to Figma "Variant" property',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Maps to Figma "Color" property',
    },
    content: {
      control: 'text',
      description: 'Maps to Figma "Content" text property',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { color: 'primary', variant: 'standard', content: '4' },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <Badge {...args}><MailIcon /></Badge>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px', flexWrap: 'wrap' }}>
      {(['default','primary','secondary','error','warning','info','success'] as const).map(color => (
        <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Badge color={color} content="4"><MailIcon /></Badge>
          <span style={{ fontSize: '11px', color: '#666' }}>{color}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { docs: { description: { story: 'All 7 Figma colour options.' } } },
};

export const DotVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px', flexWrap: 'wrap' }}>
      {(['primary','error','success','warning'] as const).map(color => (
        <div key={color} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Badge variant="dot" color={color}><MailIcon /></Badge>
          <span style={{ fontSize: '11px', color: '#666' }}>{color}</span>
        </div>
      ))}
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma "Variant=Dot" — no content, just a coloured indicator.' } } },
};

export const Standalone: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', padding: '20px', alignItems: 'center' }}>
      <Badge content="1" color="primary" />
      <Badge content="12" color="error" />
      <Badge content="99+" color="success" />
    </div>
  ),
  parameters: { docs: { description: { story: 'Badge used standalone without an anchor element.' } } },
};
