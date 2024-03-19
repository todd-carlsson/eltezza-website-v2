import {
    brandsMockData,
    headerDescription,
    pageTags,
    services,
    ourProcess,
    landingPageMockData,
    teamDescription,
    teamMockData
} from "@/constants";
import {
    Hero,
    Navbar,
    Accordion,
    Brands,
    Process,
    Work,
    Team
} from "@/features/layout";
import { AutoplayCarousel } from "@/features/ui";
import useWindowSize from "@/hooks/useWindowSize";
import styles from "@/styles/Home.module.css"

export default function DesignPage() {
    const page = "design"
    const color = "--ez-orange"
    const [windowHeight, windowWidth] = useWindowSize()
    return (
        <>
            <style>{'body { overflow-y: auto; }'}</style>
            <Navbar />
            <div className={styles.heroContainer}>
                <Hero
                    page={page}
                    description={headerDescription.design}
                    tags={pageTags.design}
                />
                {windowWidth > 1075 &&
                    <div className={styles.designPageCarousel}>
                        <AutoplayCarousel
                            isReversed
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
                }
            </div>
            <Work content={landingPageMockData} page={page} />
            <Accordion content={services.design} color={color} />
            <Brands content={brandsMockData.design} columns={4} />
            <Process content={ourProcess.design} color={color} />
            <Team description={teamDescription.design} content={teamMockData} />
        </>
    )
}