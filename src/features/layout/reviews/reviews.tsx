import { TestimonialsData } from "@/types";
import Review from "./review";
import styles from "./reviews.module.scss";
import { motion, useMotionValue } from "framer-motion";
import uuid from "react-uuid";
import { useState } from "react";

interface ReviewsProps {
  content: Array<TestimonialsData>;
}

const DRAG_BUFFER = 80;

export function Reviews({ content }: ReviewsProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);
  // const scale = useTransform(dragX, [-DRAG_BUFFER, 0, DRAG_BUFFER], [1, 0.8, 1])

  function onDragEnd() {
    const x = dragX.get();
    // If user drags to the right
    if (x <= -DRAG_BUFFER && imgIndex !== content.length - 1) {
      if (imgIndex >= content.length - 2) {
        setImgIndex(1);
      } else setImgIndex((prevIndex) => prevIndex + 1);
    } else if (x >= DRAG_BUFFER) {
      if (imgIndex <= -1) {
        setImgIndex(content.length - 2);
      } else setImgIndex((prevIndex) => prevIndex - 1);
    }
  }

  return (
    <section className={styles.reviews}>
      <h1 className="largeText">
        Hear it from our <span className="textGradient">partners</span>
      </h1>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDragEnd={onDragEnd}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 33.333}vw`,
          transition: {
            duration: 0.35,
            type: "tween",
          },
        }}
        className={styles.reviewsContainer}
      >
        {content.map((item, i) => (
          <Review key={uuid()} review={item} index={i} imgIndex={imgIndex} />
        ))}
      </motion.div>
    </section>
  );
}
