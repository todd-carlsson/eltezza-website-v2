import { TestimonialsData } from "@/types";
import { Review } from "./review";
import styles from "./reviews.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { Button, ButtonVariant } from "@/features/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ReviewsProps {
  content: Array<TestimonialsData>;
  page: "design" | "creative";
}

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

  function onDragEnd(swipeDirection: "prev" | "next") {
    setImgIndex((prevState) => {
      if (swipeDirection === "prev") {
        return prevState - 1;
      } else return prevState + 1;
    });
  }

  if (windowWidth > 1000) {
    return (
      <section id="reviews" className={styles.reviews} ref={scrollDiv}>
        <h1 className="largeText">
          Hear it from our <span className="textGradient">partners</span>
        </h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className={styles.reviews}
          onSlideChange={(swiper) => onDragEnd(swiper.swipeDirection)}
        >
          {content.map((item, i) => (
            <SwiperSlide
              key={item.id}
              onClick={(swiper) => swiper.currentTarget}
            >
              <Review review={item} index={i} imgIndex={imgIndex} page={page} />
            </SwiperSlide>
          ))}
        </Swiper>
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
