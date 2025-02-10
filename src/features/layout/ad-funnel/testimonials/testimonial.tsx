import { FunnelTestimonialsData } from "@/types";
import styles from "./testimonials.module.scss";

interface TestimonialProps {
  content: Array<FunnelTestimonialsData>;
}

export function Testimonial({ content }: TestimonialProps) {
  return (
    <div className={styles.testimonialsContainer}>
      {content.map((item, i) => (
        <div
          key={item.id}
          className={styles.testimonial}
          style={{ flexDirection: i % 2 ? "row-reverse" : "row" }}
        >
          <div
            className={styles.testimonialTextContainer}
            style={{ borderLeft: ` 8px solid var(${item.borderColor})` }}
          >
            <h4 className={styles.testimonialText}>{item.review}</h4>
          </div>
          <video src={item.videoLink}></video>
        </div>
      ))}
    </div>
  );
}
