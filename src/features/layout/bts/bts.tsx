/* eslint-disable @next/next/no-img-element */
import { BtsData } from "@/types";
import styles from "./bts.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import BTSText from "./btsText";

interface BTSProps {
  content: Array<BtsData>;
  page: "design" | "creative";
}

export function BTS({ content, page }: BTSProps) {
  const [activeImage, setActiveImage] = useState(content.length - 1);
  const hiddenImage = activeImage === content.length - 1 ? 0 : activeImage + 1;

  useEffect(() => {
    setTimeout(() => {
      setActiveImage(activeImage === content.length - 1 ? 0 : activeImage + 1);
    }, 3000);
  }, [activeImage, content]);

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
            variants={animationVariant}
            animate="animate"
            initial="initial"
            className={classNames(styles.btsImg, styles.hiddenImage)}
            muted
          >
            <source src={content[hiddenImage].src} />
          </motion.video>
        ) : (
          <motion.img
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
            variants={animationVariant}
            animate="animate"
            initial="initial"
            className={styles.btsImg}
            src={content[activeImage].src}
            autoPlay
            loop
            muted
          >
            <source src={content[activeImage].src} />
          </motion.video>
        ) : (
          <motion.img
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
}
