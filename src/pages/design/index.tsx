import { headerDescription, pageTags } from "@/constants";
import { Hero, Navbar } from "@/features/layout";
import styles from "@/styles/Home.module.css"

export default function DesignPage() {
    return (
        <div className={styles.heroContainer}>
            <Hero
                page="design"
                description={headerDescription.design}
                tags={pageTags.design}
            />
            <Navbar />
        </div>
    )
}