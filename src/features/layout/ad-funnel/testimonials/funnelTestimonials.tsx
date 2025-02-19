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
          <br /> businesses doing big things.
        </h2>
      </div>
      {content.map((item, i) => (
        <Testimonial key={item.id} item={item} index={i} />
      ))}
    </section>
  );
}
