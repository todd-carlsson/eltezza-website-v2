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
    <section className={styles.workSectionCreative}>
      <div className={styles.creativeGrid}>
        {content.map((item) => (
          <video
            className={classNames(
              styles.creativeVideo,
              getVideoColumnSize(item.size),
            )}
            key={item.id}
            src={item.src}
            muted
          />
        ))}
      </div>
    </section>
  );
}
