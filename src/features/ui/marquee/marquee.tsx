import styles from "./marquee.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import { CarouselData } from "@/types";
import { memo } from "react";

interface MarqueeProps {
  content: Array<CarouselData>;
  orientation: "vertical" | "horizontal";
  badgeSize?: "small" | "large";
  className?: string;
  isReversed?: boolean;
  width?: number;
  height?: number;
  drag?: boolean;
}

export const Marquee = memo(function Marquee({
  content,
  orientation,
  badgeSize = "large",
  className,
  isReversed = false,
  width,
  height,
  drag,
}: MarqueeProps) {
  return (
    <div
      className={classNames(styles.carouselContainer, className)}
      aria-labelledby="Marquee"
    >
      <motion.div
        drag={drag && "x"}
        dragConstraints={{ right: 0, left: 0 }}
        className={classNames(
          styles.carouselTrack,
          orientation === "vertical"
            ? isReversed
              ? styles.verticalReverse
              : styles.vertical
            : isReversed
              ? styles.horizontalReverse
              : styles.horizontal,
        )}
      >
        {content.map((item) => (
          <CarouselItem
            key={item.id}
            badgeSize={badgeSize}
            data={item}
            width={width}
            height={height}
          ></CarouselItem>
        ))}
        {content.map((item) => (
          <CarouselItem
            key={item.id}
            badgeSize={badgeSize}
            ariaHidden
            data={item}
            width={width}
            height={height}
          ></CarouselItem>
        ))}
      </motion.div>
    </div>
  );
});
