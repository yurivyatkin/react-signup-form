import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Label } from './label';
import { IconInput } from '@/components/form/IconInput';

const meta = {
  title: 'Components/Form/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

const LabeledInput = () => (
  <>
    <Label htmlFor="input">
      Label
    </Label>
    <IconInput id="input" type="text" placeholder="Input" />
  </>
)

export const Default: Story = {
  args: {
    children: <LabeledInput />,
  },
};
