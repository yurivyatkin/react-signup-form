import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './button';

const meta = {
  title: 'Components/Form/Button',
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

export const Fancy: Story = {
  render: () => <Button
    className="px-[14px] py-[10px] bg-[#404eff] rounded-[25px] border border-solid border-[#4f93ff] shadow-sm text-white hover:bg-[#4f93ff] hover:text-white [font-family:'Poppins',Helvetica] text-[20px]" 
    children="I'm fancy!"
   />,
}
