import Image from "next/image";
import styles from "./brands.module.scss";
import { BrandsGrid } from "./brandsGrid";
import { BrandsData } from "@/types";

interface FunnelBrandsProps {
  content: Array<BrandsData>;
  mobileContent: Array<BrandsData>;
}

export function FunnelBrands({ content, mobileContent }: FunnelBrandsProps) {
  return (
    <section className={styles.brandsSection}>
      <div className={styles.brandsBanner}>
        <div className={styles.brandsBannerContainer}>
          <h4 className={styles.brandsBannerText}>
            We help brands scale, increasing <br /> revenue by as much as 5x
          </h4>
          <Image
            src="/images/eltezza-logo.svg"
            className={styles.eltezzaLogo}
            width={171}
            height={94}
            alt="Eltezza"
          />
        </div>
      </div>
      <BrandsGrid content={content} mobileContent={mobileContent} />
    </section>
  );
}
