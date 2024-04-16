import classNames from "classnames";
import styles from "../work.module.scss";
import { Portal } from "../../portal";
import { AnimatePresence, motion } from "framer-motion";
import { CreativeWorkData } from "@/types";
import { VideoDetails } from "./videoDetails";
import FullScreenVideo from "./fullScreenVideo";

interface CreativeVideoProps {
  video: CreativeWorkData;
  hoveredVideo: string;
  pauseVideo: () => void;
  playVideo: () => void;
  openFullVideo: () => void;
  removeFullVideo: () => void;
  openedVideo: string;
  getMap: () => Map<string, HTMLVideoElement>;
}

export default function CreativeVideo({
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

  return (
    <div
      className={classNames(
        styles.creativeVideoContainer,
        getVideoColumnSize(video.size),
      )}
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
        onClick={openFullVideo}
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
      />
      {/* VIDEO DETAILS TEXT */}
      <VideoDetails
        hoveredVideo={hoveredVideo === video.id ? hoveredVideo : "-1"}
        video={video}
      />
      {/* VIDEO */}
      <video
        className={classNames(styles.creativeVideo)}
        poster={video.thumbnail}
        src={video.src}
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
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
        <source src={video.src} type="video/mp4" />
      </video>
    </div>
  );
}
