import {
    headerDescription,
    landingPageMockData,
    ourProcess,
    pageTags,
    services
} from "@/constants";
import {
    Hero,
    Navbar,
    Accordion,
    Process,
    Work,
    Team
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
            {/* BRANDS SECTION GOES HERE */}
            <Process content={ourProcess.creative} color={color} />
            <Team />
        </>
    )
}