import { FunnelWorkData, VideoControlsProps } from "@/types";
import styles from "./work.module.scss";
import { BaseCreativeVideo } from "../../main";
import { VimeoPlayer } from "@/features/ui";

interface VideoItemProps extends VideoControlsProps {
  video: FunnelWorkData;
  lineColor?: "--ez-orange" | "--adobe-purple";
}

export function VideoItem(props: VideoItemProps) {
  return (
    <div className={styles.videoContainer}>
      <BaseCreativeVideo {...props}>
        <VimeoPlayer srcId={props.video.srcId} />
      </BaseCreativeVideo>
    </div>
  );
}
