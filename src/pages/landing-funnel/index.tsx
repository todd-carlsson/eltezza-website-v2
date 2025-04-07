import {
  FunnelContact,
  FunnelHeader,
  // FunnelHero,
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
import { HeroParallax } from "@/features/layout/ad-funnel/hero/heroParallax";

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

  const products = [
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://d5st4psppqx3d.cloudfront.net/Ad_Funnel/Work_Section/Promotional/RemarkableCream/Lifestyle+Image+2+-+Bottle+Grab.jpg",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://d5st4psppqx3d.cloudfront.net/Ad_Funnel/Work_Section/Promotional/FernglenFarm/Fernglen+Farm+-+Advertising+Image.jpg",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://d5st4psppqx3d.cloudfront.net/Ad_Funnel/Work_Section/Promotional/ProperCrisps/Face-off.jpg",
    },

    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://d5st4psppqx3d.cloudfront.net/Ad_Funnel/Work_Section/Organic/Steves/Meet+staff+-+Hadley.jpg",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://d5st4psppqx3d.cloudfront.net/Ad_Funnel/Work_Section/Organic/Oztent/Chilling+by+tent.jpg",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://d5st4psppqx3d.cloudfront.net/Ad_Funnel/Work_Section/Organic/BlackPearl/Blackpearl+image.jpg",
    },

    {
      title: "Algochurn",
      link: "https://algochurn.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    },
    {
      title: "Aceternity UI",
      link: "https://ui.aceternity.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    },
    {
      title: "Tailwind Master Kit",
      link: "https://tailwindmasterkit.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    },
    {
      title: "SmartBridge",
      link: "https://smartbridgetech.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
    },
    {
      title: "Renderwork Studio",
      link: "https://renderwork.studio",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
    },

    {
      title: "Creme Digital",
      link: "https://cremedigital.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
    },
    {
      title: "Golden Bells Academy",
      link: "https://goldenbellsacademy.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
    },
    {
      title: "Invoker Labs",
      link: "https://invoker.lol",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/invoker.png",
    },
    {
      title: "E Free Invoice",
      link: "https://efreeinvoice.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
    },
  ];

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
          {/* <FunnelHero onOpen={onOpen} /> */}
          <HeroParallax products={products} />
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
              <br /> & remembered.
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
    </>
  );
}
export default LandingFunnel;
