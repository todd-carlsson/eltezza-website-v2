"use client"

import { PagePortalContent } from "@/features/layout/home/pagePortal";
import styles from "./autoplayCarousel.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";

interface AutoplayCarouselProps {
    content: Array<PagePortalContent>
    orientation: "vertical" | "horizontal"
    imageOnly?: boolean
    isReversed?: boolean
}

export function AutoplayCarousel({
    content,
    orientation,
    imageOnly = false,
    isReversed = false
}: AutoplayCarouselProps) {
    return (
        <div className={styles.carouselContainer}>
            <div
                className={classNames(
                    styles.carouselTrack,
                    orientation === "vertical"
                        ? isReversed
                            ? styles.verticalReverse : styles.vertical
                        : isReversed
                            ? styles.horizontalReverse : styles.horizontal
                )}
            >
                {content.map((item) => (
                    <CarouselItem
                        key={item.id}
                        imageOnly={imageOnly}
                        data={item}
                    >
                    </CarouselItem>
                ))}
                {content.map((item) => (
                    <CarouselItem
                        key={item.id}
                        ariaHidden
                        imageOnly={imageOnly}
                        data={item}
                    >
                    </CarouselItem>
                ))}
            </div>
        </div>
    )
}