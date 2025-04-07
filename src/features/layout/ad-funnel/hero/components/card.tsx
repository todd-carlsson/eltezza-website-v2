import { FunnelHeroContent } from "@/types";
import classNames from "classnames";
import { MotionValue, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./components.module.scss";

export const Card = ({
  product,
  translate,
}: {
  product: FunnelHeroContent;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product.title}
      className={classNames(styles.productCard, styles.groupProduct)}
    >
      <Link href={product.link} className={styles.productLink} target="_blank">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className={styles.productImage}
          alt={product.title}
        />
      </Link>
      <div className={styles.productOverlay}></div>
      <h2 className={styles.productTitle}>{product.title}</h2>
    </motion.div>
  );
};
