import styles from "../work.module.scss";
import { CreativeWorkData, VideoControlsProps } from "@/types";
import { memo } from "react";
import classNames from "classnames";
import Video from "./video";
import { HoverPlayVideo } from "@/features/ui";

interface CreativeVideoProps extends VideoControlsProps {
  video: CreativeWorkData;
}

export const CreativeVideo = memo(function CreativeVideo(
  props: CreativeVideoProps,
) {
  function getVideoColumnSize(size: "small" | "medium" | "large") {
    if (size === "large") {
      return styles.gridColSpanSix;
    } else if (size === "medium") {
      return styles.gridColSpanThree;
    } else return styles.gridColSpanTwo;
  }

  return (
    <div
      className={classNames(
        styles.creativeVideoContainer,
        getVideoColumnSize(props.video.size),
      )}
    >
      <HoverPlayVideo {...props}>
        <Video video={props.video} />
      </HoverPlayVideo>
    </div>
  );
});
