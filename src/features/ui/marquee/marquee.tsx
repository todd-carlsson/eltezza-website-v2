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
import useMeasure from "react-use-measure";

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

  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);

  useMotionValueEvent(x, "animationStart", () => {
    if (x.get() <= -width / 2) {
      x.set(0);
    }
  });

  function MarqueeSize() {
    if (orientation === "horizontal") {
      return width * -0.3625;
    } else {
      if (!isReversed) {
        return -height;
      } else return height * 0.3333;
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
      if (isReversed) return height * -0.3333;
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
        dragConstraints={{ right: 0, left: -width / 2 }}
        className={classNames(
          styles.carouselTrack,
          orientation === "vertical"
            ? isReversed
              ? styles.verticalReverse
              : styles.vertical
            : null,
        )}
        ref={ref}
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
