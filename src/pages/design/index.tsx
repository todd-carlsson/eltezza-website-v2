import {
  brandsData,
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
  metaData,
} from "@/constants";
import {
  Hero,
  DesignHero,
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
import MetaData from "@/metadata";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";
import { Scroll } from "@/utils/scroll";

export default function DesignPage() {
  const page = "design";
  const color = "--ez-orange";

  const [showModal, setShowModal] = useState(false);
  const isPresent = useIsPresent();
  const router = useRouter();

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
      <MetaData data={metaData.design} imageData={btsData.design} />
      <div className={styles.heroContainer}>
        <Hero
          page={page}
          description={headerDescription.design}
          tags={pageTags.design}
        />
        <DesignHero
          leftData={designMarqueeLeftData}
          rightData={designMarqueeRightData}
        />
      </div>
      <DesignWork content={designCarouselData} />
      <Services content={services.design} color={color} />
      <BTS content={btsData.design} page={page} />
      <Brands content={brandsData.design} columns={4} />
      <Process content={ourProcess.design} color={color} />
      <Team
        description={teamDescription.design}
        content={teamData.design}
        color={color}
      />
      <Reviews content={testimonialsData} page={page} />
      <Faq content={faqs.design} color={color} />
      <Contact onOpen={onOpen} text={page} isOpen={showModal} />
      <Portal root="contact-root">
        <FormModal onClose={onClose} showModal={showModal} color={color} />
      </Portal>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
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
    </>
  );
}
