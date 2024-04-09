import styles from "./marquee.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import { CarouselData } from "@/types";

interface MarqueeProps {
  content: Array<CarouselData>;
  orientation: "vertical" | "horizontal";
  imageOnly?: boolean;
  isReversed?: boolean;
}

export function Marquee({
  content,
  orientation,
  imageOnly = false,
  isReversed = false,
}: MarqueeProps) {
  return (
    <div className={styles.carouselContainer}>
      <motion.div
        drag="x"
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
          ></CarouselItem>
        ))}
        {content.map((item) => (
          <CarouselItem
            key={item.id}
            ariaHidden
            imageOnly={imageOnly}
            data={item}
          ></CarouselItem>
        ))}
      </motion.div>
    </div>
  );
}
