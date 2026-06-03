import type { Meta, StoryObj } from '@storybook/react';
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
**Figma source:** [Open in Figma](https://www.figma.com/file/OjFchNAdeHiNH5W4wYLSGS)

Cards contain content and actions about a single subject.

**Figma props:**
- \`Small Screen\` → \`smallScreen\` boolean — reduces padding on small screens
- \`Blank\` → \`blank\` boolean — renders an empty card shell
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    smallScreen: {
      control: 'boolean',
      description: 'Maps to Figma "Small Screen" boolean',
    },
    blank: {
      control: 'boolean',
      description: 'Maps to Figma "Blank" boolean',
    },
    raised: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Secondary text',
    children: 'Card content goes here. Cards can contain text, media, and actions.',
    raised: true,
  },
};

export const WithMedia: Story = {
  args: {
    title: 'Shrimp and Chorizo Paella',
    subtitle: 'September 14, 2024',
    media: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=194&fit=crop',
    children: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
    actions: (
      <>
        <Button variant="text" color="primary" label="Share" size="small" />
        <Button variant="text" color="primary" label="Learn More" size="small" />
      </>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Confirm action',
    children: 'Are you sure you want to delete this item? This action cannot be undone.',
    actions: (
      <>
        <Button variant="text" color="primary" label="Cancel" size="small" />
        <Button variant="contained" color="error" label="Delete" size="small" />
      </>
    ),
  },
};

export const Blank: Story = {
  args: { blank: true },
  parameters: { docs: { description: { story: 'Maps to Figma "Blank=True" — an empty card shell.' } } },
};

export const SmallScreen: Story = {
  args: {
    title: 'Small Screen Card',
    children: 'This card uses reduced padding for small screen layouts.',
    smallScreen: true,
    raised: true,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: { description: { story: 'Maps to Figma "Small Screen=True" — compact padding.' } },
  },
};

export const NotRaised: Story = {
  args: {
    title: 'Outlined Card',
    subtitle: 'No elevation — border only',
    children: 'This card uses a border instead of a shadow.',
    raised: false,
  },
};
