"use client";

import { useState } from "react";
import styles from "./accordion.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames";
import { AccordionData } from "@/types";
import useWindowSize from "@/hooks/useWindowSize";

interface AccordionProps {
  content: Array<AccordionData>;
  color: "--ez-orange" | "--adobe-purple";
  variant: "services" | "faq";
}

export function Accordion({ content, color, variant }: AccordionProps) {
  const [active, setActive] = useState<string>("-1");
  const [windowWidth] = useWindowSize();

  function hoverHandler(id: string) {
    setActive(id);
  }

  return (
    <div id="services" className={styles.accordion}>
      <p className={styles.heading}>
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
              backgroundColor:
                active === item.id || windowWidth <= 800
                  ? `var(${color})`
                  : "#000",
            }}
          >
            <motion.h1
              initial={{
                y: variant === "faq" && windowWidth > 800 ? -45 : 0,
              }}
              animate={{
                y:
                  variant === "faq" && windowWidth > 800
                    ? active === item.id
                      ? -45
                      : 0
                    : 0,
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
                    : windowWidth <= 800 && color === "--ez-orange"
                      ? "#000"
                      : "#fff",
              }}
            >
              {item.title}
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: variant === "faq" && windowWidth > 800 ? -20 : 0,
              }}
              animate={{
                opacity: active === item.id || windowWidth <= 800 ? 1 : 0,
                y:
                  variant === "faq" && windowWidth > 800
                    ? active === item.id
                      ? 0
                      : 40
                    : 0,
              }}
              className={classNames(
                variant === "services"
                  ? styles.descriptionServices
                  : styles.descriptionFaq,
              )}
              style={{
                color: color === "--adobe-purple" ? "#fff" : "#000",
                position:
                  active === item.id && windowWidth <= 800
                    ? "relative"
                    : windowWidth > 800
                      ? "absolute"
                      : "relative",
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
