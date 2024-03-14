import type { Meta, StoryObj } from "@storybook/react";
import { AutoplayCarousel } from ".";

/**Autoplay Carousel Component*/
const meta = {
    component: AutoplayCarousel,
    title: 'UI/AutoplayCarousel',
    tags: ['autodocs'],
} satisfies Meta<typeof AutoplayCarousel>

export default meta

type Story = StoryObj<typeof meta>

const placeholderContent = [
    {
        id: "1",
        img: "/images/placeholder_photo.png",
        title: "Web Design",
        subTitle: "Rise above the noise",
        link: "www.eltezza.com"
    },
    {
        id: "2",
        img: "/images/placeholder_photo.png",
        title: "Web Design",
        subTitle: "Rise above the noise",
        link: "www.eltezza.com"
    },
    {
        id: "3",
        img: "/images/placeholder_photo.png",
        title: "Web Design",
        subTitle: "Rise above the noise",
        link: "www.eltezza.com"
    },
    {
        id: "4",
        img: "/images/placeholder_photo.png",
        title: "Web Design",
        subTitle: "Rise above the noise",
        link: "www.eltezza.com"
    },
    {
        id: "5",
        img: "/images/placeholder_photo.png",
        title: "Web Design",
        subTitle: "Rise above the noise",
        link: "www.eltezza.com"
    },
]


/**Primary state */
export const Primary: Story = {
    render: () => <div style={{ height: 300 }}>
        <AutoplayCarousel content={placeholderContent} />
    </div>,
    args: {
        content: placeholderContent
    }
}