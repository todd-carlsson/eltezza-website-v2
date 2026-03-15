import {
  FunnelContact,
  FunnelHeader,
  Portal,
  FunnelVideoGallery,
  FunnelTestimonials,
  FunnelBrands,
  FunnelServices,
  FunnelPartnership,
  HeroParallax,
  Team,
  Faq,
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
  funnelBrandsMobile,
  calendlyLink,
  funnelHeroImages,
  teamData,
  faqs,
} from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Scroll } from "@/utils/scroll";
import * as fbq from "@/lib/fpixel";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

function LandingFunnel() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    Scroll(0, "auto");
  }, []);

  function onOpen() {
    setShowModal(true);
    fbq.event("Schedule");
  }
  function onClose() {
    setShowModal(false);
  }

  const featurableId = "5bf86e2f-084c-4cf1-8cee-6cbae0ba1937";

  return (
    <>
      <MetaData data={metaData.home} />
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
          <FunnelServices content={funnelServices} onOpen={onOpen} />
          <FunnelTestimonials content={funnelTestimonials} />
          <FunnelBrands
            content={funnelBrands}
            mobileContent={funnelBrandsMobile}
          />
          <FunnelPartnership
            onOpen={onOpen}
            firstBox={funnelPartnership.firstBox}
            secondBox={funnelPartnership.secondBox}
          />
          <div className={styles.basicTeamTextContainer}>
            <h1 className={styles.basicTeamHeading}>Meet the team</h1>
          </div>
          <Team content={teamData.home} color="--ez-orange" />
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
        <Faq content={faqs.home} color="--adobe-purple" />
        <ReactGoogleReviews
          layout="carousel"
          featurableId={featurableId}
          theme="dark"
          carouselStyle={{
            width: "100%",
            margin: "100px 0px",
            maxWidth: "none",
          }}
          reviewCardDarkStyle={{
            background: "#000",
          }}
          carouselBtnDarkStyle={{
            color: "#fff",
            background: "#000",
          }}
        />
        <FunnelContact onOpen={onOpen} />
      </motion.div>
    </>
  );
}
export default LandingFunnel;
