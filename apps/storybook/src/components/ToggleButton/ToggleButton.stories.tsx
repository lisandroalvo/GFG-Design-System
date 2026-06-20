import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignCenterOutlined from '@mui/icons-material/FormatAlignCenterOutlined';
import FormatAlignRightOutlined from '@mui/icons-material/FormatAlignRightOutlined';
import FormatAlignJustifyOutlined from '@mui/icons-material/FormatAlignJustifyOutlined';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
# Toggle Button

A toggle button allows users to select from a group of options. Based on Material Design specifications.

**Synced from Figma:** Node 16354:3941

### Variants
- **Size:** Small (40px), Medium (48px), Large (56px)
- **State:** Enabled, Hovered, Focused, Pressed, Disabled
- **Selected:** True/False

### Colors (from Figma)
| Color | Hex | Usage |
|-------|-----|-------|
| Selected BG | Brown/Tan | Active button background |
| Unselected | Outlined | Inactive button border |

### Icons (Icon MS3)
- \`format_align_left\` → \`FormatAlignLeftOutlined\`
- \`format_align_center\` → \`FormatAlignCenterOutlined\`
- \`format_align_right\` → \`FormatAlignRightOutlined\`
- \`format_align_justify\` → \`FormatAlignJustifyOutlined\`

### Developer usage
\`\`\`tsx
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormatAlignLeftOutlined from '@mui/icons-material/FormatAlignLeftOutlined';

<ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
  <ToggleButton value="left">
    <FormatAlignLeftOutlined />
  </ToggleButton>
  <ToggleButton value="center">
    <FormatAlignCenterOutlined />
  </ToggleButton>
  <ToggleButton value="right">
    <FormatAlignRightOutlined />
  </ToggleButton>
</ToggleButtonGroup>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the toggle button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the button is selected',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Playground: Story = {
  args: { 
    value: 'left',
    size: 'medium',
    selected: false,
  },
  render: (args) => {
    const [selected, setSelected] = useState(args.selected);
    
    return (
      <div style={{ padding: '20px' }}>
        <ToggleButton
          {...args}
          selected={selected}
          onChange={() => setSelected(!selected)}
        >
          <FormatAlignLeftOutlined />
        </ToggleButton>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      setAlignment(newAlignment);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Large (56px)</span>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            size="large"
          >
            <ToggleButton value="left">
              <FormatAlignLeftOutlined />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenterOutlined />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRightOutlined />
            </ToggleButton>
            <ToggleButton value="justify">
              <FormatAlignJustifyOutlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Medium (48px)</span>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            size="medium"
          >
            <ToggleButton value="left">
              <FormatAlignLeftOutlined />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenterOutlined />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRightOutlined />
            </ToggleButton>
            <ToggleButton value="justify">
              <FormatAlignJustifyOutlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Small (40px)</span>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            size="small"
          >
            <ToggleButton value="left">
              <FormatAlignLeftOutlined />
            </ToggleButton>
            <ToggleButton value="center">
              <FormatAlignCenterOutlined />
            </ToggleButton>
            <ToggleButton value="right">
              <FormatAlignRightOutlined />
            </ToggleButton>
            <ToggleButton value="justify">
              <FormatAlignJustifyOutlined />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    );
  },
  parameters: { 
    docs: { 
      description: { 
        story: 'Figma: Size = Large (56px) | Medium (48px) | Small (40px)' 
      } 
    } 
  },
};

export const VerticalGroup: Story = {
  render: () => {
    const [alignment, setAlignment] = useState<string | null>('left');

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      setAlignment(newAlignment);
    };

    return (
      <div style={{ padding: '20px' }}>
        <ToggleButtonGroup
          orientation="vertical"
          value={alignment}
          exclusive
          onChange={handleAlignment}
        >
          <ToggleButton value="left">
            <FormatAlignLeftOutlined />
          </ToggleButton>
          <ToggleButton value="center">
            <FormatAlignCenterOutlined />
          </ToggleButton>
          <ToggleButton value="right">
            <FormatAlignRightOutlined />
          </ToggleButton>
          <ToggleButton value="justify">
            <FormatAlignJustifyOutlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    );
  },
  parameters: { 
    docs: { 
      description: { 
        story: 'Figma: Orientation = Vertical — Buttons stacked vertically' 
      } 
    } 
  },
};

export const DisabledState: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', padding: '20px' }}>
      <ToggleButtonGroup size="medium">
        <ToggleButton value="left" disabled>
          <FormatAlignLeftOutlined />
        </ToggleButton>
        <ToggleButton value="center" disabled>
          <FormatAlignCenterOutlined />
        </ToggleButton>
        <ToggleButton value="right" disabled>
          <FormatAlignRightOutlined />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup size="medium">
        <ToggleButton value="left" disabled selected>
          <FormatAlignLeftOutlined />
        </ToggleButton>
        <ToggleButton value="center" disabled>
          <FormatAlignCenterOutlined />
        </ToggleButton>
        <ToggleButton value="right" disabled>
          <FormatAlignRightOutlined />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  ),
  parameters: { 
    docs: { 
      description: { 
        story: 'Figma: State = Disabled — Both unselected and selected disabled states' 
      } 
    } 
  },
};
