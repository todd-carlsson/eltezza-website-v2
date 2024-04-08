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
  teamDescription,
  teamMockData,
} from "@/constants";
import {
  Hero,
  CreativeHero,
  Navbar,
  Accordion,
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

export default function CreativePage() {
  const page = "creative";
  const color = "--adobe-purple";

  const [showModal, setShowModal] = useState(false);
  const [windowWidth] = useWindowSize();

  return (
    <>
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
      <Accordion content={services.creative} color={color} variant="services" />
      <BTS content={btsData.creative} page={page} />
      <Brands content={brandsMockData.creative} columns={3} />
      <Process content={ourProcess.creative} color={color} />
      <Team description={teamDescription.creative} content={teamMockData} />
      <Reviews />
      <Accordion content={faqs.creative} color={color} variant="faq" />
      <Contact text="create" onOpen={() => setShowModal(true)} />
      <Portal>
        <FormModal
          onClose={() => setShowModal(false)}
          showModal={showModal}
          color={color}
        />
      </Portal>
    </>
  );
}
