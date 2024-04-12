import { CreativeWorkData } from "@/types";
import styles from "./work.module.scss";
import classNames from "classnames";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Portal } from "../portal";
import { IoMdExit } from "react-icons/io";

interface CreativeWorkProps {
  content: Array<CreativeWorkData>;
}

export function CreativeWork({ content }: CreativeWorkProps) {
  function getVideoColumnSize(size: "small" | "medium" | "large") {
    if (size === "large") {
      return styles.gridColSpanSix;
    } else if (size === "medium") {
      return styles.gridColSpanThree;
    } else return styles.gridColSpanTwo;
  }

  const itemsRef = useRef<null | Map<string, HTMLVideoElement>>(null);
  const [hoveredVideo, setHoveredVideo] = useState("-1");
  const [openedVideo, setOpenedVideo] = useState("-1");

  function openFullVideo(itemId: string) {
    setOpenedVideo(itemId);
  }
  function removeFullVideo() {
    setOpenedVideo("-1");
  }

  function playVideo(itemId: string) {
    setHoveredVideo(itemId);
    const map = getMap();
    if (map !== null) {
      const node = map.get(itemId);
      node !== undefined && node.play();
    }
  }

  function pauseVideo(itemId: string) {
    setHoveredVideo("-1");
    const map = getMap();
    if (map !== null) {
      const node = map.get(itemId);
      if (node !== undefined) {
        node.pause();
        node.currentTime = 0;
      }
    }
  }

  function getMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  const animateUp = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.3,
        type: "tween",
      },
    },
    exit: {
      y: "100%",
    },
  };

  return (
    <section id="work" className={styles.workSectionCreative}>
      <div className={styles.textContainer}>
        <h1 className="largeText">
          OUR LATEST <span className="textGradient">WORKS</span>
        </h1>
        <p className={styles.workDescription}>
          <span className={styles.purpleUnderline}>Hover </span>
          your cursor on the cards below to play the videos.
        </p>
      </div>
      <div className={styles.creativeGrid}>
        {content.map((item) => (
          <div
            className={classNames(
              styles.creativeVideoContainer,
              getVideoColumnSize(item.size),
            )}
            key={item.id}
          >
            {/* FULL SCREEN VIDEO */}
            <Portal root="video-root">
              <AnimatePresence>
                {openedVideo === item.id && (
                  <motion.div
                    onClick={removeFullVideo}
                    className={styles.fullScreenContainer}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 0.8,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      className={styles.opacLayer}
                    />
                    <motion.div
                      variants={animateUp}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={styles.fullVideoWrapper}
                    >
                      <div className={styles.exit}>
                        <IoMdExit size={50} />
                      </div>
                      <motion.video
                        variants={animateUp}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={classNames(styles.creativeVideoFull)}
                        poster={item.thumbnail}
                        src={item.src}
                        ref={(node) => {
                          const map = getMap();
                          if (node) {
                            map.set(item.id, node);
                          } else {
                            map.delete(item.id);
                          }
                        }}
                        controls
                        preload="metadata"
                      >
                        <source src={item.src} type="video/mp4" />
                      </motion.video>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Portal>
            {/* THUMBNAIL */}
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredVideo !== item.id ? 1 : 0 }}
              className={classNames(styles.videoThumbail)}
              src={item.thumbnail}
              alt={item.src}
              onClick={() => openFullVideo(item.id)}
              onMouseEnter={() => playVideo(item.id)}
              onMouseLeave={() => pauseVideo(item.id)}
            />
            <motion.div
              onMouseEnter={() => playVideo(item.id)}
              onMouseLeave={() => pauseVideo(item.id)}
              className={styles.videoDetails}
            >
              {/* VIDEO TEXT DETAILS */}
              <div className={styles.clientContainer}>
                <motion.h3
                  initial={{
                    y: 10,
                    opacity: 0,
                  }}
                  animate={{
                    y: hoveredVideo === item.id ? 0 : 10,
                    opacity: 1,
                    transition: {
                      duration: 0.17,
                    },
                  }}
                  className={styles.clientName}
                >
                  {item.client}
                </motion.h3>
                <motion.div
                  className={styles.lineThrough}
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: hoveredVideo === item.id ? 50 : 0,
                  }}
                />
              </div>
              <motion.p
                initial={{
                  y: -10,
                  opacity: 0,
                }}
                animate={{
                  y: hoveredVideo === item.id ? 0 : -10,
                  opacity: 1,
                  transition: {
                    duration: 0.17,
                  },
                }}
                className={styles.campaignName}
              >
                {item.campaign}
              </motion.p>
            </motion.div>
            {/* VIDEO */}
            <video
              className={classNames(styles.creativeVideo)}
              poster={item.thumbnail}
              src={item.src}
              onMouseEnter={() => playVideo(item.id)}
              onMouseLeave={() => pauseVideo(item.id)}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(item.id, node);
                } else {
                  map.delete(item.id);
                }
              }}
              muted
              loop
              preload="metadata"
            >
              <source src={item.src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}
