import type { Meta, StoryObj } from "@storybook/react";
import { IconInput } from "./icon-input";
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'

const meta = {
  title: "Components/Form/IconInput",
  component: IconInput,
  decorators: [
    (Story) => (
      <div className="flex flex-col justify-center h-[100px] px-2 [background:linear-gradient(150deg,rgb(79,147,255)_22.94%,rgb(216,170,250)_77.55%)]">
        <Story />
      </div>
    )
  ],
  tags: ["autodocs"],
  args: {
    children: null,
  },
} satisfies Meta<typeof IconInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Envelope: Story = {
  args: {
    icon: <EnvelopeClosedIcon />,
  },
};
