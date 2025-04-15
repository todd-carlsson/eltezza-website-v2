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
          Hear it from our
          <span className={styles.purpleUnderline}> clients</span>
        </h2>
      </div>
      {content.map((item, i) => (
        <Testimonial key={item.id} item={item} index={i} />
      ))}
    </section>
  );
}
