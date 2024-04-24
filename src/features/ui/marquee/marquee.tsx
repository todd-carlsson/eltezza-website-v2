import styles from "./marquee.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { CarouselData } from "@/types";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";

interface MarqueeProps {
  content: Array<CarouselData>;
  orientation: "vertical" | "horizontal";
  badgeSize?: "small" | "large";
  time?: number;
  className?: string;
  isReversed?: boolean;
  width?: number | string;
  height?: number | string;
  drag?: boolean;
}

export function Marquee({
  content,
  orientation,
  badgeSize = "large",
  time = 20,
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

  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);

  useMotionValueEvent(x, "animationStart", () => {
    if (x.get() <= -marqueeWidth / 2) {
      x.set(0);
    }
  });

  // For the useLayoutEffect
  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    setTimeout(() => {
      setMarqueeWidth(
        marqueeRef?.current?.offsetWidth ? marqueeRef?.current?.offsetWidth : 0,
      );
      setMarqueeHeight(
        marqueeRef?.current?.offsetHeight
          ? marqueeRef?.current?.offsetHeight
          : 0,
      );
    }, 200);
  }, [
    windowSize,
    marqueeRef.current?.offsetHeight,
    marqueeRef.current?.offsetWidth,
  ]);

  function MarqueeSize() {
    if (orientation === "horizontal") {
      return marqueeWidth * -0.3625;
    } else {
      if (!isReversed) {
        return -marqueeHeight;
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
          duration: time,
          ease: "linear",
        },
      },
    },
  };

  const marqueeVariantsY = {
    animate: {
      y: [0, MarqueeSize() / 2],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: time,
          ease: "linear",
        },
      },
    },
  };
  const marqueeVariantsYReversed = {
    animate: {
      y: [MarqueeSize() / -2, MarqueeSize()],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: time,
          ease: "linear",
        },
      },
    },
  };

  function getTop() {
    if (orientation === "vertical") {
      if (isReversed) return marqueeHeight * -0.3333;
      else if (!isReversed) return MarqueeSize() / 4;
    }
  }

  function getVariants() {
    if (orientation === "vertical") {
      if (isReversed) return marqueeVariantsYReversed;
      else return marqueeVariantsY;
    } else if (orientation === "horizontal") return marqueeVariantsX;
  }

  return (
    <motion.div
      className={classNames(styles.carouselContainer, className)}
      aria-labelledby="Marquee"
    >
      <motion.div
        drag={drag && "x"}
        dragConstraints={{ right: 0, left: -marqueeWidth / 2 }}
        className={classNames(
          styles.carouselTrack,
          orientation === "vertical"
            ? isReversed
              ? styles.verticalReverse
              : styles.vertical
            : null,
        )}
        ref={marqueeRef}
        variants={getVariants()}
        animate={prefersReducedMotion ? "" : "animate"}
        style={{
          top: getTop(),
          x,
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
}
