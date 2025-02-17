import {
  FunnelContact,
  FunnelHeader,
  FunnelHero,
  FunnelVideoGallery,
  Reviews,
} from "@/features/layout";
import styles from "@/styles/Home.module.css";
import MetaData from "@/metadata";
import {
  funnelBrands,
  funnelPartnership,
  funnelServices,
  funnelTestimonials,
  funnelWorkVideos,
  metaData,
  testimonialsData,
} from "@/constants";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Scroll } from "@/utils/scroll";
import {
  FunnelTestimonials,
  FunnelBrands,
  FunnelServices,
  FunnelPartnership,
} from "@/features/layout";

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
        <div className={styles.funnelContentContainer}>
          <FunnelHero />
          <FunnelTestimonials content={funnelTestimonials} />
          <FunnelBrands content={funnelBrands} />
          <FunnelServices content={funnelServices} />
          <FunnelPartnership
            firstBox={funnelPartnership.firstBox}
            secondBox={funnelPartnership.secondBox}
          />
          <FunnelVideoGallery content={funnelWorkVideos} />
        </div>
        <Reviews
          content={testimonialsData}
          page="design"
          headingTextSize="small"
        />
        <FunnelContact />
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
