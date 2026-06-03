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
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS)

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. GFG Design System has **5 variants** in Figma.

**Figma props:**
- \`Max Width\` → \`maxWidth\` (xs / sm / md / lg / xl)
        `,
      },
    },
  },
  argTypes: {
    open: { control: 'boolean' },
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Maps to Figma "Max Width" property',
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
    children: 'Dialog content goes here. Use dialogs sparingly — only for critical information that requires user attention.',
    actions: (
      <>
        <Button variant="text" color="primary" label="Cancel" size="medium" />
        <Button variant="contained" color="primary" label="Confirm" size="medium" />
      </>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '40px' }}>
        <Button label="Open Dialog" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          maxWidth="sm"
          title="Delete item?"
          onClose={() => setOpen(false)}
          actions={
            <>
              <Button variant="text" color="primary" label="Cancel" onClick={() => setOpen(false)} />
              <Button variant="contained" color="error" label="Delete" onClick={() => setOpen(false)} />
            </>
          }
        >
          This action cannot be undone. Are you sure you want to permanently delete this item?
        </Dialog>
      </div>
    );
  },
  parameters: {
    docs: { description: { story: 'Interactive example — click the button to open and close the dialog. Press Escape or click the backdrop to close.' } },
  },
};

export const AllSizes: Story = {
  render: () => {
    const [size, setSize] = useState<'xs' | 'sm' | 'md'>('sm');
    const [open, setOpen] = useState(false);
    return (
      <div style={{ padding: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {(['xs', 'sm', 'md'] as const).map(s => (
          <Button key={s} label={`Open ${s.toUpperCase()}`} variant="outlined"
            onClick={() => { setSize(s); setOpen(true); }} />
        ))}
        <Dialog
          open={open}
          maxWidth={size}
          title={`Max Width: ${size}`}
          onClose={() => setOpen(false)}
          actions={
            <Button variant="contained" label="Close" onClick={() => setOpen(false)} />
          }
        >
          This dialog uses maxWidth="{size}" — maps to Figma "Max Width" property.
        </Dialog>
      </div>
    );
  },
  parameters: { docs: { description: { story: 'Demonstrates all 5 Figma Max Width variants.' } } },
};
