import classNames from "classnames";
import styles from "../work.module.scss";
import { Portal } from "../../portal";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { CreativeWorkData } from "@/types";
import { VideoDetails } from "./videoDetails";
import FullScreenVideo from "./fullScreenVideo";
import { memo, useEffect, useRef } from "react";
import useWindowSize from "@/hooks/useWindowSize";

interface CreativeVideoProps {
  video: CreativeWorkData;
  hoveredVideo: string | null;
  pauseVideo: (itemId: string) => void;
  playVideo: (itemId: string) => void;
  openFullVideo: (itemId: string) => void;
  removeFullVideo: () => void;
  openedVideo: string | null;
  getMap: () => Map<string, HTMLVideoElement>;
}

export const CreativeVideo = memo(function CreativeVideo({
  video,
  hoveredVideo,
  pauseVideo,
  playVideo,
  openFullVideo,
  removeFullVideo,
  openedVideo,
  getMap,
}: CreativeVideoProps) {
  function getVideoColumnSize(size: "small" | "medium" | "large") {
    if (size === "large") {
      return styles.gridColSpanSix;
    } else if (size === "medium") {
      return styles.gridColSpanThree;
    } else return styles.gridColSpanTwo;
  }

  function getVideoSrc() {
    if (windowWidth > 1000) {
      return <source src={video.src} type="video/mp4" />;
    } else if (windowWidth <= 1000 && windowWidth > 600) {
      return <source src={video.srcMedium} type="video/mp4" />;
    } else return <source src={video.srcSmall} type="video/mp4" />;
  }

  const [windowWidth] = useWindowSize();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    if (windowWidth <= 1000 && isInView) {
      playVideo(video.id);
    } else if (windowWidth <= 1000 && !isInView) {
      pauseVideo(video.id);
    }
  }, [windowWidth, playVideo, video.id, isInView, pauseVideo]);

  return (
    <div
      className={classNames(
        styles.creativeVideoContainer,
        getVideoColumnSize(video.size),
      )}
      ref={containerRef}
      key={video.id}
    >
      {/* FULL SCREEN VIDEO */}
      <Portal root="video-root">
        <AnimatePresence>
          {openedVideo === video.id && (
            <FullScreenVideo video={video} removeFullVideo={removeFullVideo} />
          )}
        </AnimatePresence>
      </Portal>
      {/* THUMBNAIL */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredVideo !== video.id ? 1 : 0 }}
        className={classNames(styles.videoThumbail)}
        src={video.thumbnail}
        alt={video.src}
        loading="lazy"
        decoding="async"
        onClick={() => openFullVideo(video.id)}
        onMouseEnter={() => (windowWidth > 1000 ? playVideo(video.id) : null)}
        onMouseLeave={() => (windowWidth > 1000 ? pauseVideo(video.id) : null)}
      />
      {/* VIDEO DETAILS TEXT */}
      <VideoDetails
        hoveredVideo={hoveredVideo === video.id ? hoveredVideo : null}
        video={video}
      />
      {/* VIDEO */}
      <video
        className={classNames(styles.creativeVideo)}
        poster={video.thumbnail}
        onMouseEnter={() => (windowWidth > 1000 ? playVideo(video.id) : null)}
        onMouseLeave={() => (windowWidth > 1000 ? pauseVideo(video.id) : null)}
        ref={(node) => {
          const map = getMap();
          if (node) {
            map.set(video.id, node);
          } else {
            map.delete(video.id);
          }
        }}
        muted
        loop
        preload="metadata"
      >
        {getVideoSrc()}
      </video>
    </div>
  );
});
