"use client"

import { PagePortalContent } from "@/features/layout/home/pagePortal";
import styles from "./autoplayCarousel.module.scss";
import { CarouselItem } from "./carouselItem";

interface AutoplayCarouselProps {
    content: Array<PagePortalContent>
}

export function AutoplayCarousel({
    content
}: AutoplayCarouselProps) {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
                {content.map((item) => (
                    <CarouselItem
                        key={item.id}
                        data={item}
                    >
                    </CarouselItem>
                ))}
                {content.map((item) => (
                    <CarouselItem
                        key={item.id}
                        data={item}
                    >
                    </CarouselItem>
                ))}
            </div>
        </div>
    )
}