import { CarouselData } from "@/types";
import styles from "./hero.module.scss";
import { Marquee } from "@/features/ui";
import { memo } from "react";

interface DesignHeroProps {
  leftData: CarouselData[];
  rightData: CarouselData[];
}

export const DesignHero = memo(function DesignHero({
  leftData,
  rightData,
}: DesignHeroProps) {
  return (
    <div className={styles.designPageCarousel}>
      <div className={styles.orangeOrb} />
      <Marquee
        className={styles.designHeroMarquee}
        isReversed
        orientation="vertical"
        imageOnly
        content={leftData}
        width={300}
      />
      <Marquee
        className={styles.designHeroMarquee}
        orientation="vertical"
        imageOnly
        content={rightData}
        width={300}
      />
      <div className={styles.blurBottom} />
      <div className={styles.orangeOrbSmall} />
    </div>
  );
});
