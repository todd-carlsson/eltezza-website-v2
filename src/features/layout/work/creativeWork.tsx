import { CreativeWorkData } from "@/types";
import styles from "./work.module.scss";
import { memo, useCallback, useRef, useState } from "react";
import { CreativeVideo } from "./components/creativeVideo";
import useWindowSize from "@/hooks/useWindowSize";

interface CreativeWorkProps {
  content: Array<CreativeWorkData>;
}

export const CreativeWork = memo(function CreativeWork({
  content,
}: CreativeWorkProps) {
  const itemsRef = useRef<null | Map<string, HTMLVideoElement>>(null);
  const [hoveredVideo, setHoveredVideo] = useState<null | string>(null);
  const [openedVideo, setOpenedVideo] = useState<null | string>(null);
  const [windowWidth] = useWindowSize();

  const getMap = useCallback(() => {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }, []);

  const openFullVideo = useCallback((itemId: string) => {
    return setOpenedVideo(itemId);
  }, []);

  const removeFullVideo = useCallback(() => {
    return setOpenedVideo(null);
  }, []);

  const playVideo = useCallback(
    (itemId: string) => {
      setHoveredVideo(itemId);
      const map = getMap();
      if (map !== null) {
        const node = map.get(itemId);
        node !== undefined && node.play();
      }
    },
    [getMap],
  );

  const pauseVideo = useCallback(
    (itemId: string) => {
      setHoveredVideo(null);
      const map = getMap();
      if (map !== null) {
        const node = map.get(itemId);
        if (node !== undefined) {
          node.pause();
          node.currentTime = 0;
        }
      }
    },
    [getMap],
  );

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
            // Pass the video id if the window width is less than or equal to 1000.
            // This will ensure that the video will autoplay for tablet/mobile view
            hoveredVideo={
              windowWidth > 1000
                ? hoveredVideo === item.id
                  ? hoveredVideo
                  : null
                : item.id
            }
            pauseVideo={pauseVideo}
            playVideo={playVideo}
            openFullVideo={openFullVideo}
            removeFullVideo={removeFullVideo}
            openedVideo={openedVideo === item.id ? openedVideo : null}
            getMap={getMap}
          />
        ))}
      </div>
    </section>
  );
});
