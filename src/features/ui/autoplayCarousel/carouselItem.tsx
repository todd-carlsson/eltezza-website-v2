import { PagePortalContent } from "@/features/layout/home/pagePortal"
import styles from "./autoplayCarousel.module.scss"
import Image from "next/image"

interface CarouselItemProps {
    data: PagePortalContent
    imageOnly: boolean
}

export function CarouselItem({
    data,
    imageOnly
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
            {!imageOnly &&
                <div className={styles.carouselInfo}>
                    <h3 className={styles.carouselTitle}>{data.title}</h3>
                    <div className={styles.subTitleWrapper}>
                        <p className={styles.carouselSubTitle}>{data.subTitle}</p>
                        <p className={styles.carouselLink}>{data.link}</p>
                    </div>
                </div>
            }
        </div>
    )
}