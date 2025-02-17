import { CreativeWorkData } from "@/types";
import styles from "./work.module.scss";
import { CreativeVideo } from "./components/creativeVideo";
import classNames from "classnames";
import { useVideoControls } from "@/hooks/useVideoControls";

interface CreativeWorkProps {
  content: Array<CreativeWorkData>;
}

export function CreativeWork({ content }: CreativeWorkProps) {
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
    <section id="work" className={styles.workSectionCreative}>
      <div className={styles.textContainer}>
        <h1 className={classNames(styles.latestWorksText, "largeText")}>
          OUR LATEST <span className="textGradient">WORKS</span>
        </h1>
        <p className={styles.workDescription}>
          <span className={styles.purpleUnderline}>Hover </span>
          or tap on the cards below to play the videos.
        </p>
      </div>
      <div className={styles.creativeGrid}>
        {content.map((item) => (
          <CreativeVideo
            key={item.src}
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
      </div>
    </section>
  );
}
