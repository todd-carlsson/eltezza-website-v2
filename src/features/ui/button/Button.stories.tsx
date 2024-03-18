import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonVariant } from ".";

/**Button Component*/
const meta = {
    component: Button,
    title: 'UI/Button',
    tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>


/**Main state */
export const Main: Story = {
    args: {
        children: "Test Button 123",
        variant: ButtonVariant.main
    }
}

/**Orange state */
export const Orange: Story = {
    args: {
        children: "Enter",
        variant: ButtonVariant.homeOrange
    }
}

/**Purple state */
export const Purple: Story = {
    args: {
        children: "Enter",
        variant: ButtonVariant.homePurple
    }
}