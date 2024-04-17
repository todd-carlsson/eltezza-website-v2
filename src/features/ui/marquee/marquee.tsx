import styles from "./marquee.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import { CarouselData } from "@/types";

interface MarqueeProps {
  content: Array<CarouselData>;
  orientation: "vertical" | "horizontal";
  className?: string;
  imageOnly?: boolean;
  isReversed?: boolean;
  width?: number;
  height?: number;
  drag?: boolean;
}

export function Marquee({
  content,
  orientation,
  className,
  imageOnly = false,
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
        dragConstraints={{ right: 0 }}
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
            imageOnly={imageOnly}
            data={item}
            width={width}
            height={height}
          ></CarouselItem>
        ))}
        {content.map((item) => (
          <CarouselItem
            key={item.id}
            ariaHidden
            imageOnly={imageOnly}
            data={item}
            width={width}
            height={height}
          ></CarouselItem>
        ))}
      </motion.div>
    </div>
  );
}
