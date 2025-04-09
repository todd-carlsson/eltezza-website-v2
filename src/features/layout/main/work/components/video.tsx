import { CreativeWorkData } from "@/types";
import styles from "../work.module.scss";
import { motion } from "framer-motion";

interface VideoProps {
  video: Omit<CreativeWorkData, "size"> &
    Partial<Pick<CreativeWorkData, "size">>;
}

function Video({ video }: VideoProps) {
  const animateUp = {
    hidden: {
      y: "100%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.4,
        type: "tween",
      },
    },
    exit: {
      y: "100%",
    },
  };
  return (
    <motion.video
      variants={animateUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.creativeVideoFull}
      poster={video.thumbnail}
      src={video.srcHighQuality}
      controls
      preload="metadata"
      playsInline
    ></motion.video>
  );
}

export default Video;
