import { TestimonialsData } from "@/types";
import { Review } from "./review";
import styles from "./reviews.module.scss";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { Button, ButtonVariant } from "@/features/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import classNames from "classnames";

interface ReviewsProps {
  content: Array<TestimonialsData>;
  page: "design" | "creative";
}

export function Reviews({ content, page }: ReviewsProps) {
  /* !IMPORTANT! */
  /* THIS FUNCTION RETURNS A DIFFERENT COMPONENT BASED ON WINDOW WIDTH, 
  BE SURE TO UPDATE THE CORRECT COMPONENT */
  const [rerender, setRerender] = useState(false);
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
      setTimeout(() => {
        scrollDiv.current?.scrollIntoView({ behavior: "smooth" });
      }, 10);
    }
  }

  function clickHandler() {
    setRerender(!rerender);
  }

  if (windowWidth > 1000) {
    return (
      <section id="reviews" className={styles.reviews}>
        <h1 className={classNames(styles.reviewsTitle, "largeText")}>
          Hear it from our <span className="textGradient">partners</span>
        </h1>
        <Swiper
          slidesPerView={3}
          className={styles.slider}
          onSlideChange={clickHandler}
          slideToClickedSlide
          loop={true}
          on={{
            init: function loopBagFix(swiper) {
              /* 1. Add a copy of the slides */
              const slides = swiper.slides;
              const wrapper = swiper.wrapperEl;
              slides.forEach((slide) => {
                wrapper.append(slide.cloneNode(true));
              });

              /* 2. Remove the duplicated pagination */
              setTimeout(() => {
                const paginations = swiper.pagination.bullets;
                paginations.forEach((pagination, index) => {
                  if (index > paginations.length / 2 - 1) {
                    pagination.remove();
                  }
                });
              }, 100);
            },
          }}
        >
          {content.map((item, i) => (
            <SwiperSlide key={item.id}>
              <Review
                review={item}
                index={i}
                page={page}
                length={content.length - 1}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  } else
    return (
      <section className={styles.reviews}>
        <h1 className={classNames(styles.reviewsTitle, "largeText")}>
          Hear it from
          <br className={styles.titleBreak} />
          our <span className="textGradient">partners</span>
        </h1>
        <div className={styles.reviewsContainer}>
          {content.slice(0, paginationCount).map((item, i) => (
            <Review key={item.id} review={item} index={i} page={page} />
          ))}
        </div>
        <div className={styles.buttonContainer} ref={scrollDiv}>
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
}
