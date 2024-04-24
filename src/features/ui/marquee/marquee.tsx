import styles from "./marquee.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import { CarouselData } from "@/types";
import { memo, useLayoutEffect, useRef, useState } from "react";

interface MarqueeProps {
  content: Array<CarouselData>;
  orientation: "vertical" | "horizontal";
  badgeSize?: "small" | "large";
  className?: string;
  isReversed?: boolean;
  width?: number | string;
  height?: number | string;
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
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [marqueeWidth, setMarqueeWidth] = useState<number>(0);
  const [marqueeHeight, setMarqueeHeight] = useState<number>(0);

  useLayoutEffect(() => {
    setMarqueeWidth(
      marqueeRef?.current?.offsetWidth ? marqueeRef?.current?.offsetWidth : 0,
    );
    setMarqueeHeight(
      marqueeRef?.current?.offsetHeight ? marqueeRef?.current?.offsetHeight : 0,
    );
  }, []);

  function MarqueeSize() {
    if (orientation === "horizontal") {
      return -marqueeWidth * 0.2;
    } else {
      if (!isReversed) {
        return -marqueeHeight * 0.5;
      } else return marqueeHeight * 0.5;
    }
  }

  const marqueeVariantsX = {
    animate: {
      x: [MarqueeSize() / 2, MarqueeSize()],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  const marqueeVariantsY = {
    animate: {
      y: [0, MarqueeSize()],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 9,
          ease: "linear",
        },
      },
    },
  };
  return (
    <motion.div
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
        ref={marqueeRef}
        variants={
          orientation === "horizontal" ? marqueeVariantsX : marqueeVariantsY
        }
        animate="animate"
        // style={{
        //   bottom: orientation === "vertical" && isReversed ? marqueeHeight / -4 : 0,
        //   top: orientation === "vertical" && !isReversed ? marqueeHeight / 4 : 0
        // }}
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
    </motion.div>
  );
});
