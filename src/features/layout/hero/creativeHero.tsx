/* eslint-disable @next/next/no-img-element */
import styles from "./hero.module.scss";
import { CreativeHeroImgData, CreativeHeroVideoData } from "@/types";
import classNames from "classnames";

interface CreativeHeroProps {
  video: Array<CreativeHeroVideoData>;
  images: Array<CreativeHeroImgData>;
}

export function CreativeHero({ video, images }: CreativeHeroProps) {
  return (
    <div className={styles.creativeHeroContainer}>
      {video.map((item) => (
        <video
          className={classNames(
            styles.creativeHeroVideo,
            styles.gridColSpanTwo,
          )}
          key={item.id}
          muted
          autoPlay
          loop
          preload="metadata"
        >
          <source src={item.src} />
        </video>
      ))}
      {images.map((item) => (
        <img
          className={styles.creativeImg}
          key={item.id}
          src={item.src}
          alt={item.alt}
        />
      ))}
    </div>
  );
}
