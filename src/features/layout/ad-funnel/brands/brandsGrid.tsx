import { BrandsData } from "@/types";
import styles from "./brands.module.scss";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";

interface BrandsGridProps {
  content: Array<BrandsData>;
}

export function BrandsGrid({ content }: BrandsGridProps) {
  const [windowWidth] = useWindowSize();
  function getMaxWidth(maxWidth: number | undefined) {
    if (windowWidth > 500) {
      return maxWidth;
    } else if (maxWidth) {
      return maxWidth * 0.7;
    } else return 150 * 0.7;
  }
  return (
    <div className={styles.brandsGridContainer}>
      {content.map((brand) => (
        <Image
          key={brand.brand}
          className={styles.brandLogo}
          src={brand.src}
          alt={brand.brand}
          width={brand.maxWidth || 150}
          height={150}
          style={{
            maxWidth: getMaxWidth(brand.maxWidth),
            width: brand.width,
            filter: brand.needsColorInvert !== false ? "invert(1)" : "",
          }}
        />
      ))}
    </div>
  );
}
