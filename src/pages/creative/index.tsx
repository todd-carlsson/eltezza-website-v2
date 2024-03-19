import { headerDescription, ourProcess, pageTags, services } from "@/constants";
import { Hero, Navbar, Accordion, Process } from "@/features/layout";
import styles from "@/styles/Home.module.css"

export default function CreativePage() {
    const color = "--adobe-purple"
    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                <Hero
                    page="creative"
                    description={headerDescription.creative}
                    tags={pageTags.creative}
                />
            </div>
            <Accordion content={services.creative} color={color} />
            {/* BRANDS SECTION GOES HERE */}
            <Process content={ourProcess.creative} color={color} />
        </>
    )
}