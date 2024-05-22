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
        content={leftData}
        imgWidth={"100%"}
        duration={13}
      />
      <Marquee
        className={styles.designHeroMarquee}
        orientation="vertical"
        content={rightData}
        imgWidth={"100%"}
        duration={13}
      />
      <div className={styles.blurBottom} />
      <div className={styles.orangeOrbSmall} />
    </div>
  );
});
