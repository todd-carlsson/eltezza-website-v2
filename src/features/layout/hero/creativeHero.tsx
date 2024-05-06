/* eslint-disable @next/next/no-img-element */
import styles from "./hero.module.scss";
import { CreativeHeroImgData, CreativeHeroVideoData } from "@/types";
import classNames from "classnames";
import Image from "next/image";

interface CreativeHeroProps {
  video: Array<CreativeHeroVideoData>;
  images: Array<CreativeHeroImgData>;
}

export function CreativeHero({ video, images }: CreativeHeroProps) {
  return (
    <div className={styles.creativeHeroContainer}>
      <div className={styles.purpleOrb} />
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
          playsInline
        >
          <source src={item.src} />
        </video>
      ))}
      {images.map((item) => (
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
