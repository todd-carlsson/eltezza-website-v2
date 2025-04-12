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
  const secondRow = products.slice(5, 11);
  const thirdRow = products.slice(11, 15);
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
    <>
      <Header onOpen={onOpen} />
      <section ref={ref} className={styles.container}>
        <div className={styles.containerGap} />
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
                key={product.thumbnail}
              />
            ))}
          </motion.div>
          <motion.div className={styles.productRow}>
            {secondRow.map((product) => (
              <Card
                product={product}
                translate={translateXReverse}
                key={product.thumbnail}
              />
            ))}
          </motion.div>
          <motion.div className={classNames(styles.productRow, styles.reverse)}>
            {thirdRow.map((product) => (
              <Card
                product={product}
                translate={translateX}
                key={product.thumbnail}
              />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
