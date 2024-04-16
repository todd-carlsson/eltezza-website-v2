import { Button, ButtonVariant } from "@/features/ui";
import { IoMdExit } from "react-icons/io";
import styles from "@/styles/Home.module.css";
import MetaData from "@/metadata";
import { metaData } from "@/constants";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Custom404() {
  const isPresent = useIsPresent();
  const router = useRouter();
  return (
    <>
      <MetaData data={metaData.error} />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        }}
        className={styles.errorPage}
      >
        <h1 className="largeText">
          <span className="textGradient">404</span>
        </h1>
        <h1 className="largeText">Not Found</h1>
        <p>Let&apos;s get back to the noise</p>
        <Link href="/">
          <Button className={styles.errorButton} variant={ButtonVariant.main}>
            Go Home <IoMdExit size={24} />
          </Button>
        </Link>
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{
            originX: isPresent ? 0 : 1,
            backgroundColor:
              router.pathname === "/creative"
                ? "var(--adobe-purple)"
                : "var(--ez-orange)",
          }}
          className={styles.privacyScreen}
        />
      </motion.div>
    </>
  );
}
