import {
  brandsMockData,
  btsData,
  creativeHeroData,
  creativeWorkData,
  faqs,
  headerDescription,
  ourProcess,
  pageTags,
  services,
  teamData,
  teamDescription,
  testimonialsData,
} from "@/constants";
import {
  Hero,
  CreativeHero,
  Navbar,
  Services,
  Faq,
  Process,
  CreativeWork,
  Team,
  Brands,
  BTS,
  Contact,
  Portal,
  FormModal,
  Reviews,
} from "@/features/layout";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";

export default function CreativePage() {
  const page = "creative";
  const color = "--adobe-purple";

  const [showModal, setShowModal] = useState(false);
  const [windowWidth] = useWindowSize();

  return (
    <>
      <Head>
        <title>Eltezza | Creative</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon-purple/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-purple/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-purple/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon-purple/site.webmanifest"></link>
        <meta property="og:title" content="Eltezza | Creative" key="title" />
        <meta
          name="description"
          content="We move past generic concepts and incorporate unique conceptual elements to create inimitable identities. In other words, we make your brand worth looking at."
          key="description"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eltezza.com/" />
        <meta property="og:title" content="Eltezza | Creative" />
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
        <meta property="twitter:url" content="https://eltezza.com/" />
        <meta property="twitter:title" content="Eltezza | Creative" />
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
          description={headerDescription.creative}
          tags={pageTags.creative}
        />
        {windowWidth > 1075 && (
          <CreativeHero
            video={creativeHeroData.video}
            images={creativeHeroData.images}
          />
        )}
      </div>
      <CreativeWork content={creativeWorkData} />
      <Services content={services.creative} color={color} />
      <BTS content={btsData.creative} page={page} />
      <Brands content={brandsMockData.creative} columns={3} />
      <Process content={ourProcess.creative} color={color} />
      <Team
        description={teamDescription.creative}
        content={teamData.creative}
        color={color}
      />
      <Reviews content={testimonialsData} />
      <Faq content={faqs.creative} color={color} />
      <Contact text="create" onOpen={() => setShowModal(true)} />
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
