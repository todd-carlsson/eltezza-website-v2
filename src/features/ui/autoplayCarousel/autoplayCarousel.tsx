import { PagePortalContent } from "@/features/layout/home/pagePortal";
import styles from "./autoplayCarousel.module.scss";

interface AutoplayCarouselProps {
    content: Array<PagePortalContent>
}

export function AutoplayCarousel({
    content
}: AutoplayCarouselProps) {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
                
            </div>
        </div>
    )
}