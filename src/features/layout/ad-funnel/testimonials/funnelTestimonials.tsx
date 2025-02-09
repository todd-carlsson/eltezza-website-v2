import styles from "./testimonials.module.scss";

export function FunnelTestimonials() {
  return (
    <div className={styles.testimonialsSection}>
      <div>
        <h2 className={styles.testimonialsIntroText}>
          We partner with
          <span className={styles.purpleUnderline}> incredible</span>
        </h2>
        <h2 className={styles.testimonialsIntroText}>
          businesses doing big things.
        </h2>
      </div>
    </div>
  );
}
