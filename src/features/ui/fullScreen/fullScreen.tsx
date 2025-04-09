import { IoMdExit } from "react-icons/io";
import styles from "./fullScreen.module.scss";
import { motion } from "framer-motion";

interface FullScreenProps {
  removeFullVideo: () => void;
  children: React.ReactNode;
}

export function FullScreen({ children, removeFullVideo }: FullScreenProps) {
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
    <motion.div className={styles.fullScreenContainer}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.8,
          transition: {
            delay: 0.4,
            duration: 0.3,
            type: "tween",
          },
        }}
        exit={{
          opacity: 0,
        }}
        onClick={removeFullVideo}
        className={styles.opacLayer}
      />
      <motion.div
        variants={animateUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.fullVideoWrapper}
      >
        <div className={styles.exit} onClick={removeFullVideo}>
          <IoMdExit size={50} style={{ cursor: "pointer" }} />
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}
