import {
  brandsMockData,
  btsData,
  creativeHeroData,
  creativeWorkData,
  faqs,
  headerDescription,
  metaData,
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
import MetaData from "@/metadata";
import { motion, useIsPresent } from "framer-motion";
import { useRouter } from "next/router";

export default function CreativePage() {
  const page = "creative";
  const color = "--adobe-purple";

  const [showModal, setShowModal] = useState(false);
  const isPresent = useIsPresent();
  const router = useRouter();

  return (
    <>
      <MetaData data={metaData.creative} favIconColor="purple" />
      <div className={styles.heroContainer}>
        <Hero
          page={page}
          description={headerDescription.creative}
          tags={pageTags.creative}
        />
        <CreativeHero
          video={creativeHeroData.video}
          images={creativeHeroData.images}
        />
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
