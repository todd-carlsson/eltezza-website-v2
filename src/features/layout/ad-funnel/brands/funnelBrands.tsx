import { Bounce } from "@/features/ui/animations";
import styles from "./brands.module.scss";
import { BrandsGrid } from "./brandsGrid";
import { BrandsData } from "@/types";
import { motion } from "framer-motion";

interface FunnelBrandsProps {
  content: Array<BrandsData>;
  mobileContent: Array<BrandsData>;
}

export function FunnelBrands({ content, mobileContent }: FunnelBrandsProps) {
  const underlineVariant = {
    hidden: {
      width: 0,
    },
    visible: {
      width: 30,
      transition: {
        delay: 0.8,
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };
  return (
    <section className={styles.brandsSection}>
      <div className={styles.brandsBanner}>
        <div className={styles.brandsBannerContainer}>
          <Bounce delay={0.4} bounceHeight={25}>
            <motion.h4 className={styles.brandsBannerText}>
              We work with businesses of all sizes in NZ <br />
              to increase revenue by as much as{" "}
              <span className={styles.highlightedText}>
                5x
                <motion.span
                  className={styles.underline}
                  variants={underlineVariant}
                />
              </span>
            </motion.h4>
          </Bounce>
        </div>
      </div>
      <BrandsGrid content={content} mobileContent={mobileContent} />
    </section>
  );
}
