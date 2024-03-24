"use client";

import { useState } from "react";
import styles from "./accordion.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
import { AccordionData } from "@/types";

interface AccordionProps {
  content: Array<AccordionData>;
  color: "--ez-orange" | "--adobe-purple";
}

export function Accordion({ content, color }: AccordionProps) {
  const [active, setActive] = useState<string>("-1");

  function hoverHandler(id: string) {
    setActive(id);
  }

  return (
    <div id="services" className={styles.accordion}>
      <p className={styles.title}>WHAT WE DO | SERVICES</p>
      <div>
        {content.map((item) => (
          <div
            className={styles.accordionSection}
            key={item.id}
            onMouseOver={() => hoverHandler(item.id)}
            onMouseLeave={() => hoverHandler("-1")}
            style={{
              backgroundColor: active === item.id ? `var(${color})` : "#000",
            }}
          >
            <h1
              className={classNames(
                styles.accordionTitle,
                item.wrap ? "" : styles.noWrap,
              )}
              style={{
                color:
                  active === item.id && color !== "--adobe-purple"
                    ? "#000"
                    : "#fff",
              }}
            >
              {item.title}
            </h1>
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: active === item.id ? 1 : 0,
              }}
              className={styles.accordionDescription}
              style={{
                color: color === "--adobe-purple" ? "#fff" : "#000",
              }}
            >
              {item.description}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}
