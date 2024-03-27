import { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./card";

const meta = {
  title: "Components/UI/Card",
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultCard = () => (
  <>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>Card Content</CardContent>
  </>
);

export const Default: Story = {
  args: {
    children: <DefaultCard />,
  },
};

const CardWithFooter = () => (
  <>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>Card Content</CardContent>
    <CardFooter>Card Footer</CardFooter>
  </>
);

export const WithFooter: Story = {
  args: {
    children: <CardWithFooter />,
  }
}
