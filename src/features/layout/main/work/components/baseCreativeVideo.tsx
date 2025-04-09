import { CreativeWorkData, FunnelWorkData, VideoControlsProps } from "@/types";
import { memo } from "react";
import { Portal } from "../../portal";
import { AnimatePresence, motion } from "framer-motion";
import { FullScreen } from "@/features/ui";
import { VideoDetails } from "./videoDetails";
import styles from "../work.module.scss";
import Video from "./video";

interface BaseCreativeVideoProps extends VideoControlsProps {
  video: CreativeWorkData | FunnelWorkData;
  lineColor?: "--ez-orange" | "--adobe-purple";
}

export const BaseCreativeVideo = memo(function BaseCreativeVideo({
  video,
  hoveredVideo,
  pauseVideo,
  playVideo,
  openFullVideo,
  removeFullVideo,
  openedVideo,
  getMap,
  lineColor,
}: BaseCreativeVideoProps) {
  return (
    <>
      {/* FULL SCREEN VIDEO */}
      <Portal root="video-root">
        <AnimatePresence>
          {openedVideo === video.src && (
            <FullScreen removeFullVideo={removeFullVideo}>
              <Video video={video} />
            </FullScreen>
          )}
        </AnimatePresence>
      </Portal>

      {/* THUMBNAIL */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredVideo !== video.src ? 1 : 0 }}
        className={styles.videoThumbail}
        src={video.thumbnail}
        alt={video.src}
        loading="lazy"
        decoding="async"
        onClick={() => openFullVideo(video.src)}
        onMouseEnter={() => playVideo(video.src)}
        onMouseLeave={() => pauseVideo(video.src)}
      />

      {/* VIDEO DETAILS TEXT */}
      <VideoDetails
        hoveredVideo={hoveredVideo === video.src ? hoveredVideo : null}
        video={video}
        lineColor={lineColor}
      />

      {/* VIDEO */}
      <video
        className={styles.creativeVideo}
        poster={video.thumbnail}
        src={video.src}
        onMouseEnter={() => playVideo(video.src)}
        onMouseLeave={() => pauseVideo(video.src)}
        ref={(node) => {
          const map = getMap();
          if (node) {
            map.set(video.src, node);
          } else {
            map.delete(video.src);
          }
        }}
        muted
        loop
        preload="metadata"
      >
        <source src={video.src} type="video/mp4" />
      </video>
    </>
  );
});
