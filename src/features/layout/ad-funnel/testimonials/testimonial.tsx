import { FunnelTestimonialsData } from "@/types";
import styles from "./testimonials.module.scss";
import { boldText } from "@/utils/boldText";
import classNames from "classnames";

interface TestimonialProps {
  item: FunnelTestimonialsData;
  index: number;
}

export function Testimonial({ item, index }: TestimonialProps) {
  return (
    <div className={styles.testimonialsContainer}>
      <div
        key={item.id}
        className={classNames(
          styles.testimonial,
          index % 2 ? styles.rowReverse : styles.row,
        )}
        // style={{ flexDirection: index % 2 ? "row-reverse" : "row" }}
      >
        <div
          className={classNames(
            styles.testimonialTextContainer,
            item.borderColor === "--ez-orange"
              ? styles.orangeBorder
              : styles.purpleBorder,
          )}
          // style={{ borderLeft: ` 8px solid var(${item.borderColor})` }}
        >
          <h4 className={styles.testimonialText}>{boldText(item.review)}</h4>
        </div>
        <video src={item.videoLink} className={styles.testimonialVideo}></video>
      </div>
    </div>
  );
}
