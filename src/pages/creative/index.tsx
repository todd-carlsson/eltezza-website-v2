import {
    brandsMockData,
    headerDescription,
    landingPageMockData,
    ourProcess,
    pageTags,
    services,
    teamDescription,
    teamMockData
} from "@/constants";
import {
    Hero,
    Navbar,
    Accordion,
    Process,
    Work,
    Team,
    Brands
} from "@/features/layout";
import styles from "@/styles/Home.module.css"

export default function CreativePage() {
    const page = "creative"
    const color = "--adobe-purple"
    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                <Hero
                    page={page}
                    description={headerDescription.creative}
                    tags={pageTags.creative}
                />
            </div>
            <Work content={landingPageMockData} page={page} />
            <Accordion content={services.creative} color={color} />
            <Brands content={brandsMockData.creative} columns={3} />
            <Process content={ourProcess.creative} color={color} />
            <Team description={teamDescription.creative} content={teamMockData} />
        </>
    )
}