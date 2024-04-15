import { TestimonialsData } from "@/types";
import styles from "./reviews.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { memo } from "react";

interface ReviewProps {
  review: TestimonialsData;
  index: number;
  imgIndex: number;
  page: "design" | "creative";
}

export const Review = memo(function Review({
  review,
  index,
  imgIndex,
  page,
}: ReviewProps) {
  return (
    <motion.div
      layout
      initial={{
        scale: 0.8,
        opacity: 0.5,
      }}
      animate={{
        scale: index === imgIndex + 1 ? 1 : 0.8,
        opacity: index === imgIndex + 1 ? 1 : 0.5,
      }}
      className={styles.reviewContainer}
    >
      <p className={styles.reviewText}>{review.review}</p>
      <h3 className={styles.reviewName}>{review.name}</h3>
      <p className={styles.reviewRole}>{review.role}</p>
      <Image
        src={`/images/stars-${page}.svg`}
        alt="5 stars"
        width={120}
        height={20}
      />
    </motion.div>
  );
});
