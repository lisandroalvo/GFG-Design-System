import type { Meta, StoryObj } from '@storybook/react';
import MuiButton from '@mui/material/Button';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · 12 variants

Built on **MUI Alert** with the GFG theme applied.

### Exact Figma color tokens
| Severity | Hex | Figma token |
|---|---|---|
| Success | \`#637058\` | \`--good-sage-(success)/sage-1\` |
| Error | \`#a34740\` | \`--good-wine-(error)/wine-1\` |
| Warning | \`#8a5d1f\` | \`--good-ochre-(warning)/ochre-1\` |
| Info | \`#2b4a60\` | \`--good-night-(info)/night-1\` |

### Figma → Code prop mapping
| Figma prop | Code prop | Values |
|---|---|---|
| Type | \`severity\` | Error / Warning / Info / Success |
| Variant | \`variant\` | Filled / Outlined / Standard |
| On Close | \`onClose\` | boolean in Figma → callback in code |
| Title | \`title\` | boolean in Figma → string in code |
| Description | \`children\` | text |
| Action | \`action\` | boolean in Figma → ReactNode in code |

### Developer usage
\`\`\`tsx
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

<Alert severity="success" variant="standard" onClose={() => {}}>
  <AlertTitle>Title</AlertTitle>
  Your message here.
</Alert>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Maps to Figma "Type"',
    },
    variant: {
      control: 'select',
      options: ['standard', 'filled', 'outlined'],
      description: 'Maps to Figma "Variant"',
    },
    title: {
      control: 'text',
      description: 'Maps to Figma "Title" boolean — provide string to show title',
    },
    children: {
      control: 'text',
      description: 'Maps to Figma "Description"',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Playground: Story = {
  args: {
    severity: 'success',
    variant: 'standard',
    children: 'This is a success alert — check it out!',
  },
};

export const AllSeverities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert severity="success">Success — your changes have been saved.</Alert>
      <Alert severity="error">Error — something went wrong. Please try again.</Alert>
      <Alert severity="warning">Warning — your session will expire in 5 minutes.</Alert>
      <Alert severity="info">Info — a new version of the app is available.</Alert>
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma: Type = Error | Warning | Info | Success (Standard variant)' } } },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert severity="info" variant="standard">Standard — subtle background.</Alert>
      <Alert severity="info" variant="filled">Filled — strong background colour.</Alert>
      <Alert severity="info" variant="outlined">Outlined — border only.</Alert>
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma: Variant = Standard | Filled | Outlined' } } },
};

export const WithTitle: Story = {
  args: {
    severity: 'warning',
    title: 'Low storage',
    children: 'Your account is almost out of storage. Delete unused files to continue.',
  },
  parameters: { docs: { description: { story: 'Figma: "Title" boolean enabled — provide a title string' } } },
};

export const WithClose: Story = {
  args: {
    severity: 'info',
    children: 'This alert can be dismissed.',
    // eslint-disable-next-line no-console
    onClose: () => console.log('closed'),
  },
  parameters: { docs: { description: { story: 'Figma: "On Close" boolean — provide onClose handler to show × button' } } },
};

export const WithAction: Story = {
  args: {
    severity: 'warning',
    children: 'Your trial ends in 3 days.',
    action: <MuiButton color="inherit" size="small">Upgrade</MuiButton>,
  },
  parameters: { docs: { description: { story: 'Figma: "Action" boolean — pass action element' } } },
};

export const FilledAllSeverities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert severity="success" variant="filled">Success — filled.</Alert>
      <Alert severity="error" variant="filled">Error — filled.</Alert>
      <Alert severity="warning" variant="filled">Warning — filled.</Alert>
      <Alert severity="info" variant="filled">Info — filled.</Alert>
    </div>
  ),
};

export const OutlinedAllSeverities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
      <Alert severity="success" variant="outlined">Success — outlined.</Alert>
      <Alert severity="error" variant="outlined">Error — outlined.</Alert>
      <Alert severity="warning" variant="outlined">Warning — outlined.</Alert>
      <Alert severity="info" variant="outlined">Info — outlined.</Alert>
    </div>
  ),
};
