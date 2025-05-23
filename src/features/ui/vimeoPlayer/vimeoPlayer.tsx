import styles from "./vimeoPlayer.module.scss";
import classNames from "classnames";

interface VimeoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  srcId: number;
  title?: string;
}

export function VimeoPlayer({ srcId, title, className }: VimeoPlayerProps) {
  return (
    <div className={classNames(styles.container, className)}>
      <iframe
        src={`https://player.vimeo.com/video/${srcId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        title={title}
      ></iframe>
    </div>
  );
}
