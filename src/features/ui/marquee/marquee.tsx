import styles from "./marquee.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import { CarouselData } from "@/types";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

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

export const Marquee = function Marquee({
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
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [marqueeHeight, setMarqueeHeight] = useState(0);
  const [windowSize] = useWindowSize();

  // For the useLayoutEffect
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setMarqueeWidth(
      marqueeRef?.current?.offsetWidth ? marqueeRef?.current?.offsetWidth : 0,
    );
    setMarqueeHeight(
      marqueeRef?.current?.offsetHeight ? marqueeRef?.current?.offsetHeight : 0,
    );
  }, [windowSize]);

  function MarqueeSize() {
    if (orientation === "horizontal") {
      return marqueeWidth * -0.3625;
    } else {
      if (!isReversed) {
        return -marqueeHeight * 0.3333;
      } else return marqueeHeight * 0.3333;
    }
  }

  const marqueeVariantsX = {
    animate: {
      x: [0, MarqueeSize()],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const marqueeVariantsY = {
    animate: {
      y: [MarqueeSize() / -2, MarqueeSize()],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
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
            : null,
        )}
        ref={marqueeRef}
        variants={
          orientation === "horizontal" ? marqueeVariantsX : marqueeVariantsY
        }
        animate="animate"
        style={{
          top: orientation === "vertical" ? marqueeHeight * -0.3333 : 0,
        }}
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
};
