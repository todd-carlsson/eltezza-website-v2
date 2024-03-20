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

/**Horizontal state */
export const Horizontal: Story = {
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

/**Horizontal Reversed state */
export const HorizontalReverse: Story = {
  render: () => (
    <div style={{ height: 400, fontFamily: "sans-serif" }}>
      <AutoplayCarousel
        isReversed
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

/**Vertical state */
export const Vertical: Story = {
  render: () => (
    <div style={{ height: 400, fontFamily: "sans-serif" }}>
      <AutoplayCarousel
        imageOnly
        orientation="vertical"
        content={landingPageMockData}
      />
    </div>
  ),
  args: {
    orientation: "horizontal",
    content: landingPageMockData,
  },
};

/**Vertical Reversed state */
export const VerticalReverse: Story = {
  render: () => (
    <div style={{ height: 400, fontFamily: "sans-serif" }}>
      <AutoplayCarousel
        imageOnly
        orientation="vertical"
        content={landingPageMockData}
      />
    </div>
  ),
  args: {
    orientation: "horizontal",
    content: landingPageMockData,
  },
};
