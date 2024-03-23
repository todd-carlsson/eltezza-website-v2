"use client";

import useWindowSize from "@/hooks/useWindowSize";
/* eslint-disable @next/next/no-img-element */
import styles from "./process.module.scss";
import { motion } from "framer-motion";

interface ProcessProps {
  content: Array<ProcessPropObj>;
  color: "--ez-orange" | "--adobe-purple";
}

type ProcessPropObj = {
  id: string;
  title: string;
};

export function Process({ content, color }: ProcessProps) {
  // TODO: Fix black text color staggering animation on design page

  const [windowWidth] = useWindowSize();

  const boxVariant = {
    hidden: {
      x: -2,
    },
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const listVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const colorVariant = {
    hidden: {
      backgroundColor: "#fff",
    },
    visible: {
      backgroundColor: "#000",
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <section className={styles.processSection}>
      <h1 className="largeText">
        OUR <span className="textGradient">PROCESS</span>
      </h1>
      <motion.div
        className={styles.processContainer}
        style={{
          height: windowWidth > 800 ? (content.length - 1) * 50 + 100 : "auto",
        }}
        variants={boxVariant}
        initial="hidden"
        whileInView="visible"
      >
        {content.map((item, i) => (
          <motion.div
            key={item.id}
            className={styles.processCard}
            style={{
              top: windowWidth >= 1130 ? i * 50 : "",
            }}
          >
            {i !== 0 && (
              <>
                <img
                  className={styles.arrow}
                  src="/process_arrow.svg"
                  alt="arrow"
                />
                <img
                  className={styles.arrowSmall}
                  src="/process_arrow_mobile.svg"
                  alt="arrow"
                />
              </>
            )}
            <motion.div
              className={styles.background}
              style={{ backgroundColor: `var(${color})` }}
              variants={listVariant}
            />
            <motion.h3
              className={styles.processText}
              variants={color === "--ez-orange" ? colorVariant : undefined}
              style={{ backgroundColor: "#fff" }}
            >
              {item.title}
            </motion.h3>
            <motion.h3
              className={styles.processNumber}
              variants={color === "--ez-orange" ? colorVariant : undefined}
              style={{ backgroundColor: "#fff" }}
            >
              {`0${i + 1}`}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
