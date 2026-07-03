import type { Meta, StoryObj } from '@storybook/react';
import MuiButton from '@mui/material/Button';
import { Dialog } from './Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6586:47183\` · 5 variants

Built on **MUI Dialog** with the GFG theme applied.

### Figma → Code prop mapping
| Figma prop | Code prop | Values |
|---|---|---|
| Max Width | \`maxWidth\` | xs (444px) / sm (600px) / md (900px) / lg (1200px) / xl (1536px) |

### Design tokens
| Token | Value |
|---|---|
| Paper border radius | \`4px\` |
| Paper background | \`#ffffff\` |
| Shadow | MUI elevation 24 |

### Developer usage
\`\`\`tsx
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

<Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
  <DialogTitle>Dialog Title</DialogTitle>
  <DialogContent>Dialog content goes here.</DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button variant="contained" onClick={handleClose}>Confirm</Button>
  </DialogActions>
</Dialog>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Maps to Figma "Max Width" — xs=444px / sm=600px / md=900px / lg=1200px / xl=1536px',
    },
    title: {
      control: 'text',
      description: 'Dialog title text',
    },
    open: {
      control: 'boolean',
      description: 'Controls dialog visibility',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Playground: Story = {
  args: {
    open: true,
    maxWidth: 'sm',
    title: 'Dialog Title',
    children: 'Dialog content goes here. This is the main body text of the dialog.',
    actions: (
      <>
        <MuiButton color="primary">Cancel</MuiButton>
        <MuiButton variant="contained" color="primary">Confirm</MuiButton>
      </>
    ),
  },
};

export const AllMaxWidths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(mw => (
        <div key={mw} style={{ position: 'relative', padding: '8px', border: '1px dashed #ccc', borderRadius: '4px' }}>
          <span style={{ fontFamily: 'Lato, sans-serif', fontSize: '11px', color: '#999', marginBottom: '8px', display: 'block' }}>
            maxWidth="{mw}" — Figma: {({ xs: 444, sm: 600, md: 900, lg: 1200, xl: 1536 }[mw])}px
          </span>
          <Dialog
            open
            maxWidth={mw}
            title={`Max Width: ${mw}`}
            actions={
              <>
                <MuiButton color="primary">Cancel</MuiButton>
                <MuiButton variant="contained" color="primary">OK</MuiButton>
              </>
            }
          >
            Dialog body — maxWidth={mw}
          </Dialog>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: Max Width = xs | sm | md | lg | xl (5 variants, matches Figma node 6586:47183)' } },
  },
};

export const WithTitle: Story = {
  args: {
    open: true,
    maxWidth: 'sm',
    title: 'Confirm Action',
    children: 'Are you sure you want to proceed? This action cannot be undone.',
    actions: (
      <>
        <MuiButton color="primary">Cancel</MuiButton>
        <MuiButton variant="contained" color="error">Delete</MuiButton>
      </>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    open: true,
    maxWidth: 'xs',
    children: 'A simple dialog with no title — just a message and actions.',
    actions: (
      <MuiButton variant="contained" color="primary">Got it</MuiButton>
    ),
  },
  parameters: {
    docs: { description: { story: 'Dialog without a title — content only.' } },
  },
};
