import classNames from "classnames";
import styles from "./brands.module.scss";
import { BrandsData } from "@/types";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

interface BrandsProps {
  content: Array<BrandsData>;
  columns: 3 | 4;
}

export function Brands({ content, columns }: BrandsProps) {
  const [windowWidth] = useWindowSize();
  function getMaxWidth(maxWidth: number | undefined) {
    if (windowWidth > 500) {
      return maxWidth;
    } else if (maxWidth) {
      return maxWidth * 0.7;
    } else return 150 * 0.7;
  }
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
              maxWidth: getMaxWidth(brand.maxWidth),
              width: brand.width,
            }}
          />
        ))}
      </div>
    </section>
  );
}
