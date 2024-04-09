import { CarouselData } from "@/types";
import styles from "./work.module.scss";
import { Marquee } from "@/features/ui";
import Image from "next/image";

interface WorkProps {
  content: Array<CarouselData>;
}

export function DesignWork({ content }: WorkProps) {
  return (
    <section id="work" className={styles.workSectionDesign}>
      <div className={styles.wheelContainer}>
        <Image
          className={styles.wheel}
          src="/latest_works_wheel.svg"
          alt="Latest Work"
          width={175}
          height={175}
        />
      </div>
      <div className={styles.carouselContainer}>
        <Marquee
          imageOnly
          orientation="horizontal"
          content={content}
          height={350}
        />
      </div>
      <p className={styles.workDesignText}>
        Drag images left or right to view more designs
      </p>
    </section>
  );
}
