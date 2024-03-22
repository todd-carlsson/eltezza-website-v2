import { BtsData } from "@/types";
import styles from "./bts.module.scss";

interface BTSProps {
  content: Array<BtsData>;
  page: "design" | "creative";
}

export function BTS({ content, page }: BTSProps) {
  return (
    <section className={styles.btsSection}>
      <div className={styles.btsContentContainer}>
        {content.map((item) => {
          if (item.isVideo) {
            return (
              <video
                className={styles.btsImg}
                key={item.id}
                src={item.src}
                autoPlay
                muted
                loop
              />
            );
          } else {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={styles.btsImg}
                key={item.id}
                src={item.src}
                alt={item.alt}
              />
            );
          }
        })}
      </div>
      <div>{page}</div>
    </section>
  );
}
