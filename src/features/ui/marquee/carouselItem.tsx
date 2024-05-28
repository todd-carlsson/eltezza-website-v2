import styles from "./marquee.module.scss";
import Image from "next/image";
import classNames from "classnames";
import { CarouselData } from "@/types";
import { Badge } from "../badge";
import React from "react";
import { VideoUI } from "../video";

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CarouselData;
  badgeSize?: "small" | "large";
  width?: number | string;
  height?: number | string;
}

export function CarouselItem({
  data,
  badgeSize = "large",
  width,
  height,
  ...props
}: CarouselItemProps) {
  return (
    <div className={classNames(styles.carouselCard)} {...props}>
      {data.badge && (
        <Badge
          className={classNames(
            styles.carouselBadge,
            badgeSize === "small" && styles.carouselBadgeSmall,
          )}
          size={badgeSize}
        >
          {data.badge}
        </Badge>
      )}
      {!data.isVideo ? (
        <Image
          className={styles.carouselCardImg}
          loading="eager"
          src={data.src}
          alt={data.alt ? data.alt : "image"}
          height={300}
          width={300}
          style={{
            width: width ? width : "auto",
            height: height ? height : "auto",
          }}
        />
      ) : (
        <div className={styles.carouselVideoContainer}>
          <VideoUI
            src={data.src}
            className={styles.carouselCardVideo}
            style={{
              width: width ? width : "auto",
              height: height ? height : "auto",
            }}
          />
          {data.thumbnail && (
            <Image
              className={styles.thumbnail}
              loading="eager"
              src={data.thumbnail}
              alt={data.alt ? data.alt : "image"}
              height={300}
              width={300}
              style={{
                width: width ? width : "auto",
                height: height ? height : "auto",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}
