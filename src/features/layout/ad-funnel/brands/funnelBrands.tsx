import Image from "next/image";
import styles from "./brands.module.scss";

export function FunnelBrands() {
  return (
    <section className={styles.brandsSection}>
      <div className={styles.brandsBanner}>
        <div className={styles.brandsBannerContainer}>
          <h4 className={styles.brandsBannerText}>
            We help brands scale, increasing <br /> revenue by as much as 5x
          </h4>
          <Image
            src="/images/eltezza-logo-rotated.svg"
            width={117}
            height={211}
            alt="Eltezza"
          />
        </div>
      </div>
    </section>
  );
}
