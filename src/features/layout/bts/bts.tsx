/* eslint-disable @next/next/no-img-element */
import { BtsData } from "@/types";
import styles from "./bts.module.scss";
import { memo, useEffect, useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { BTSText } from "./btsText";

interface BTSProps {
  content: Array<BtsData>;
  page: "design" | "creative";
}

export const BTS = memo(function BTS({ content, page }: BTSProps) {
  const [activeImage, setActiveImage] = useState(content.length - 1);
  // const hiddenImage = activeImage === content.length - 1 ? 0 : activeImage + 1;
  const [hiddenImage, setHiddenImage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveImage(activeImage === content.length - 1 ? 0 : activeImage + 1);
      setHiddenImage(hiddenImage === content.length - 1 ? 0 : hiddenImage + 1);
    }, 3000);
  }, [activeImage, content, hiddenImage]);

  const animationVariant = {
    initial: {
      x: -400,
    },
    animate: {
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.35,
      },
    },
  };

  return (
    <section className={styles.btsSection}>
      <div className={styles.btsContentContainer}>
        {/* HIDDEN */}
        {content[hiddenImage].isVideo ? (
          <motion.video
            key={"-1"}
            variants={animationVariant}
            animate="animate"
            initial="initial"
            className={classNames(styles.btsImg, styles.hiddenImage)}
            muted
            preload="metadata"
          >
            <source src={content[hiddenImage].src} type="video/mp4" />
          </motion.video>
        ) : (
          <motion.img
            key={"-1"}
            variants={animationVariant}
            animate="animate"
            initial="initial"
            className={classNames(styles.btsImg, styles.hiddenImage)}
            src={content[hiddenImage].src}
            alt={content[hiddenImage].alt}
          />
        )}
        {/* ACTIVE */}
        {content[activeImage].isVideo ? (
          <motion.video
            key={activeImage}
            variants={animationVariant}
            animate="animate"
            initial="initial"
            className={styles.btsImg}
            src={content[activeImage].src}
            preload="metadata"
            autoPlay
            loop
            muted
          >
            <source src={content[activeImage].src} type="video/mp4" />
          </motion.video>
        ) : (
          <motion.img
            key={activeImage}
            variants={animationVariant}
            animate="animate"
            initial="initial"
            className={styles.btsImg}
            src={content[activeImage].src}
            alt={content[activeImage].alt}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <BTSText page={page} />
      </div>
    </section>
  );
});
