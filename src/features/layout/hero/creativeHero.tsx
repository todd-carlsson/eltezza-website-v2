import { VideoUI } from "@/features/ui";
import styles from "./hero.module.scss";
import { CreativeHeroData } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import useMeasure from "react-use-measure";

interface CreativeHeroProps {
  content: Array<CreativeHeroData>;
}

export function CreativeHero({ content }: CreativeHeroProps) {
  const [activeId, setActiveId] = useState(0);
  const [progressBarRef, { height }] = useMeasure();
  const CONTENT_CHANGE_INTERVAL = 6000;

  const y = useMotionValue(0);

  useMotionValueEvent(y, "change", (latest) => {
    console.log(latest);
    if (latest === -height) {
      setActiveId(activeId === content.length - 1 ? 0 : activeId + 1);
    }
  });

  useEffect(() => {
    const yControls = animate(y, [0, -height * 2 + height], {
      ease: "linear",
      duration: CONTENT_CHANGE_INTERVAL / 1000,
      repeat: Infinity,
      repeatDelay: 0.5,
    });

    return () => {
      yControls.stop();
    };
  }, [y, height]);

  return (
    <div className={styles.creativeHeroContainer}>
      <motion.div className={styles.line}>
        <motion.div
          className={styles.progress}
          ref={progressBarRef}
          style={{ y, bottom: -height }}
        />
      </motion.div>
      <div className={styles.purpleOrb} />

      <div
        key={content[activeId].video.id}
        className={classNames(styles.creativeHeroVideo, styles.gridColSpanTwo)}
      >
        <VideoUI
          src={content[activeId].video.src}
          className={classNames(
            styles.creativeHeroVideo,
            styles.gridColSpanTwo,
          )}
        />
      </div>

      {content[activeId].images.map((item) => (
        <Image
          className={styles.creativeImg}
          width={250}
          height={250}
          key={item.id}
          src={item.src}
          alt={item.alt}
        />
      ))}
      <div className={styles.purpleOrbSmall} />
    </div>
  );
}
