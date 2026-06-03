import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS)

Buttons allow users to take actions and make choices with a single tap. GFG Design System has **270 variants** in Figma.

**Figma props:**
- \`Variant\` → \`variant\` (Contained / Outlined / Text)
- \`Color\` → \`color\` (Primary / Secondary / Error / Warning / Info / Success)
- \`Size\` → \`size\` (Large / Medium / Small)
- \`Start Icon\` → \`startIcon\` slot (boolean in Figma)
- \`End Icon\` → \`endIcon\` slot (boolean in Figma)
- \`Label\` → \`label\` text
- \`State=Disabled\` → \`disabled\` boolean
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
      description: 'Maps to Figma "Variant" property',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Maps to Figma "Color" property',
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small'],
      description: 'Maps to Figma "Size" property',
    },
    label: {
      control: 'text',
      description: 'Maps to Figma "Label" text property',
    },
    disabled: {
      control: 'boolean',
      description: 'Maps to Figma "State=Disabled"',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ── Default ────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    label: 'Button',
  },
};

// ── All Variants ───────────────────────────────────────────────────────────
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="contained" label="Contained" />
      <Button variant="outlined" label="Outlined" />
      <Button variant="text" label="Text" />
    </div>
  ),
  parameters: { docs: { description: { story: 'All three Figma variants using the Primary colour.' } } },
};

// ── All Colors ─────────────────────────────────────────────────────────────
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary','secondary','error','warning','info','success'] as const).map(color => (
        <Button key={color} variant="contained" color={color} label={color.charAt(0).toUpperCase() + color.slice(1)} />
      ))}
    </div>
  ),
  parameters: { docs: { description: { story: 'All six Figma colour options using the Contained variant.' } } },
};

// ── All Sizes ──────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Button size="small" label="Small" />
      <Button size="medium" label="Medium" />
      <Button size="large" label="Large" />
    </div>
  ),
  parameters: { docs: { description: { story: 'All three Figma size options.' } } },
};

// ── With Icons ─────────────────────────────────────────────────────────────
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="Start Icon" startIcon={<StarIcon />} />
      <Button label="End Icon" endIcon={<ArrowIcon />} />
      <Button label="Both Icons" startIcon={<StarIcon />} endIcon={<ArrowIcon />} />
    </div>
  ),
  parameters: { docs: { description: { story: 'Maps to Figma "Start Icon" and "End Icon" boolean properties.' } } },
};

// ── States ─────────────────────────────────────────────────────────────────
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button label="Enabled" />
      <Button label="Disabled" disabled />
      <Button variant="outlined" label="Outlined Disabled" disabled />
      <Button variant="text" label="Text Disabled" disabled />
    </div>
  ),
  parameters: { docs: { description: { story: 'Maps to Figma "State" property — Enabled vs Disabled.' } } },
};

// ── Outlined Colors ────────────────────────────────────────────────────────
export const OutlinedColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
      {(['primary','secondary','error','warning','info','success'] as const).map(color => (
        <Button key={color} variant="outlined" color={color} label={color.charAt(0).toUpperCase() + color.slice(1)} />
      ))}
    </div>
  ),
};
