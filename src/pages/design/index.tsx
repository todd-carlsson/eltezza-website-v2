import { brandsMockData, headerDescription, pageTags, services, ourProcess, landingPageMockData } from "@/constants";
import {
    Hero,
    Navbar,
    Accordion,
    Brands,
    Process
} from "@/features/layout";
import { AutoplayCarousel } from "@/features/ui";
import styles from "@/styles/Home.module.css"

export default function DesignPage() {
    const color = "--ez-orange"
    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                <Hero
                    page="design"
                    description={headerDescription.design}
                    tags={pageTags.design}
                />
                <div className={styles.designPageCarousel}>
                    <AutoplayCarousel
                        orientation="vertical"
                        imageOnly
                        content={landingPageMockData}
                    />
                    <AutoplayCarousel
                        orientation="vertical"
                        imageOnly
                        content={landingPageMockData}
                    />
                </div>
            </div>
            <Accordion content={services.design} color={color} />
            <Brands content={brandsMockData.design} columns={4} />
            <Process content={ourProcess.design} color={color} />

        </>
    )
}