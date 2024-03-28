"use client";

import { Button, ButtonVariant } from "@/features/ui";
import styles from "./hero.module.scss";

interface HeroProps {
  page: "design" | "creative";
  description: string;
  tags: Array<string>;
}

export function Hero({ page, description, tags }: HeroProps) {
  return (
    <div className={styles.heroContent}>
      <div
        className={styles.orb}
        style={{
          backgroundColor:
            page === "design" ? "var(--ez-orange)" : "var(--adobe-purple)",
        }}
      />
      {/* HEADING */}
      <div className={styles.heroHeadingContainer}>
        <h1 className={styles.heroHeading}>RISE ABOVE</h1>
        <h1 className={styles.heroHeading}>
          THE{" "}
          <span
            className={styles.headingGradient}
            style={{
              backgroundColor:
                page === "design" ? "var(--ez-orange)" : "var(--adobe-purple)",
            }}
          >
            NOISE
          </span>
        </h1>
      </div>
      {/* DESCRIPTION */}
      <p className={styles.heroDescription}>{description}</p>
      {/* TAGS */}
      <div className={styles.heroTags}>
        {tags.map((tag) => (
          <Button variant={ButtonVariant.main} key={tag}>
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
}
