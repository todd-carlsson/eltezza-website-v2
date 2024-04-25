import { TestimonialsData } from "@/types";
import styles from "./reviews.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

interface ReviewProps {
  review: TestimonialsData;
  index: number;
  page: "design" | "creative";
}

export function Review({ review, index, page }: ReviewProps) {
  const swiper = useSwiper();
  const [swiperIndex, setSwiperIndex] = useState(1);

  useEffect(() => {
    setSwiperIndex(swiper?.activeIndex ? swiper.activeIndex : 0);
  }, [swiper?.activeIndex]);
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0.5,
      }}
      animate={{
        scale: swiperIndex === index - 1 ? 1 : 0.8,
        opacity: swiperIndex === index - 1 ? 1 : 0.5,
      }}
      style={{
        scale: swiperIndex === index - 1 ? 1 : 0.8,
        opacity: swiperIndex === index - 1 ? 1 : 0.5,
      }}
      className={styles.reviewContainer}
      onClick={() => swiper.slideTo(index - 1)}
    >
      <p className={styles.reviewText}>{review.review}</p>
      <h3 className={styles.reviewName}>{review.name}</h3>
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
