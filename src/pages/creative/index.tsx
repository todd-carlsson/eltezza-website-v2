import { headerDescription, pageTags, services } from "@/constants";
import { Hero, Navbar, Services } from "@/features/layout";
import styles from "@/styles/Home.module.css"

export default function CreativePage() {
    return (
        <div className={styles.heroContainer}>
            <Hero
                page="creative"
                description={headerDescription.creative}
                tags={pageTags.creative}
            />
            <Navbar />
            <Services content={services.creative} />
        </div>
    )
}