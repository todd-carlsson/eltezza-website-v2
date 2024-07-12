import { VideoUI } from "@/features/ui";
import styles from "./hero.module.scss";
import { CreativeHeroData } from "@/types";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CreativeHeroProps {
  content: Array<CreativeHeroData>;
}

export function CreativeHero({ content }: CreativeHeroProps) {
  const [activeId, setActiveId] = useState(0);
  const CONTENT_CHANGE_INTERVAL = 6000;

  useEffect(() => {
    setTimeout(() => {
      setActiveId(activeId === content.length - 1 ? 0 : activeId + 1);
    }, CONTENT_CHANGE_INTERVAL);
  }, [activeId, content.length]);

  return (
    <div className={styles.creativeHeroContainer}>
      <div className={styles.line}>
        <div className={styles.progress} />
      </div>
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
