import { FunnelWorkData, VideoControlsProps } from "@/types";
import { HoverPlayVideo, VimeoPlayer } from "@/features/ui";
import styles from "./work.module.scss";

interface VideoItemProps extends VideoControlsProps {
  video: FunnelWorkData;
  lineColor?: "--ez-orange" | "--adobe-purple";
}

export function VideoItem(props: VideoItemProps) {
  return (
    <div className={styles.videoContainer}>
      <HoverPlayVideo {...props}>
        <VimeoPlayer srcId={props.video.srcId} />
      </HoverPlayVideo>
    </div>
  );
}
