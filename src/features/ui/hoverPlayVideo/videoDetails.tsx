import { CreativeWorkData, FunnelWorkData } from "@/types";
import styles from "./video.module.scss";
import { motion } from "framer-motion";

interface VideoDetailsProps {
  hoveredVideo: string | null;
  video:
    | (Omit<CreativeWorkData, "size"> & Partial<Pick<CreativeWorkData, "size">>)
    | FunnelWorkData;
  lineColor?: "--ez-orange" | "--adobe-purple";
}

export function VideoDetails({
  hoveredVideo,
  video,
  lineColor = "--adobe-purple",
}: VideoDetailsProps) {
  return (
    <motion.div className={styles.videoDetails}>
      <div className={styles.clientContainer}>
        <motion.div
          initial={{
            y: 10,
            opacity: 0,
          }}
          animate={{
            y: hoveredVideo === video.src ? 0 : 10,
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
            width: hoveredVideo === video.src ? 50 : 0,
          }}
          style={{ backgroundColor: `var(${lineColor})` }}
        />
      </div>
      {video.campaign && (
        <motion.div
          initial={{
            y: -10,
            opacity: 0,
          }}
          animate={{
            y: hoveredVideo === video.src ? 0 : -10,
            opacity: 1,
            transition: {
              duration: 0.17,
            },
          }}
          className={styles.campaignName}
        >
          {video.campaign}
        </motion.div>
      )}
    </motion.div>
  );
}
