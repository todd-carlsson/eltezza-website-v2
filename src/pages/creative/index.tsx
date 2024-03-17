import { headerDescription, pageTags } from "@/constants";
import { Hero } from "@/features/layout";
import styles from "@/styles/Home.module.css"

export default function CreativePage() {
    return (
        <div className={styles.heroContainer}>
            <Hero
                page="creative"
                description={headerDescription.creative}
                tags={pageTags.creative}
            />
        </div>
    )
}