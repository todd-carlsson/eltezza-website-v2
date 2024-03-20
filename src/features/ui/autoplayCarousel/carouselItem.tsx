import styles from "./autoplayCarousel.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { CarouselData } from "@/types";

interface CarouselItemProps {
  data: CarouselData;
  imageOnly: boolean;
  ariaHidden?: boolean;
}

export function CarouselItem({
  data,
  imageOnly,
  ariaHidden = false,
}: CarouselItemProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={classNames(
        styles.carouselCard,
        !imageOnly && styles.withContent,
      )}
    >
      <Image
        className={styles.carouselCardImg}
        src={data.src}
        alt="image"
        height={100}
        width={100}
      />
      {!imageOnly && (
        <div className={styles.carouselInfo}>
          <h3 className={styles.carouselTitle}>{data.title}</h3>
          <div className={styles.subTitleWrapper}>
            <p className={styles.carouselSubTitle}>{data.subTitle}</p>
            <p className={styles.carouselLink}>{data.link}</p>
          </div>
        </div>
      )}
    </div>
  );
}
