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

  function getTitleAnimation(id: string) {
    if (variant === "faq" && windowWidth > 800) {
      if (active === id) return -45;
      else return 0;
    } else return 0;
  }

  function getTitleColor(id: string) {
    if (active === id && color !== "--adobe-purple") {
      return "#000";
    }
    if (windowWidth <= 800 && color === "--ez-orange") {
      return "#000";
    } else return "#fff";
  }

  function getDescriptionAnimation(id: string) {
    if (variant === "faq" && windowWidth > 800) {
      if (active === id) return 0;
      else return 40;
    } else return 0;
  }

  function getDescriptionPosition(id: string) {
    if (active === id && windowWidth <= 800) {
      return "relative";
    } else if (windowWidth > 800 && active !== id) {
      return "absolute";
    } else return "relative";
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
                y: getTitleAnimation(item.id),
              }}
              className={classNames(
                variant === "services"
                  ? styles.accordionTitleService
                  : styles.accordionTitleFaq,
                item.wrap ? "" : styles.noWrap,
              )}
              style={{
                color: getTitleColor(item.id),
              }}
            >
              {item.title}
            </motion.h1>
            <motion.p
              initial={{
                opacity: 0,
                y: variant === "faq" && windowWidth > 800 ? -20 : 0,
                position: "absolute",
              }}
              animate={{
                opacity: active === item.id || windowWidth <= 800 ? 1 : 0,
                y: getDescriptionAnimation(item.id),
                position: getDescriptionPosition(item.id),
              }}
              className={classNames(
                variant === "services"
                  ? styles.descriptionServices
                  : styles.descriptionFaq,
              )}
              style={{
                color: color === "--adobe-purple" ? "#fff" : "#000",
                position: getDescriptionPosition(item.id),
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
