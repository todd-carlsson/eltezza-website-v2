import { CarouselData } from "@/types";
import styles from "./hero.module.scss";
import { Marquee } from "@/features/ui";

interface DesignHeroProps {
  leftData: CarouselData[];
  rightData: CarouselData[];
}

export default function DesignHero({ leftData, rightData }: DesignHeroProps) {
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
      <div className={styles.orangeOrbSmall} />
    </div>
  );
}
