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
        OUR TRUSTED <span className="textGradient">PARTNERS</span>
      </h1>
      <div
        className={styles.brandsGrid}
        style={{
          gridTemplateColumns:
            columns === 3 ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr",
        }}
      >
        {content.map((brand) => (
          <Image
            key={brand.id}
            className={styles.brandLogo}
            src={brand.src}
            alt={brand.brand}
            width={150}
            height={150}
          />
        ))}
      </div>
    </section>
  );
});
