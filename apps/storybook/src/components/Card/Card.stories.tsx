import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS) · Node \`6562:38678\`

Built on **MUI Card** with the GFG theme applied. Border radius 4px, standard MUI elevation shadows.

### Developer usage
\`\`\`tsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';

<Card>
  <CardHeader title="Title" subheader="Subtitle" />
  <CardContent>Content goes here.</CardContent>
  <CardActions>
    <Button>Action</Button>
  </CardActions>
</Card>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subheader: 'Secondary text',
    children: <Typography variant="body2" color="text.secondary">Card content goes here. Cards can contain text, media, and actions.</Typography>,
  },
};

export const WithMedia: Story = {
  args: {
    title: 'Shrimp and Chorizo Paella',
    subheader: 'September 14, 2024',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=194&fit=crop',
    children: <Typography variant="body2" color="text.secondary">This impressive paella is a perfect party dish and a fun meal to cook together with your guests.</Typography>,
    actions: (
      <>
        <Button variant="text" color="primary" size="small">Share</Button>
        <Button variant="text" color="primary" size="small">Learn More</Button>
      </>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Confirm deletion',
    children: <Typography variant="body2">Are you sure you want to delete this item? This action cannot be undone.</Typography>,
    actions: (
      <>
        <Button variant="text" color="primary" size="small">Cancel</Button>
        <Button variant="contained" color="error" size="small">Delete</Button>
      </>
    ),
  },
};

export const Blank: Story = {
  args: { blank: true },
  parameters: { docs: { description: { story: 'Figma: "Blank=True" — empty card shell' } } },
};

export const SmallScreen: Story = {
  args: {
    title: 'Small Screen Card',
    subheader: 'Compact layout',
    children: <Typography variant="body2" color="text.secondary">Reduced padding for mobile layouts.</Typography>,
    smallScreen: true,
  },
  parameters: { docs: { description: { story: 'Figma: "Small Screen=True" — full width' } } },
};
