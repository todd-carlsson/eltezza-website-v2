import { TestimonialsData } from "@/types";
import Review from "./review";
import styles from "./reviews.module.scss";
import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

interface ReviewsProps {
  content: Array<TestimonialsData>;
}

const DRAG_BUFFER = 80;

export function Reviews({ content }: ReviewsProps) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (imgIndex < content.length - 2) {
        setImgIndex((prevState) => prevState + 1);
      }
    }, 3000);
  }, [imgIndex, content.length]);

  const dragX = useMotionValue(0);

  function onDragEnd() {
    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imgIndex !== content.length - 1) {
      setImgIndex((prevState) => prevState + 1);
    } else if (x >= DRAG_BUFFER && imgIndex !== 0) {
      setImgIndex((prevState) => prevState - 1);
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
          translateX: `-${imgIndex * 33}vw`,
        }}
        className={styles.reviewsContainer}
      >
        {content.map((item, i) => (
          <Review key={item.id} review={item} index={i} imgIndex={imgIndex} />
        ))}
      </motion.div>
    </section>
  );
}
