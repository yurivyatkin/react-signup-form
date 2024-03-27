import type { Meta, StoryObj } from '@storybook/react';
import { SignUpPage } from './signup';

const meta = {
  title: 'Pages/SignUpPage',
  component: SignUpPage,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUpPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
