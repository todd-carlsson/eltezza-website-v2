import { CreativeWorkData, FunnelWorkData, VideoControlsProps } from "@/types";
import { memo } from "react";
import { Portal } from "@/features/layout";
import { AnimatePresence, motion } from "framer-motion";
import { FullScreen } from "@/features/ui";
import { VideoDetails } from "./videoDetails";
import styles from "./video.module.scss";

interface HoverPlayVideoProps extends VideoControlsProps {
  video: CreativeWorkData | FunnelWorkData;
  lineColor?: "--ez-orange" | "--adobe-purple";
  children: React.ReactNode;
}

export const HoverPlayVideo = memo(function HoverPlayVideo({
  video,
  hoveredVideo,
  pauseVideo,
  playVideo,
  openFullVideo,
  removeFullVideo,
  openedVideo,
  getMap,
  lineColor,
  children,
}: HoverPlayVideoProps) {
  return (
    <>
      {/* FULL SCREEN VIDEO */}
      <Portal root="video-root">
        <AnimatePresence>
          {openedVideo === video.src && (
            <FullScreen removeFullVideo={removeFullVideo}>
              {/* Add video component as children to this component */}
              {children}
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
      {openedVideo !== video.src && (
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
      )}
    </>
  );
});
