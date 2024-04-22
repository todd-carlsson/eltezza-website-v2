import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

/**Badge Component*/
const meta = {
  component: Badge,
  title: "UI/Badge",
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Badge */
export const Main: Story = {
  args: {
    children: "Web Design",
  },
};
/** Small Badge */
export const Small: Story = {
  args: {
    size: "small",
    children: "Web Design",
  },
};
