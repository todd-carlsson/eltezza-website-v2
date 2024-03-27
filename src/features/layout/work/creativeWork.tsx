import { CreativeWorkData } from "@/types";
import styles from "./work.module.scss";
import classNames from "classnames";

interface CreativeWorkProps {
  content: Array<CreativeWorkData>;
}

export function CreativeWork({ content }: CreativeWorkProps) {
  function getVideoColumnSize(size: "small" | "medium" | "large") {
    if (size === "large") {
      return styles.gridColSpanSix;
    } else if (size === "medium") {
      return styles.gridColSpanThree;
    } else return styles.gridColSpanTwo;
  }

  return (
    <section id="work" className={styles.workSectionCreative}>
      <div className={styles.textContainer}>
        <h1 className="largeText">
          OUR LATEST <span className="textGradient">WORKS</span>
        </h1>
        <p className={styles.workDescription}>
          <span className={styles.purpleUnderline}>Hover </span>
          your cursor on the cards below to play the videos.
        </p>
      </div>
      <div className={styles.creativeGrid}>
        {content.map((item) => (
          <video
            className={classNames(
              styles.creativeVideo,
              getVideoColumnSize(item.size),
            )}
            poster={item.thumbnail}
            key={item.id}
            src={item.src}
            muted
            // autoPlay
            loop
            preload="metadata"
          >
            <source src={item.src} />
          </video>
        ))}
      </div>
    </section>
  );
}
