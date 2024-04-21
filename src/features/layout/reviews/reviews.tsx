import { TestimonialsData } from "@/types";
import { Review } from "./review";
import styles from "./reviews.module.scss";
import { motion, useMotionValue } from "framer-motion";
import uuid from "react-uuid";
import { memo, useEffect, useRef, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { Button, ButtonVariant } from "@/features/ui";

interface ReviewsProps {
  content: Array<TestimonialsData>;
  page: "design" | "creative";
}

const DRAG_BUFFER = 80;

export const Reviews = memo(function Reviews({ content, page }: ReviewsProps) {
  const [imgIndex, setImgIndex] = useState(0);
  const [windowWidth] = useWindowSize();

  const [paginationCount, setPaginationCount] = useState(
    windowWidth > 1050 ? content.length : 3,
  );
  const [isPaginated, setIsPaginated] = useState(false);

  const scrollDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (windowWidth > 1050) {
      setPaginationCount(content.length);
    }
    if (windowWidth <= 1050 && !isPaginated) {
      setPaginationCount(3);
    }
  }, [windowWidth, isPaginated, content.length]);

  function paginateData() {
    if (paginationCount !== content.length) {
      setPaginationCount(content.length);
      setIsPaginated(true);
    } else if (paginationCount === content.length) {
      setPaginationCount(3);
      setIsPaginated(false);
      scrollDiv.current?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const dragX = useMotionValue(0);
  // const scale = useTransform(dragX, [-DRAG_BUFFER, 0, DRAG_BUFFER], [1, 0.8, 1])

  function onDragEnd() {
    const x = dragX.get();
    // If user drags to the right
    if (x <= -DRAG_BUFFER && imgIndex !== content.length - 1) {
      if (imgIndex >= content.length - 2) {
        setImgIndex(0);
      } else setImgIndex((prevIndex) => prevIndex + 1);
      console.log(imgIndex);
    }
    // If user drags to the left
    else if (x >= DRAG_BUFFER) {
      if (imgIndex <= -1) {
        setImgIndex(content.length - 2);
      } else setImgIndex((prevIndex) => prevIndex - 1);
    }
    console.log(imgIndex);
  }

  function getAnimationValue() {
    if (imgIndex <= -1) {
      return "+33.333vw";
    } else return `-${imgIndex * 33.333}vw`;
  }
  if (windowWidth > 1000) {
    return (
      <section id="reviews" className={styles.reviews} ref={scrollDiv}>
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
            translateX: getAnimationValue(),
            transition: {
              duration: 0.35,
              type: "tween",
            },
          }}
          className={styles.reviewsContainer}
        >
          {content.map((item, i) => (
            <Review
              key={uuid()}
              review={item}
              index={i}
              imgIndex={imgIndex}
              page={page}
            />
          ))}
        </motion.div>
      </section>
    );
  } else
    return (
      <section className={styles.reviews} ref={scrollDiv}>
        <h1 className="largeText">
          Hear it from our <span className="textGradient">partners</span>
        </h1>
        <div className={styles.reviewsContainer}>
          {content.slice(0, paginationCount).map((item, i) => (
            <Review
              key={item.id}
              review={item}
              index={i}
              // Pass in the imgIndex state only if windowWidth is greater than 1000px
              imgIndex={windowWidth > 1000 ? imgIndex : i - 1}
              page={page}
            />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={paginateData}
            className={styles.paginateButton}
            variant={ButtonVariant.gradient}
          >
            {paginationCount < content.length
              ? "View more testimonials"
              : "Show less"}
          </Button>
        </div>
      </section>
    );
});
