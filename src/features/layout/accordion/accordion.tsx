"use client";

import { useState } from "react";
import styles from "./accordion.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
import { AccordionData } from "@/types";

interface AccordionProps {
  content: Array<AccordionData>;
  color: "--ez-orange" | "--adobe-purple";
  variant: "services" | "faq";
}

export function Accordion({ content, color, variant }: AccordionProps) {
  const [active, setActive] = useState<string>("-1");

  function hoverHandler(id: string) {
    setActive(id);
  }

  return (
    <div id="services" className={styles.accordion}>
      <p className={styles.title}>
        {variant === "services" ? "WHAT WE DO | SERVICES" : "FAQS"}
      </p>
      <div>
        {content.map((item) => (
          <div
            className={classNames(
              styles.accordionSection,
              variant === "faq" ? styles.faqSection : "",
            )}
            key={item.id}
            onMouseOver={() => hoverHandler(item.id)}
            onMouseLeave={() => hoverHandler("-1")}
            style={{
              backgroundColor: active === item.id ? `var(${color})` : "#000",
            }}
          >
            <motion.h1
              initial={{
                top: "35%",
              }}
              animate={{
                top: active === item.id ? 0 : "35%",
              }}
              className={classNames(
                variant === "services"
                  ? styles.accordionTitleService
                  : styles.accordionTitleFaq,
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
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                top: variant === "faq" ? "35%" : "",
              }}
              animate={{
                opacity: active === item.id ? 1 : 0,
                top: variant === "faq" && active === item.id ? 0 : "35%",
              }}
              className={classNames(
                variant === "services"
                  ? styles.descriptionServices
                  : styles.descriptionFaq,
              )}
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
