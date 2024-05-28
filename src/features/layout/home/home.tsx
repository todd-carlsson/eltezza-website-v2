import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import PagePortal from "./pagePortal";
import { ButtonVariant } from "@/features/ui";
import { landingPageData, logos, pageTags } from "@/constants";
import classNames from "classnames";
import uuid from "react-uuid";
import Link from "next/link";

export function HomeComponent() {
  const [isDualPage, setIsDualPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDualPage(true);
    }, 2500);
  }, []);

  return (
    <>
      <div className={classNames(styles.homeContainer)}>
        <motion.div
          initial={{ opacity: 0, y: "-100vh", x: "-100vw" }}
          animate={{ opacity: 0.4, y: !isDualPage ? 0 : "50vh", x: 0 }}
          transition={{
            type: "spring",
            stiffness: 310,
            damping: isDualPage ? 55 : 30,
            duration: 4,
            delay: 0.5,
          }}
          className={styles.orangeOrb}
        />
        <div className={styles.homeWrapper}>
          <AnimatePresence>
            {!isDualPage && (
              <motion.div
                initial={{ opacity: 0, y: "100vh" }}
                animate={{
                  opacity: isDualPage ? 0 : 1,
                  y: 0,
                }}
                transition={{
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 310,
                  damping: 30,
                  duration: 4,
                  delay: !isDualPage ? 0.5 : 0,
                }}
                exit={{ opacity: 0 }}
                className={styles.homeTitleContainer}
              >
                <h1 className={styles.homeTitle}>RISE ABOVE</h1>
                <h1 className={styles.homeTitle}>
                  THE{" "}
                  <span
                    className={classNames(styles.homeTitle, "textGradient")}
                  >
                    NOISE
                  </span>
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isDualPage && (
              <motion.div
                initial={{ display: "none", opacity: 0 }}
                animate={{ display: "flex", opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 310,
                  damping: 30,
                  duration: 4,
                  delay: 0.5,
                }}
                className={styles.dualPageContainer}
              >
                <PagePortal
                  key={uuid()}
                  title="design"
                  logo={logos.design}
                  content={landingPageData.design}
                  duration={16}
                  tags={pageTags.design}
                  buttonVariant={ButtonVariant.homeOrange}
                />
                <div className={styles.blurLeft} />
                <div className={styles.divider} />
                <div className={styles.blurRight} />
                <PagePortal
                  key={uuid()}
                  title="creative"
                  logo={logos.creative}
                  content={landingPageData.creative}
                  duration={29}
                  tags={pageTags.creative}
                  buttonVariant={ButtonVariant.homePurple}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.div
          initial={{ opacity: 0, y: "-100vh", x: "100vw" }}
          animate={{ opacity: 0.4, y: !isDualPage ? 0 : "-50vh", x: 0 }}
          transition={{
            type: "spring",
            stiffness: 310,
            damping: isDualPage ? 55 : 30,
            duration: 4,
            delay: 0.5,
          }}
          className={styles.purpleOrb}
        />
        {isDualPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            className={styles.policyLinks}
          >
            <Link href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </Link>
            |
            <Link href="/terms-and-conditions" className={styles.link}>
              Terms & Conditions
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
}
