import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`127:59921\` · 5 variants

Built on **MUI Dialog** with the GFG theme applied. Border radius 4px, standard MUI elevation-24 shadow.

### Figma → Code prop mapping
| Figma prop | Code prop | Values |
|---|---|---|
| Max Width | \`maxWidth\` | xs / sm / md / lg / xl |

### Developer usage
\`\`\`tsx
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

<Dialog open={open} maxWidth="sm" fullWidth onClose={handleClose}>
  <DialogTitle>Title</DialogTitle>
  <DialogContent>Content</DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Cancel</Button>
    <Button variant="contained" onClick={handleConfirm}>Confirm</Button>
  </DialogActions>
</Dialog>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    open: { control: 'boolean' },
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Maps to Figma "Max Width" — 5 variants',
    },
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {
    open: true,
    maxWidth: 'sm',
    title: 'Dialog Title',
    children: 'Dialog content goes here. Use dialogs sparingly — only for information that requires user attention or action.',
    actions: (
      <>
        <Button variant="text" color="primary">Cancel</Button>
        <Button variant="contained" color="primary">Confirm</Button>
      </>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '40px' }}>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog
          open={open}
          maxWidth="sm"
          title="Delete item?"
          onClose={() => setOpen(false)}
          actions={
            <>
              <Button variant="text" color="primary" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="contained" color="error" onClick={() => setOpen(false)}>Delete</Button>
            </>
          }
        >
          This action cannot be undone. Are you sure you want to permanently delete this item?
        </Dialog>
      </div>
    );
  },
  parameters: { docs: { description: { story: 'Interactive example — click to open. Escape key or backdrop click closes.' } } },
};

export const AllSizes: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('sm');
    return (
      <div style={{ padding: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {(['xs','sm','md','lg','xl'] as const).map(s => (
          <Button key={s} variant="outlined" onClick={() => { setSize(s); setOpen(true); }}>
            Open {s.toUpperCase()}
          </Button>
        ))}
        <Dialog
          open={open}
          maxWidth={size}
          title={`Max Width: ${size}`}
          onClose={() => setOpen(false)}
          actions={<Button variant="contained" onClick={() => setOpen(false)}>Close</Button>}
        >
          This dialog uses maxWidth="{size}" — maps to Figma "Max Width" property (5 variants total).
        </Dialog>
      </div>
    );
  },
  parameters: { docs: { description: { story: 'All 5 Figma Max Width variants — xs | sm | md | lg | xl' } } },
};
