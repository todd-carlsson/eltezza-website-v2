import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

/**Input Component*/
const meta = {
  component: Input,
  title: "UI/Input",
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

/**Full Name */
export const FullName: Story = {
  args: {
    placeholder: "Full Name",
    type: "text",
  },
};
/**Email */
export const Email: Story = {
  args: {
    placeholder: "Email Address",
    type: "email",
  },
};
/**Error state */
export const Error: Story = {
  args: {
    placeholder: "Full Name",
    type: "text",
    error: true,
  },
};
