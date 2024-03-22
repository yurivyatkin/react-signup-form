import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'sm',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: 'Button',
  }
};
