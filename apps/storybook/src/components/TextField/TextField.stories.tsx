import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from './TextField';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(0,0,0,0.54)" aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="rgba(0,0,0,0.54)" aria-hidden="true">
    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"/>
  </svg>
);

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS)

TextField lets users enter and edit text. GFG Design System has **60 variants** in Figma.

**Figma props:**
- \`Variant\` → \`variant\` (Standard / Filled / Outlined)
- \`Size\` → \`size\` (Medium / Small)
- \`State\` → \`state\` (Enabled / Hovered / Focused / Disabled / Error)
- \`Helper\` → \`helperText\` string (boolean in Figma)
- \`Adorn. Start\` → \`startAdornment\` (boolean in Figma)
- \`Adorn. End\` → \`endAdornment\` (boolean in Figma)
- \`Label\` → \`label\` text
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'Maps to Figma "Variant" property',
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
      description: 'Maps to Figma "Size" property',
    },
    state: {
      control: 'select',
      options: ['enabled', 'focused', 'disabled', 'error'],
      description: 'Maps to Figma "State" property',
    },
    label: { control: 'text' },
    helperText: { control: 'text', description: 'Maps to Figma "Helper" boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    label: 'Label',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <TextField variant="outlined" label="Outlined" />
      <TextField variant="filled" label="Filled" />
      <TextField variant="standard" label="Standard" />
    </div>
  ),
  parameters: { docs: { description: { story: 'All three Figma variants.' } } },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <TextField size="medium" label="Medium" />
      <TextField size="small" label="Small" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <TextField state="enabled" label="Enabled" />
      <TextField state="disabled" label="Disabled" />
      <TextField state="error" label="Error" helperText="This field is required." />
    </div>
  ),
  parameters: { docs: { description: { story: 'Maps to Figma "State" property.' } } },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email address',
    helperText: 'We will never share your email.',
    variant: 'outlined',
  },
  parameters: { docs: { description: { story: 'Maps to Figma "Helper" boolean — pass helperText string to enable.' } } },
};

export const WithAdornments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextField label="Search" startAdornment={<SearchIcon />} />
      <TextField label="Password" endAdornment={<EyeIcon />} type="password" />
      <TextField label="Amount" startAdornment={<span style={{ fontSize: '16px', color: 'rgba(0,0,0,0.54)' }}>$</span>} endAdornment={<span style={{ fontSize: '14px', color: 'rgba(0,0,0,0.54)' }}>USD</span>} />
    </div>
  ),
  parameters: { docs: { description: { story: 'Maps to Figma "Adorn. Start" and "Adorn. End" boolean properties.' } } },
};
