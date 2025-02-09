import { FunnelTestimonialsData } from "@/types";
import styles from "./testimonials.module.scss";

interface FunnelTestimonialsProps {
  content: Array<FunnelTestimonialsData>;
}

export function FunnelTestimonials({ content }: FunnelTestimonialsProps) {
  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.testimonialsIntroContainer}>
        <h2 className={styles.testimonialsIntroText}>
          We partner with
          <span className={styles.purpleUnderline}> incredible</span>
        </h2>
        <h2 className={styles.testimonialsIntroText}>
          businesses doing big things.
        </h2>
      </div>

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
    </div>
  );
}
