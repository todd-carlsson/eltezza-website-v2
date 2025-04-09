import { FunnelWorkData, VideoControlsProps } from "@/types";
import { HoverPlayVideo, VimeoPlayer } from "@/features/ui";
import styles from "./work.module.scss";
import useWindowSize from "@/hooks/useWindowSize";

interface VideoItemProps extends VideoControlsProps {
  video: FunnelWorkData;
  lineColor?: "--ez-orange" | "--adobe-purple";
}

export function VideoItem(props: VideoItemProps) {
  const [windowWith] = useWindowSize();
  return (
    <div className={styles.videoContainer}>
      {windowWith >= 1000 ? (
        <HoverPlayVideo {...props}>
          <VimeoPlayer srcId={props.video.srcId} />
        </HoverPlayVideo>
      ) : (
        <VimeoPlayer srcId={props.video.srcId} className={styles.vimeoVideo} />
      )}
    </div>
  );
}
