import { TestimonialsData } from "@/types";
import styles from "./reviews.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import useWindowSize from "@/hooks/useWindowSize";

interface ReviewProps {
  review: TestimonialsData;
  index: number;
  page: "design" | "creative";
  length?: number;
}

export function Review({ review, index, page, length }: ReviewProps) {
  const swiper = useSwiper();
  const [swiperIndex, setSwiperIndex] = useState(1);
  const [windowSize] = useWindowSize();

  function getIndex() {
    if (windowSize > 1000) {
      if (swiperIndex === length) {
        return 0;
      } else return swiperIndex + 1;
    } else return index;
  }
  function slide() {
    if (index < swiperIndex) return swiper.slideNext();
    else return swiper.slidePrev();
  }

  useEffect(() => {
    setSwiperIndex(swiper?.realIndex ? swiper.realIndex : 0);
  }, [swiper?.realIndex]);
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0.5,
      }}
      animate={{
        scale: getIndex() === index ? 1 : 0.8,
        opacity: getIndex() === index ? 1 : 0.5,
      }}
      style={{
        scale: getIndex() === index ? 1 : 0.8,
        opacity: getIndex() === index ? 1 : 0.5,
      }}
      className={styles.reviewContainer}
      onClick={windowSize > 1000 ? slide : () => {}}
    >
      <p className={styles.reviewText}>{review.review}</p>
      <div className={styles.reviewName}>{review.name}</div>
      <p className={styles.reviewRole}>{review.role}</p>
      <Image
        src={`/images/stars-${page}.svg`}
        alt="5 stars"
        width={120}
        height={20}
      />
    </motion.div>
  );
}
