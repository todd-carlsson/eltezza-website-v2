import { headerDescription, pageTags, services } from "@/constants";
import { Hero, Navbar, Accordion } from "@/features/layout";
import styles from "@/styles/Home.module.css"

export default function CreativePage() {
    return (
        <>
            <Navbar />
            <div className={styles.heroContainer}>
                <Hero
                    page="creative"
                    description={headerDescription.creative}
                    tags={pageTags.creative}
                />
                <Accordion content={services.creative} color="--adobe-purple" />
            </div>
        </>
    )
}