import { PagePortalContent } from "@/features/layout/home/pagePortal"
import styles from "./autoplayCarousel.module.scss"
import Image from "next/image"

interface CarouselItemProps {
    data: PagePortalContent
}

export function CarouselItem({
    data
}: CarouselItemProps) {
    return (
        <div className={styles.carouselCard}>
            <Image
                className={styles.carouselCardImg}
                src={data.src}
                alt="image"
                height={100}
                width={100}
            />
            <h3>{data.title}</h3>
            <p>{data.subTitle}</p>
        </div>
    )
}