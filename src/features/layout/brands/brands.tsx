import classNames from "classnames";
import styles from "./brands.module.scss";
import { BrandsData } from "@/types";
import { memo } from "react";
import Image from "next/image";

interface BrandsProps {
  content: Array<BrandsData>;
  columns: 3 | 4;
}

export const Brands = memo(function Brands({ content, columns }: BrandsProps) {
  return (
    <section id="clients" className={styles.brandsSection}>
      <h1 className={classNames("largeText", styles.brandsTitle)}>
        OUR TRUSTED <br className={styles.titleBreak} />{" "}
        <span className="textGradient">PARTNERS</span>
      </h1>
      <div
        className={classNames(
          styles.brandsGrid,
          columns === 3 ? styles.threeCols : styles.fourCols,
        )}
      >
        {content.map((brand) => (
          <Image
            key={brand.id}
            className={styles.brandLogo}
            src={brand.src}
            alt={brand.brand}
            width={brand.maxWidth || 150}
            height={150}
            style={{
              maxWidth: brand.maxWidth,
              width: brand.width,
            }}
          />
        ))}
      </div>
    </section>
  );
});
