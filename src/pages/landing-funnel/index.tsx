import {
  FunnelContact,
  FunnelHeader,
  FunnelHero,
  Portal,
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
  funnelReviewsData,
  funnelBrandsMobile,
  calendlyLink,
} from "@/constants";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Scroll } from "@/utils/scroll";
import {
  FunnelTestimonials,
  FunnelBrands,
  FunnelServices,
  FunnelPartnership,
} from "@/features/layout";
import { CalendlyEmbed } from "@/features/ui";

function LandingFunnel() {
  const router = useRouter();
  const isPresent = useIsPresent();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Scroll(0, "auto");
  }, []);

  function onOpen() {
    setShowModal(true);
  }
  function onClose() {
    setShowModal(false);
  }

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
        <Portal root="calendly-root">
          <CalendlyEmbed
            url={calendlyLink}
            onClose={onClose}
            showModal={showModal}
          />
        </Portal>
        <div className={styles.funnelContentContainer}>
          <FunnelHero onOpen={onOpen} />
          <FunnelTestimonials content={funnelTestimonials} />
          <FunnelBrands
            content={funnelBrands}
            mobileContent={funnelBrandsMobile}
          />
          <FunnelServices content={funnelServices} onOpen={onOpen} />
          <FunnelPartnership
            onOpen={onOpen}
            firstBox={funnelPartnership.firstBox}
            secondBox={funnelPartnership.secondBox}
          />
          <FunnelVideoGallery
            content={funnelWorkVideos.promotional}
            heading="Promotional Videos"
          />
          <FunnelVideoGallery
            content={funnelWorkVideos.organic}
            heading="Organic Content"
            lineColor="--ez-orange"
          />
          <FunnelVideoGallery
            content={funnelWorkVideos.ugc}
            heading="UGC Content"
          />
        </div>
        <Reviews
          content={funnelReviewsData}
          page="design"
          headingTextSize="small"
        />
        <FunnelContact onOpen={onOpen} />
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
