import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './password-input';

const meta = {
  title: 'Components/Form/PasswordInput',
  component: PasswordInput,
  decorators: [
    (Story) => (
      <div className="flex flex-col justify-center h-[100px] px-2 [background:linear-gradient(150deg,rgb(79,147,255)_22.94%,rgb(216,170,250)_77.55%)]">
        <Story />
      </div>
    )
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
