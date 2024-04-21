import type { Meta, StoryObj } from "@storybook/react";
import { Marquee } from ".";
import { landingPageData } from "../../../constants/data";

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
      <Marquee orientation="horizontal" content={landingPageData.design} />
    </div>
  ),
  args: {
    orientation: "horizontal",
    content: landingPageData.design,
  },
};

/**Horizontal Reversed state */
export const HorizontalReverse: Story = {
  render: () => (
    <div style={{ height: 400, fontFamily: "sans-serif" }}>
      <Marquee
        isReversed
        orientation="horizontal"
        content={landingPageData.design}
      />
    </div>
  ),
  args: {
    orientation: "horizontal",
    content: landingPageData.design,
  },
};

/**Vertical state */
export const Vertical: Story = {
  render: () => (
    <div style={{ height: 400, fontFamily: "sans-serif" }}>
      <Marquee orientation="vertical" content={landingPageData.design} />
    </div>
  ),
  args: {
    orientation: "horizontal",
    content: landingPageData.design,
  },
};

/**Vertical Reversed state */
export const VerticalReverse: Story = {
  render: () => (
    <div style={{ height: 400, fontFamily: "sans-serif" }}>
      <Marquee orientation="vertical" content={landingPageData.design} />
    </div>
  ),
  args: {
    orientation: "horizontal",
    content: landingPageData.design,
  },
};
