import styles from "../work.module.scss";
import { CreativeWorkData, VideoControlsProps } from "@/types";
import { memo } from "react";
import { BaseCreativeVideo } from "./baseCreativeVideo";
import classNames from "classnames";

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
      <BaseCreativeVideo {...props} />
    </div>
  );
});
