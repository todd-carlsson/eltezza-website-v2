import { CarouselData } from "@/types"
import styles from "./work.module.scss"
import { AutoplayCarousel } from "@/features/ui"

interface WorkProps {
    content: Array<CarouselData>
    page: "design" | "creative"
}

export function Work({
    content,
    page
}: WorkProps) {
    return (
        <section className={styles.workSection}>
            {page === "design" ?
                <AutoplayCarousel
                    imageOnly
                    orientation="horizontal"
                    content={content}
                />
                : "creative"
            }
        </section>
    )
}