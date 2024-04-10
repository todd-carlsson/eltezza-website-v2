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
  const [data, setData] = useState(content);
  // console.log("FIRST... ",[...data, ...data.slice(0, 1)].slice(-data.length -1))
  // console.log("SECOND... ",[...data.slice(-1), ...data].slice(0, content.length - 1))

  const dragX = useMotionValue(0);
  // const scale = useTransform(dragX, [-DRAG_BUFFER, 0, DRAG_BUFFER], [1, 0.8, 1])

  function onDragEnd() {
    const x = dragX.get();
    // if user has dragged to the right
    if (x <= -DRAG_BUFFER && imgIndex !== data.length - 1) {
      const first = data.slice(1, 2);
      console.log(first);
      const rest = data.slice(0, -1);
      const newData = [...rest, ...first];
      setData(newData);
      console.log(data);
      setImgIndex((prevState) => prevState + 1);
    }
    // if user has dragged to the left
    else if (x >= DRAG_BUFFER) {
      const last = data.slice(-1);
      const rest = data.slice(0, -1);
      const newData = [...last, ...rest];
      setData(newData);
      console.log(data);
      if (imgIndex >= 1) {
        setImgIndex((prevState) => prevState - 1);
      }
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
          transition: {
            duration: 0.35,
            type: "tween",
          },
        }}
        className={styles.reviewsContainer}
      >
        {data.map((item, i) => (
          <Review key={uuid()} review={item} index={i} imgIndex={imgIndex} />
        ))}
      </motion.div>
    </section>
  );
}
