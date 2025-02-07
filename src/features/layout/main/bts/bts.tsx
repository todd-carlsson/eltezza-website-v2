import { BtsData } from "@/types";
import styles from "./bts.module.scss";
import { useEffect, useState } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import classNames from "classnames";
import { motion } from "framer-motion";
import { BTSText } from "./btsText";
import { VideoUI } from "@/features/ui";

interface BTSProps {
  content: Array<BtsData>;
  page: "design" | "creative";
}

export function BTS({ content, page }: BTSProps) {
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
          <motion.div
            key={"-1"}
            variants={animationVariant}
            animate="animate"
            initial="initial"
          >
            <video
              className={classNames(styles.btsImg, styles.hiddenImage)}
              src={content[hiddenImage].src}
              muted
              preload="metadata"
              aria-live="polite"
              playsInline
            />
          </motion.div>
        ) : (
          <ProgressiveImage
            src={content[hiddenImage].src}
            placeholder={content[hiddenImage].placeholder}
          >
            {(src) => (
              <motion.img
                key={"-1"}
                decoding="async"
                variants={animationVariant}
                animate="animate"
                initial="initial"
                className={classNames(styles.btsImg, styles.hiddenImage)}
                src={src}
                alt={content[hiddenImage].alt}
                aria-live="polite"
              />
            )}
          </ProgressiveImage>
        )}
        {/* ACTIVE */}
        {content[activeImage].isVideo ? (
          <motion.div
            key={activeImage}
            variants={animationVariant}
            animate="animate"
            initial="initial"
          >
            <VideoUI className={styles.btsImg} src={content[activeImage].src} />
            {/* <video
              className={styles.btsImg}
              src={content[activeImage].src}
              preload="metadata"
              autoPlay
              loop
              muted
              aria-live="polite"
              playsInline
            /> */}
          </motion.div>
        ) : (
          <ProgressiveImage
            src={content[activeImage].src}
            placeholder={content[activeImage].placeholder}
          >
            {(src) => (
              <motion.img
                key={activeImage}
                decoding="async"
                variants={animationVariant}
                animate="animate"
                initial="initial"
                className={styles.btsImg}
                src={src}
                alt={content[activeImage].alt}
                aria-live="polite"
              />
            )}
          </ProgressiveImage>
        )}
      </div>
      <div className={styles.textContainer}>
        <BTSText page={page} />
      </div>
    </section>
  );
}
