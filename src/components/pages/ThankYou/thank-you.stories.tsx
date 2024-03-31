import type { Meta, StoryObj } from "@storybook/react";
import { ThankYouPage } from "./thank-you";

const meta = {
  title: "Pages/ThankYouPage",
  component: ThankYouPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ThankYouPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
