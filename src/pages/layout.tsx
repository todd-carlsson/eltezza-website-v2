import { Header, Navbar } from "@/features/layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "@/styles/Home.module.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <>
      {router.pathname === "/creative" || router.pathname === "/design" ? (
        <>
          <div id="contact-root" />
          <div id="video-root" />
          <Header
            page={router.pathname === "/design" ? "design" : "creative"}
            color={
              router.pathname === "/design" ? "--ez-orange" : "--adobe-purple"
            }
          />
          <Navbar />
        </>
      ) : null}
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className={styles.main}
          transition={{
            duration: 0.5,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
