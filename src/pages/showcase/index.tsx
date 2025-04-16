import {
  FunnelContact,
  FunnelHeader,
  Portal,
  FunnelVideoGallery,
  Reviews,
  FunnelTestimonials,
  FunnelBrands,
  FunnelServices,
  FunnelPartnership,
  HeroParallax,
} from "@/features/layout";
import { CalendlyEmbed } from "@/features/ui";
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
  funnelHeroImages,
} from "@/constants";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Scroll } from "@/utils/scroll";
import Script from "next/script";
import { hotjar } from "react-hotjar";

function LandingFunnel() {
  const router = useRouter();
  const isPresent = useIsPresent();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Scroll(0, "auto");
    hotjar.initialize({
      id: process.env.HOTJAR_ID ? parseInt(process.env.HOTJAR_ID) : 0,
      sv: 6,
    });
  }, []);

  function onOpen() {
    setShowModal(true);
    hotjar.event("button-click");
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
          <HeroParallax products={funnelHeroImages} onOpen={onOpen} />
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
          <section className={styles.funnelVideoGallerySection}>
            <h1 className={styles.funnelGalleryHeading}>
              Not just seen - saved, shared
              <br className={styles.galleryHeadingBreak} /> & remembered.
            </h1>
            <p className={styles.funnelGallerySubHeading}>Portfolio Showcase</p>
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
          </section>
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
      <Script src="https://player.vimeo.com/api/player.js"></Script>
    </>
  );
}
export default LandingFunnel;
