import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariant } from "./button";

/**Button Component*/
const meta = {
  component: Button,
  title: "UI/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        ButtonVariant.main,
        ButtonVariant.homeOrange,
        ButtonVariant.homePurple,
      ],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**Main state */
export const Main: Story = {
  args: {
    children: "Test Button 123",
    variant: ButtonVariant.main,
  },
};
/**Main disabled state */
export const MainDisabled: Story = {
  args: {
    children: "Test Button 123",
    variant: ButtonVariant.main,
    disabled: true,
  },
};

/**Orange state */
export const Orange: Story = {
  args: {
    children: "Enter",
    variant: ButtonVariant.homeOrange,
  },
};

/**Purple state */
export const Purple: Story = {
  args: {
    children: "Enter",
    variant: ButtonVariant.homePurple,
  },
};

/**Gradient state */
export const Gradient: Story = {
  args: {
    children: "Test Button 123",
    variant: ButtonVariant.gradient,
  },
};

/**Gradient disabled state */
export const GradientDisabled: Story = {
  args: {
    children: "Test Button 123",
    variant: ButtonVariant.gradient,
    disabled: true,
  },
};
