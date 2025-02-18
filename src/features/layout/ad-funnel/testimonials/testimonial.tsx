import { FunnelTestimonialsData } from "@/types";
import styles from "./testimonials.module.scss";
import { boldText } from "@/utils/boldText";

interface TestimonialProps {
  item: FunnelTestimonialsData;
  index: number;
}

export function Testimonial({ item, index }: TestimonialProps) {
  return (
    <div className={styles.testimonialsContainer}>
      <div
        key={item.id}
        className={styles.testimonial}
        style={{ flexDirection: index % 2 ? "row-reverse" : "row" }}
      >
        <div
          className={styles.testimonialTextContainer}
          style={{ borderLeft: ` 8px solid var(${item.borderColor})` }}
        >
          <h4 className={styles.testimonialText}>{boldText(item.review)}</h4>
        </div>
        <video src={item.videoLink} className={styles.testimonialVideo}></video>
      </div>
    </div>
  );
}
