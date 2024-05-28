import styles from "./marquee.module.scss";
import { CarouselItem } from "./carouselItem";
import classNames from "classnames";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useVelocity,
} from "framer-motion";
import { CarouselData } from "@/types";
import useMeasure from "react-use-measure";
import { useEffect, useState } from "react";

interface MarqueeProps {
  content: Array<CarouselData>;
  orientation: "vertical" | "horizontal";
  badgeSize?: "small" | "large";
  duration?: number;
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
  duration = 20,
  className,
  isReversed = false,
  imgWidth,
  imgHeight,
  drag,
}: MarqueeProps) {
  const [carouselTrackRef, { width, height }] = useMeasure();
  const [carouselRef, { width: carouselWidth }] = useMeasure();
  const [isAnimating, setIsAnimating] = useState(true);

  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xVelocity = useVelocity(x);

  // Change where x is based on it's current position
  useMotionValueEvent(x, "change", (latest) => {
    // If x is at the very end of the marquee
    if (orientation === "horizontal" && latest <= -width + carouselWidth) {
      x.set(-width / 2 + carouselWidth);
      if (!isAnimating) {
        animate(x, [x.get(), x.get() + xVelocity.get()], {
          type: "tween",
          ease: "easeOut",
          damping: xVelocity.get(),
          duration: width / 2 / -xVelocity.get(),
        });
      }
    }
    // If x is at the beginning of the marquee
    if (orientation === "horizontal" && latest >= 0) {
      x.set(-width / 2);
      if (!isAnimating) {
        animate(x, [x.get(), x.get() + xVelocity.get()], {
          type: "tween",
          ease: "easeOut",
          damping: xVelocity.get(),
          duration: width / 2 / xVelocity.get(),
        });
      }
    }
  });

  useEffect(() => {
    const getFinalPosition = () => {
      if (orientation === "horizontal") {
        return -width / 2 - 8;
      } else if (orientation === "vertical") {
        if (!isReversed) {
          return -height / 2 - 8;
        } else return height / 2 - 8;
      } else return 0;
    };

    const xControls = animate(x, [0, getFinalPosition()], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    const yControls = animate(y, [0, getFinalPosition()], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => {
      xControls.stop();
      yControls.stop();
    };
  }, [height, isReversed, orientation, duration, width, x, y]);

  function getTop() {
    if (orientation === "vertical") {
      if (isReversed) return height * -0.66;
      else if (!isReversed) return -height / 4;
    }
  }

  return (
    <motion.div
      className={classNames(styles.carouselContainer, className)}
      role="marquee"
      ref={carouselRef}
      style={{
        maxWidth: orientation === "horizontal" ? width / 2 : "",
      }}
    >
      <motion.div
        drag={drag && "x"}
        dragConstraints={{ right: 0, left: -width + carouselWidth }}
        onDrag={() => setIsAnimating(false)}
        className={classNames(
          styles.carouselTrack,
          orientation === "vertical"
            ? isReversed
              ? styles.verticalReverse
              : styles.vertical
            : null,
        )}
        ref={carouselTrackRef}
        style={{
          x: orientation === "horizontal" && !prefersReducedMotion ? x : 0,
          y: orientation === "vertical" && !prefersReducedMotion ? y : 0,
          top: getTop(),
          touchAction: "pan-y",
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
            aria-hidden
            data={item}
            width={imgWidth}
            height={imgHeight}
          ></CarouselItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
