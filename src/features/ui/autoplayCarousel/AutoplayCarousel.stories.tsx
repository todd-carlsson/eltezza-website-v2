import type { Meta, StoryObj } from "@storybook/react";
import { AutoplayCarousel } from ".";
import { landingPageMockData } from "../../../constants";

/**Autoplay Carousel Component*/
const meta = {
  component: AutoplayCarousel,
  title: "ImageComponents/AutoplayCarousel",
  tags: ["autodocs"],
} satisfies Meta<typeof AutoplayCarousel>;

export default meta;

type Story = StoryObj<typeof meta>;

/**Primary state */
export const Primary: Story = {
  render: () => (
    <div style={{ height: 400, fontFamily: "sans-serif" }}>
      <AutoplayCarousel
        orientation="horizontal"
        content={landingPageMockData}
      />
    </div>
  ),
  args: {
    orientation: "horizontal",
    content: landingPageMockData,
  },
};
