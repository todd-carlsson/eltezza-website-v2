import { CreativeWorkData } from "@/types";
import styles from "../work.module.scss";
import { motion } from "framer-motion";

interface VideoDetailsProps {
  hoveredVideo: string | null;
  video: CreativeWorkData;
}

export function VideoDetails({ hoveredVideo, video }: VideoDetailsProps) {
  return (
    <motion.div className={styles.videoDetails}>
      <div className={styles.clientContainer}>
        <motion.div
          initial={{
            y: 10,
            opacity: 0,
          }}
          animate={{
            y: hoveredVideo === video.id ? 0 : 10,
            opacity: 1,
            transition: {
              duration: 0.17,
            },
          }}
          className={styles.clientName}
        >
          {video.client}
        </motion.div>
        <motion.hr
          className={styles.lineThrough}
          initial={{
            width: 0,
          }}
          animate={{
            width: hoveredVideo === video.id ? 50 : 0,
          }}
        />
      </div>
      <motion.div
        initial={{
          y: -10,
          opacity: 0,
        }}
        animate={{
          y: hoveredVideo === video.id ? 0 : -10,
          opacity: 1,
          transition: {
            duration: 0.17,
          },
        }}
        className={styles.campaignName}
      >
        {video.campaign}
      </motion.div>
    </motion.div>
  );
}
