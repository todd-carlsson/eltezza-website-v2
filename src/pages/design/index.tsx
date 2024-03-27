import {
  brandsMockData,
  headerDescription,
  pageTags,
  services,
  ourProcess,
  landingPageMockData,
  teamDescription,
  teamMockData,
  btsMockData,
  faqs,
} from "@/constants";
import {
  Hero,
  Navbar,
  Accordion,
  Brands,
  Process,
  DesignWork,
  Team,
  BTS,
  Contact,
  Portal,
  FormModal,
} from "@/features/layout";
import { Marquee } from "@/features/ui";
import useWindowSize from "@/hooks/useWindowSize";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function DesignPage() {
  const page = "design";
  const color = "--ez-orange";
  const [windowWidth] = useWindowSize();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
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
              content={landingPageMockData}
            />
            <Marquee
              orientation="vertical"
              imageOnly
              content={landingPageMockData}
            />
          </div>
        )}
      </div>
      <DesignWork content={landingPageMockData} />
      <Accordion content={services.design} color={color} variant="services" />
      <BTS content={btsMockData} page={page} />
      <Brands content={brandsMockData.design} columns={4} />
      <Process content={ourProcess.design} color={color} />
      <Team description={teamDescription.design} content={teamMockData} />
      <Accordion content={faqs.design} color={color} variant="faq" />
      <Contact onOpen={() => setShowModal(true)} text={page} />
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
