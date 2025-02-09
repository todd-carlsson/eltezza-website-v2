import { FunnelTestimonialsData } from "@/types";
import styles from "./testimonials.module.scss";
import { Testimonial } from "./testimonial";

interface FunnelTestimonialsProps {
  content: Array<FunnelTestimonialsData>;
}

export function FunnelTestimonials({ content }: FunnelTestimonialsProps) {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsIntroContainer}>
        <h2 className={styles.testimonialsIntroText}>
          We partner with
          <span className={styles.purpleUnderline}> incredible</span>
        </h2>
        <h2 className={styles.testimonialsIntroText}>
          businesses doing big things.
        </h2>
      </div>

      <Testimonial content={content} />
    </section>
  );
}
