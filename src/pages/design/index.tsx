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
  metaData,
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
import MetaData from "@/metadata";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function DesignPage() {
  const page = "design";
  const color = "--ez-orange";
  const [windowWidth] = useWindowSize();

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <MetaData data={metaData.design} />
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
