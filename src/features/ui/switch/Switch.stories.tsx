import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

/**Switch Component*/
const meta = {
  component: Switch,
  title: "UI/Switch",
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

/**Design state */
export const Design: Story = {
  args: {
    page: "design",
    color: "--ez-orange",
  },
};

/**Creative state */
export const Creative: Story = {
  args: {
    page: "creative",
    color: "--adobe-purple",
  },
};
