import {
  brandsMockData,
  btsMockData,
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
} from "@/features/layout";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function CreativePage() {
  const page = "creative";
  const color = "--adobe-purple";

  const [showModal, setShowModal] = useState(false);

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
      </div>
      <CreativeWork content={creativeWorkData} />
      <Accordion content={services.creative} color={color} variant="services" />
      <BTS content={btsMockData} page={page} />
      <Brands content={brandsMockData.creative} columns={3} />
      <Process content={ourProcess.creative} color={color} />
      <Team description={teamDescription.creative} content={teamMockData} />
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
