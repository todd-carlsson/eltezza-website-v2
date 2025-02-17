import { FunnelWorkData, VideoControlsProps } from "@/types";
import styles from "./work.module.scss";
import { BaseCreativeVideo } from "../../main";

interface VideoItemProps extends VideoControlsProps {
  video: FunnelWorkData;
}

export function VideoItem(props: VideoItemProps) {
  return (
    <div className={styles.videoContainer}>
      <BaseCreativeVideo {...props} />
    </div>
  );
}
