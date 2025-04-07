import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import classNames from "classnames";
import styles from "./parallax.module.scss";
import { Card } from "./components/card";
import { FunnelHeroContent } from "@/types";
import { Header } from "./components/funnelHero";

interface HeroParallaxProps {
  products: FunnelHeroContent[];
  onOpen: () => void;
}

export const HeroParallax = ({ products, onOpen }: HeroParallaxProps) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div ref={ref} className={styles.container}>
      <Header onOpen={onOpen} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className={classNames(styles.productRow, styles.reverse)}>
          {firstRow.map((product) => (
            <Card
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className={styles.productRow}>
          {secondRow.map((product) => (
            <Card
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className={classNames(styles.productRow, styles.reverse)}>
          {thirdRow.map((product) => (
            <Card
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// export const Header = () => {
//   return (
//     <div className={styles.header}>
//       <h1 className={styles.headerTitle}>
//         The Ultimate <br /> development studio
//       </h1>
//       <p className={styles.headerSubtitle}>
//         We build beautiful products with the latest technologies and frameworks.
//         We are a team of passionate developers and designers that love to build
//         amazing products.
//       </p>
//     </div>
//   );
// };
