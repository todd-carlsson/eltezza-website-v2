import { Header } from "@/features/layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <>
      {router.pathname !== "/" && (
        <>
          <div id="contact-root" />
          <div id="video-root" />
          <Header
            page={router.pathname === "/design" ? "design" : "creative"}
            color={
              router.pathname === "/design" ? "--ez-orange" : "--adobe-purple"
            }
          />
        </>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className={styles.main}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.75,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
