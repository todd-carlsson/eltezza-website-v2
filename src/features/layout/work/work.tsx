"use client"

import { CarouselData } from "@/types"
import styles from "./work.module.scss"
import { AutoplayCarousel } from "@/features/ui"
import Image from "next/image"

interface WorkProps {
    content: Array<CarouselData>
    page: "design" | "creative"
}

export function Work({
    content,
    page
}: WorkProps) {
    if (page === "design") {
        return (
            <section className={styles.workSectionDesign}>
                <div className={styles.wheelContainer}>
                    <Image
                        className={styles.wheel}
                        src="/latest_works_wheel.svg"
                        alt="Latest Work"
                        width={175}
                        height={175}
                    />
                </div>
                <div className={styles.carouselContainer}>
                    <AutoplayCarousel
                        imageOnly
                        orientation="horizontal"
                        content={content}
                    />
                </div>
                <p className={styles.workDesignText}>
                    Drag images left or right to view more designs
                </p>
            </section>
        )
    }
    else return (
        <section className={styles.workSectionCreative}>
            {page}
        </section>
    )
}