"use client";

import classNames from "classnames";
import styles from "./brands.module.scss";
import { BrandsData } from "@/types";
import { memo } from "react";

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
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={brand.id}
            className={styles.brandLogo}
            src={brand.src}
            alt={brand.brand}
          />
        ))}
      </div>
    </section>
  );
});
