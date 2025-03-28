import { useVideoControls } from "@/hooks/useVideoControls";
import styles from "./work.module.scss";
import { FunnelWorkData } from "@/types";
import { VideoItem } from "./videoItem";
import Image from "next/image";

interface FunnelVideoGalleryProps {
  content: FunnelWorkData[];
  heading: string;
  lineColor?: "--ez-orange" | "--adobe-purple";
}

export function FunnelVideoGallery({
  content,
  heading,
  lineColor = "--adobe-purple",
}: FunnelVideoGalleryProps) {
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
    <div className={styles.workSectionContainer}>
      <h1 className={styles.heading}>{heading}</h1>
      <div className={styles.workSection}>
        {content.map((item) => (
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
              lineColor={lineColor}
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
      </div>
    </div>
  );
}
