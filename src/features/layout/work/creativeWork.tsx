import { CreativeWorkData } from "@/types";
import styles from "./work.module.scss";
import classNames from "classnames";
import { useRef } from "react";

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

  const itemsRef = useRef<null | Map<string, HTMLVideoElement>>(null);

  function playVideo(itemId: string) {
    const map = getMap();
    if (map !== null) {
      const node = map.get(itemId);
      node !== undefined && node.play();
    }
  }

  function pauseVideo(itemId: string) {
    const map = getMap();
    if (map !== null) {
      const node = map.get(itemId);
      if (node !== undefined) {
        node.load();
      }
    }
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
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
            onMouseEnter={() => playVideo(item.id)}
            onMouseLeave={() => pauseVideo(item.id)}
            ref={(node) => {
              const map = getMap();
              if (node) {
                map.set(item.id, node);
              } else {
                map.delete(item.id);
              }
            }}
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
