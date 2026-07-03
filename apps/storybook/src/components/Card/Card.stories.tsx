import type { Meta, StoryObj } from '@storybook/react';
import MuiButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6562:38678\`

Built on **MUI Card** with the GFG theme applied.

### Figma → Code prop mapping
| Figma prop | Code prop | Notes |
|---|---|---|
| Small Screen | \`smallScreen\` | boolean — full width on mobile |
| Blank | \`blank\` | boolean — empty card shell |
| elevation | \`elevation\` | 1 (default, MUI shadow) |

### Design tokens
| Token | Value |
|---|---|
| Border radius | \`4px\` |
| Background | \`#ffffff\` |
| Shadow (elevation 1) | MUI default dp1 |

### Developer usage
\`\`\`tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

<Card elevation={1}>
  <CardHeader title="Title" subheader="Subheader" />
  <CardContent>Card body content</CardContent>
</Card>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    subheader: {
      control: 'text',
      description: 'Card subheader / secondary text',
    },
    elevation: {
      control: { type: 'range', min: 0, max: 24 },
      description: 'MUI Paper elevation (shadow depth)',
    },
    smallScreen: {
      control: 'boolean',
      description: 'Maps to Figma "Small Screen" — full width',
    },
    blank: {
      control: 'boolean',
      description: 'Maps to Figma "Blank" — empty card shell',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    title: 'Card Title',
    subheader: 'Secondary text',
    children: 'Card body content goes here. This is where the main information is displayed.',
    elevation: 1,
  },
};

export const Basic: Story = {
  render: () => (
    <Card title="Basic Card" subheader="Subheader text">
      <Typography variant="body2" color="text.secondary">
        This is a basic card with a title, subheader, and body content.
      </Typography>
    </Card>
  ),
  parameters: {
    docs: { description: { story: 'Card with title, subheader, and body content.' } },
  },
};

export const WithActions: Story = {
  render: () => (
    <Card
      title="Card with Actions"
      subheader="Action buttons in the footer"
      actions={
        <>
          <MuiButton size="small" color="primary">Share</MuiButton>
          <MuiButton size="small" color="primary">Learn More</MuiButton>
        </>
      }
    >
      <Typography variant="body2" color="text.secondary">
        This card has action buttons rendered in CardActions at the bottom.
      </Typography>
    </Card>
  ),
};

export const Blank: Story = {
  args: {
    blank: true,
    elevation: 1,
  },
  parameters: {
    docs: { description: { story: 'Figma: "Blank=True" — empty card shell, no content.' } },
  },
};

export const ElevationVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '16px' }}>
      {[0, 1, 2, 4, 8].map(elev => (
        <Card key={elev} elevation={elev} title={`Elevation ${elev}`}>
          <Typography variant="body2" color="text.secondary">
            elevation={elev}
          </Typography>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    docs: { description: { story: 'MUI elevation variants — Figma default is elevation=1.' } },
  },
};

export const SmallScreen: Story = {
  render: () => (
    <div style={{ maxWidth: '375px' }}>
      <Card
        title="Small Screen Card"
        subheader="Full width on mobile"
        smallScreen
      >
        <Typography variant="body2" color="text.secondary">
          Maps to Figma "Small Screen=True" — card stretches to full container width.
        </Typography>
      </Card>
    </div>
  ),
  parameters: {
    docs: { description: { story: 'Figma: "Small Screen=True" — full width layout for mobile.' } },
  },
};
