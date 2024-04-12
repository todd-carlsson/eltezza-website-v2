import {
  brandsMockData,
  headerDescription,
  pageTags,
  services,
  ourProcess,
  teamDescription,
  faqs,
  btsData,
  testimonialsData,
  designCarouselData,
  designMarqueeLeftData,
  designMarqueeRightData,
  teamData,
} from "@/constants";
import {
  Hero,
  Navbar,
  Services,
  Faq,
  Brands,
  Process,
  DesignWork,
  Team,
  BTS,
  Contact,
  Portal,
  FormModal,
  Reviews,
} from "@/features/layout";
import { Marquee } from "@/features/ui";
import useWindowSize from "@/hooks/useWindowSize";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { useState } from "react";

export default function DesignPage() {
  const page = "design";
  const color = "--ez-orange";
  const [windowWidth] = useWindowSize();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>Eltezza | Design</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon-orange/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-orange/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-orange/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon-orange/site.webmanifest"></link>
        <meta property="og:title" content="Eltezza | Design" key="title" />
        <meta
          name="description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
          key="description"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eltezza.com/design" />
        <meta property="og:title" content="Eltezza | Design" />
        <meta
          property="og:description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712889804/EZ%20Website%20-%20Misc/riseabovethenoise_ffeyu4.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://eltezza.com/design" />
        <meta property="twitter:title" content="Eltezza | Design" />
        <meta
          property="twitter:description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dsxzhd4c2/image/upload/v1712889804/EZ%20Website%20-%20Misc/riseabovethenoise_ffeyu4.jpg"
        />

        {/* Meta Tags Generated with https://metatags.io */}
      </Head>
      <style>{"body { overflow-y: auto; }"}</style>
      <Navbar />
      <div className={styles.heroContainer}>
        <Hero
          page={page}
          description={headerDescription.design}
          tags={pageTags.design}
        />
        {windowWidth > 1075 && (
          <div className={styles.designPageCarousel}>
            <Marquee
              isReversed
              orientation="vertical"
              imageOnly
              content={designMarqueeLeftData}
              width={300}
            />
            <Marquee
              orientation="vertical"
              imageOnly
              content={designMarqueeRightData}
              width={300}
            />
          </div>
        )}
      </div>
      <DesignWork content={designCarouselData} />
      <Services content={services.design} color={color} />
      <BTS content={btsData.design} page={page} />
      <Brands content={brandsMockData.design} columns={4} />
      <Process content={ourProcess.design} color={color} />
      <Team
        description={teamDescription.design}
        content={teamData.design}
        color={color}
      />
      <Reviews content={testimonialsData} />
      <Faq content={faqs.design} color={color} />
      <Contact onOpen={() => setShowModal(true)} text={page} />
      <Portal root="contact-root">
        <FormModal
          onClose={() => setShowModal(false)}
          showModal={showModal}
          color={color}
        />
      </Portal>
    </>
  );
}
