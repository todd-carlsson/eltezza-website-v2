import styles from "./marquee.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { CarouselData } from "@/types";
import { Badge } from "../badge";

interface CarouselItemProps {
  data: CarouselData;
  ariaHidden?: boolean;
  width?: number;
  height?: number;
}

export function CarouselItem({
  data,
  ariaHidden = false,
  width,
  height,
}: CarouselItemProps) {
  return (
    <div aria-hidden={ariaHidden} className={classNames(styles.carouselCard)}>
      {data.badge && (
        <Badge className={styles.carouselBadge}>{data.badge}</Badge>
      )}
      {!data.isVideo ? (
        <Image
          className={styles.carouselCardImg}
          src={data.src}
          alt={data.alt ? data.alt : "image"}
          height={height ? height : 300}
          width={width ? width : 300}
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
    </div>
  );
}
