import { Button, ButtonVariant } from "@/features/ui";
import styles from "./hero.module.scss";
import { FeaturedReview } from "../reviews";
import { featuredReviewData } from "@/constants";
import useWindowSize from "@/hooks/useWindowSize";
import classNames from "classnames";

interface HeroProps {
  page: "design" | "creative";
  description: string;
  tags: Array<string>;
}

export function Hero({ page, description, tags }: HeroProps) {
  const [windowWidth] = useWindowSize();
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
      <div
        className={classNames(
          styles.heroTags,
          page === "creative" && styles.creativeHeroTags,
        )}
      >
        {tags.map((tag) => (
          <Button variant={ButtonVariant.main} key={tag}>
            {tag}
          </Button>
        ))}
      </div>
      {windowWidth > 1075 && (
        <FeaturedReview content={featuredReviewData[page]} />
      )}
    </div>
  );
}
