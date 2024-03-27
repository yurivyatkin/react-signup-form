import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Toggle } from './toggle';

const meta = {
  title: 'Components/UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};
