import styles from "./marquee.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { CarouselData } from "@/types";
import useMeasure from "react-use-measure";
import { useEffect } from "react";

interface MarqueeProps {
  content: Array<CarouselData>;
  orientation: "vertical" | "horizontal";
  badgeSize?: "small" | "large";
  time?: number;
  className?: string;
  isReversed?: boolean;
  imgWidth?: number | string;
  imgHeight?: number | string;
  drag?: boolean;
}

export function Marquee({
  content,
  orientation,
  badgeSize = "large",
  time = 20,
  className,
  isReversed = false,
  imgWidth,
  imgHeight,
  drag,
}: MarqueeProps) {
  const [ref, { width, height }] = useMeasure();
  const [carouselRef, { width: carouselWidth }] = useMeasure();

  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useMotionValueEvent(x, "change", (latest) => {
    if (orientation === "horizontal" && latest <= -width + carouselWidth) {
      x.set(-width / 2 + carouselWidth);
    }
    if (orientation === "horizontal" && latest >= 0) {
      x.set(-width / 2);
    }
  });

  useEffect(() => {
    const getFinalPosition = () => {
      if (orientation === "horizontal") {
        return -width / 2 - 8;
      } else if (orientation === "vertical") {
        if (!isReversed) {
          return -height / 2 + 8;
        } else return height / 2 - 8;
      } else return 0;
    };

    const xControls = animate(x, getFinalPosition(), {
      ease: "linear",
      duration: time,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    const yControls = animate(y, getFinalPosition(), {
      ease: "linear",
      duration: time,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => {
      xControls.stop();
      yControls.stop();
    };
  }, [height, isReversed, orientation, time, width, x, y]);

  function getTop() {
    if (orientation === "vertical") {
      if (isReversed) return height * -0.66;
      else if (!isReversed) return -height / 4;
    }
  }

  return (
    <motion.div
      className={classNames(styles.carouselContainer, className)}
      aria-labelledby="Marquee"
      ref={carouselRef}
    >
      <motion.div
        drag={drag && "x"}
        dragConstraints={{ right: 0, left: -width + carouselWidth }}
        className={classNames(
          styles.carouselTrack,
          orientation === "vertical"
            ? isReversed
              ? styles.verticalReverse
              : styles.vertical
            : null,
        )}
        ref={ref}
        style={{
          x: orientation === "horizontal" && !prefersReducedMotion ? x : 0,
          y: orientation === "vertical" && !prefersReducedMotion ? y : 0,
          top: getTop(),
        }}
      >
        {content.map((item) => (
          <CarouselItem
            key={item.id}
            badgeSize={badgeSize}
            data={item}
            width={imgWidth}
            height={imgHeight}
          ></CarouselItem>
        ))}
        {content.map((item) => (
          <CarouselItem
            key={item.id}
            badgeSize={badgeSize}
            ariaHidden
            data={item}
            width={imgWidth}
            height={imgHeight}
          ></CarouselItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
