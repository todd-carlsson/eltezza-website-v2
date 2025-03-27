import { useVideoControls } from "@/hooks/useVideoControls";
import styles from "./work.module.scss";
import { FunnelWorkVideos } from "@/types";
import { VideoItem } from "./videoItem";
import Image from "next/image";

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
        <div key={item.src}>
          <VideoItem
            video={item}
            hoveredVideo={hoveredVideo === item.src ? hoveredVideo : null}
            pauseVideo={pauseVideo}
            playVideo={playVideo}
            openFullVideo={openFullVideo}
            removeFullVideo={removeFullVideo}
            openedVideo={openedVideo === item.src ? openedVideo : null}
            getMap={getMap}
          />
          {item.image ? (
            <Image
              src={item.image}
              alt={item.campaign}
              width={2000}
              height={2000}
              className={styles.campaignImage}
            />
          ) : null}
        </div>
      ))}
    </section>
  );
}
