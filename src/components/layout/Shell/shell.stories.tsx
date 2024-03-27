import type { Meta, StoryObj } from "@storybook/react";
import { Shell } from "./shell";

const meta = {
  title: "Components/Layout/Shell",
  component: Shell,
  tags: ["autodocs"],
} satisfies Meta<typeof Shell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Shell className="[background:linear-gradient(150deg,rgb(79,147,255)_22.94%,rgb(216,170,250)_77.55%)]" />
  ),
};
