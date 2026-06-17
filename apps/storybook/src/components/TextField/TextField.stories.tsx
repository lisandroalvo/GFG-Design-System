import type { Meta, StoryObj } from '@storybook/react';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6570:48313\` · 60 variants

Built on **MUI TextField** with the GFG theme applied.

### Exact Figma color tokens
| Element | Hex | Figma token |
|---|---|---|
| Primary (focus) | \`#af9577\` | \`--primary/dark-dust\` |
| Error | \`#a34740\` | \`--good-wine-(error)/wine-1\` |
| Label text | \`rgba(0,0,0,0.6)\` | Secondary text |
| Input text | \`rgba(0,0,0,0.87)\` | Primary text |
| Border | \`rgba(0,0,0,0.23)\` | Default border |

### Figma → Code prop mapping
| Figma prop | Code prop | Values |
|---|---|---|
| Variant | \`variant\` | Standard / Filled / Outlined |
| Size | \`size\` | Medium / Small |
| State=Error | \`error\` | boolean |
| State=Disabled | \`disabled\` | boolean |
| Helper | \`helperText\` | string |
| Adorn. Start | \`startAdornment\` | ReactNode |
| Adorn. End | \`endAdornment\` | ReactNode |
| Label | \`label\` | string |

### Developer usage
\`\`\`tsx
import TextField from '@mui/material/TextField';

<TextField label="Label" variant="outlined" size="medium" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['standard', 'filled', 'outlined'] },
    size: { control: 'select', options: ['medium', 'small'] },
    label: { control: 'text' },
    error: { control: 'boolean', description: 'Figma: State=Error' },
    disabled: { control: 'boolean', description: 'Figma: State=Disabled' },
    helperText: { control: 'text', description: 'Figma: "Helper" boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Playground: Story = {
  args: { variant: 'outlined', size: 'medium', label: 'Label' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <TextField variant="outlined" label="Outlined" />
      <TextField variant="filled" label="Filled" />
      <TextField variant="standard" label="Standard" />
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma: Variant = Standard | Filled | Outlined' } } },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <TextField size="medium" label="Medium" />
      <TextField size="small" label="Small" />
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma: Size = Medium | Small' } } },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
      <TextField label="Enabled" />
      <TextField label="Disabled" disabled />
      <TextField label="Error" error helperText="This field is required." />
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma: State = Enabled | Disabled | Error' } } },
};

export const WithHelperText: Story = {
  args: { label: 'Email address', helperText: 'We will never share your email.', variant: 'outlined' },
  parameters: { docs: { description: { story: 'Figma: "Helper" boolean — provide helperText string to show' } } },
};

export const WithAdornments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TextField label="Search" startAdornment={<SearchIcon />} />
      <TextField label="Password" endAdornment={<VisibilityIcon />} type="password" />
      <TextField label="Email" startAdornment={<EmailIcon />} helperText="Work email preferred" />
      <TextField label="Amount" startAdornment="$" endAdornment="USD" />
    </div>
  ),
  parameters: { docs: { description: { story: 'Figma: "Adorn. Start" and "Adorn. End" boolean properties' } } },
};
