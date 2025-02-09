import { FunnelHeader, FunnelHero } from "@/features/layout";
import styles from "@/styles/Home.module.css";
import MetaData from "@/metadata";
import { funnelTestimonials, metaData } from "@/constants";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Scroll } from "@/utils/scroll";
import { FunnelTestimonials } from "@/features/layout/ad-funnel/testimonials";

function LandingFunnel() {
  const router = useRouter();
  const isPresent = useIsPresent();

  useEffect(() => {
    Scroll(0, "auto");
  }, []);
  return (
    <>
      <MetaData data={metaData.adFunnel} />
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
        className={styles.funnelPageContainer}
      >
        <FunnelHeader />
        <section className={styles.funnelContentContainer}>
          <FunnelHero />
          <FunnelTestimonials content={funnelTestimonials} />
        </section>
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
export default LandingFunnel;
