import { CreativeWorkData } from "@/types";
import styles from "./work.module.scss";
import { memo, useRef, useState } from "react";
import CreativeVideo from "./components/creativeVideo";

interface CreativeWorkProps {
  content: Array<CreativeWorkData>;
}

export const CreativeWork = memo(function CreativeWork({
  content,
}: CreativeWorkProps) {
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
          <CreativeVideo
            key={item.id}
            video={item}
            hoveredVideo={hoveredVideo}
            pauseVideo={() => pauseVideo(item.id)}
            playVideo={() => playVideo(item.id)}
            openFullVideo={() => openFullVideo(item.id)}
            removeFullVideo={removeFullVideo}
            openedVideo={openedVideo}
            getMap={getMap}
          />
        ))}
      </div>
    </section>
  );
});
