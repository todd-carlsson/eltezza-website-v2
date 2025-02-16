import { useVideoControls } from "@/hooks/useVideoControls";
import styles from "./work.module.scss";
import { FunnelWorkVideos } from "@/types";
import { VideoItem } from "./videoItem";
import uuid from "react-uuid";

interface FunnelVideoGalleryProps {
  content: FunnelWorkVideos;
}

export function FunnelVideoGallery({ content }: FunnelVideoGalleryProps) {
  const {
    hoveredVideo,
    openedVideo,
    playVideo,
    pauseVideo,
    openFullVideo,
    removeFullVideo,
    getMap,
  } = useVideoControls();
  return (
    <section className={styles.workSection}>
      {content.promotional.map((item) => (
        <VideoItem
          key={uuid()}
          video={item}
          hoveredVideo={hoveredVideo === item.src ? hoveredVideo : null}
          pauseVideo={pauseVideo}
          playVideo={playVideo}
          openFullVideo={openFullVideo}
          removeFullVideo={removeFullVideo}
          openedVideo={openedVideo === item.src ? openedVideo : null}
          getMap={getMap}
        />
      ))}
    </section>
  );
}
