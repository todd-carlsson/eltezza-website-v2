import { FeaturedReviewData } from "@/types";
import styles from "./reviews.module.scss";
import Image from "next/image";

interface FeaturedReviewProps {
  content: FeaturedReviewData;
}

export function FeaturedReview({ content }: FeaturedReviewProps) {
  return (
    <div className={styles.featuredReview}>
      <Image
        src={content.src}
        className={styles.reviewImage}
        alt={content.name}
        width={63}
        height={63}
      />
      <div className={styles.textContainer}>
        <p className={styles.review}>{content.review}</p>
        <p className={styles.name}>{content.name}</p>
      </div>
    </div>
  );
}
