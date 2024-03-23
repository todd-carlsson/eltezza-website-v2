import { BtsData } from "@/types";
import styles from "./bts.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface BTSProps {
  content: Array<BtsData>;
  page: "design" | "creative";
}

export function BTS({ content, page }: BTSProps) {
  const [activeImage, setActiveImage] = useState(content.length - 1);
  const hiddenImage = activeImage === 0 ? content.length - 1 : activeImage - 1;

  const gradientText = page === "design" ? "CURTAINS" : "MESSY!";

  useEffect(() => {
    setTimeout(() => {
      setActiveImage(activeImage === content.length - 1 ? 0 : activeImage + 1);
      console.log(activeImage);
    }, 2500);
  }, [activeImage, content]);

  const animationVariant = {
    initial: {
      x: -1000,
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
          // eslint-disable-next-line @next/next/no-img-element
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
          // eslint-disable-next-line @next/next/no-img-element
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
        <h1 className={classNames("largeText", styles.btsText)}>
          {page === "design" ? "TAKE A PEAK BEHIND THE " : "THE PROCESS IS "}
          <span className="textGradient">{gradientText}</span>
        </h1>
      </div>
    </section>
  );
}
