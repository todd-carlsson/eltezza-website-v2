import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from ".";
import { landingPageMockData } from "../../../constants";

/**Autoplay Carousel Component*/
const meta = {
  component: Marquee,
  title: "ImageComponents/Marquee",
  tags: ["autodocs"],
} satisfies Meta<typeof Marquee>;

export default meta;

type Story = StoryObj<typeof meta>;

/**Horizontal state */
export const Horizontal: Story = {
  render: () => (
    <div style={{ height: 400, fontFamily: "sans-serif" }}>
      <Marquee orientation="horizontal" content={landingPageMockData} />
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
      <Marquee
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
      <Marquee imageOnly orientation="vertical" content={landingPageMockData} />
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
      <Marquee imageOnly orientation="vertical" content={landingPageMockData} />
    </div>
  ),
  args: {
    orientation: "horizontal",
    content: landingPageMockData,
  },
};
