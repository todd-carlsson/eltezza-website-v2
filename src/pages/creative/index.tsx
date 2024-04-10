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
      <Services content={services.creative} color={color} />
      <BTS content={btsData.creative} page={page} />
      <Brands content={brandsMockData.creative} columns={3} />
      <Process content={ourProcess.creative} color={color} />
      <Team
        description={teamDescription.creative}
        content={teamData.creative}
      />
      <Reviews content={testimonialsData} />
      <Faq content={faqs.creative} color={color} />
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
