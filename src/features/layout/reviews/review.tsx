import { TestimonialsData } from "@/types";
import styles from "./reviews.module.scss";
import Image from "next/image";

interface ReviewProps {
  review: TestimonialsData;
}

export default function Review({ review }: ReviewProps) {
  return (
    <div className={styles.reviewContainer}>
      <p className={styles.reviewText}>{review.review}</p>
      <h3 className={styles.reviewName}>{review.name}</h3>
      <p className={styles.reviewRole}>{review.role}</p>
      <Image src="/images/stars.svg" alt="5 stars" width={120} height={20} />
    </div>
  );
}
