import { TestimonialsData } from "@/types";
import Review from "./review";
import styles from "./reviews.module.scss";

interface ReviewsProps {
  content: Array<TestimonialsData>;
}

export function Reviews({ content }: ReviewsProps) {
  return (
    <section className={styles.reviews}>
      <h1 className="largeText">
        Hear it from our <span className="textGradient">partners</span>
      </h1>
      <div className={styles.reviewsContainer}>
        {content.map((item) => (
          <Review key={item.id} review={item} />
        ))}
      </div>
    </section>
  );
}
