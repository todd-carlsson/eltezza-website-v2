import { BtsData } from "@/types";
import styles from "./bts.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";

interface BTSProps {
  content: Array<BtsData>;
  page: "design" | "creative";
}

export function BTS({ content, page }: BTSProps) {
  const [activeImage, setActiveImage] = useState(content.length - 1);
  const hiddenImage = activeImage === 0 ? content.length - 1 : activeImage - 1;

  useEffect(() => {
    setTimeout(() => {
      setActiveImage(activeImage === content.length - 1 ? 0 : activeImage + 1);
      console.log(activeImage);
    }, 2500);
  }, [activeImage, content]);

  return (
    <section className={styles.btsSection}>
      <div className={styles.btsContentContainer}>
        {/* HIDDEN */}
        {content[hiddenImage].isVideo ? (
          <video
            className={classNames(styles.btsImg, styles.hiddenImage)}
            muted
          >
            <source src={content[hiddenImage].src} />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={classNames(styles.btsImg, styles.hiddenImage)}
            src={content[hiddenImage].src}
            alt={content[hiddenImage].alt}
          />
        )}
        {/* ACTIVE */}
        {content[activeImage].isVideo ? (
          <video
            className={styles.btsImg}
            src={content[activeImage].src}
            autoPlay
            loop
            muted
          >
            <source src={content[activeImage].src} />
          </video>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={styles.btsImg}
            src={content[activeImage].src}
            alt={content[activeImage].alt}
          />
        )}
      </div>
      <div>{page}</div>
    </section>
  );
}
