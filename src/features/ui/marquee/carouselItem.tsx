import styles from "./marquee.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { CarouselData } from "@/types";

interface CarouselItemProps {
  data: CarouselData;
  imageOnly: boolean;
  ariaHidden?: boolean;
  width?: number;
  height?: number;
}

export function CarouselItem({
  data,
  imageOnly,
  ariaHidden = false,
  width,
  height,
}: CarouselItemProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={classNames(
        styles.carouselCard,
        !imageOnly && styles.withContent,
      )}
    >
      {!data.isVideo ? (
        <Image
          className={styles.carouselCardImg}
          src={data.src}
          alt={data.alt ? data.alt : "image"}
          height={height ? height : 100}
          width={width ? width : 100}
          style={{
            width: width ? width : "auto",
            height: height ? height : "auto",
          }}
        />
      ) : (
        <video
          className={styles.carouselCardImg}
          autoPlay
          loop
          muted
          preload="metadata"
          style={{
            width: width ? width : "auto",
            height: height ? height : "auto",
          }}
        >
          <source src={data.src} />
        </video>
      )}
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
