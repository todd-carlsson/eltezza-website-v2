import { FunnelTestimonialsData } from "@/types";
import styles from "./testimonials.module.scss";
import { boldText } from "@/utils/boldText";
import classNames from "classnames";
import { VimeoPlayer } from "@/features/ui";

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
      >
        <div
          className={classNames(
            styles.testimonialTextContainer,
            item.borderColor === "--ez-orange"
              ? styles.orangeBorder
              : styles.purpleBorder,
          )}
        >
          <h4 className={styles.testimonialText}>{boldText(item.review)}</h4>
          {item.author && (
            <p className={styles.testimonialAuthor}>{item.author}</p>
          )}
        </div>

        <VimeoPlayer srcId={item.srcId} className={styles.testimonialVideo} />
        {/* <video src={item.srcId} className={styles.testimonialVideo}></video> */}
      </div>
    </div>
  );
}
