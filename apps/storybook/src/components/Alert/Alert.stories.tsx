import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS)

Alert communicates a short, important message to attract the user's attention without interrupting their task.

**Figma props:**
- \`Type\` → \`severity\` (Error / Warning / Info / Success)
- \`Variant\` → \`variant\` (Filled / Outlined / Standard)
- \`On Close\` → \`onClose\` callback (boolean in Figma)
- \`Title\` → \`title\` string (boolean in Figma)
- \`Description\` → \`children\`
- \`Action\` → \`action\` slot (boolean in Figma)
        `,
      },
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Maps to Figma "Type" property',
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'Maps to Figma "Variant" property',
    },
    title: {
      control: 'text',
      description: 'Maps to Figma "Title" boolean — leave empty to hide',
    },
    children: {
      control: 'text',
      description: 'Maps to Figma "Description"',
    },
    onClose: {
      description: 'Maps to Figma "On Close" boolean — provide handler to show × button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// ── Default ────────────────────────────────────────────────────────────────
export const Default: Story = {
  args: {
    severity: 'success',
    variant: 'standard',
    children: 'This is a success alert — check it out!',
  },
};

// ── All Severities ─────────────────────────────────────────────────────────
export const Severities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert severity="success">Success — your changes have been saved.</Alert>
      <Alert severity="error">Error — something went wrong. Please try again.</Alert>
      <Alert severity="warning">Warning — your session will expire in 5 minutes.</Alert>
      <Alert severity="info">Info — a new version of the app is available.</Alert>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'All four severity types using the Standard variant.' } },
  },
};

// ── All Variants ───────────────────────────────────────────────────────────
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert severity="info" variant="standard">Standard variant — subtle background.</Alert>
      <Alert severity="info" variant="filled">Filled variant — strong background colour.</Alert>
      <Alert severity="info" variant="outlined">Outlined variant — border only.</Alert>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'All three variants using the Info severity.' } },
  },
};

// ── With Title ─────────────────────────────────────────────────────────────
export const WithTitle: Story = {
  args: {
    severity: 'warning',
    variant: 'standard',
    title: 'Low storage',
    children: 'Your account is almost out of storage. Delete unused files to continue.',
  },
  parameters: {
    docs: { description: { story: 'Maps to Figma "Title" boolean — provide a title string to enable.' } },
  },
};

// ── With Close Button ──────────────────────────────────────────────────────
export const WithClose: Story = {
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'This alert can be dismissed.',
    // eslint-disable-next-line no-console
    onClose: () => console.log('Alert closed'),
  },
  parameters: {
    docs: { description: { story: 'Maps to Figma "On Close" boolean — provide an onClose handler to show the × button.' } },
  },
};

// ── Filled All Severities ──────────────────────────────────────────────────
export const FilledVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert severity="success" variant="filled">Success — filled.</Alert>
      <Alert severity="error" variant="filled">Error — filled.</Alert>
      <Alert severity="warning" variant="filled">Warning — filled.</Alert>
      <Alert severity="info" variant="filled">Info — filled.</Alert>
    </div>
  ),
};

// ── Outlined All Severities ────────────────────────────────────────────────
export const OutlinedVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert severity="success" variant="outlined">Success — outlined.</Alert>
      <Alert severity="error" variant="outlined">Error — outlined.</Alert>
      <Alert severity="warning" variant="outlined">Warning — outlined.</Alert>
      <Alert severity="info" variant="outlined">Info — outlined.</Alert>
    </div>
  ),
};
