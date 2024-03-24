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
  Work,
  Team,
  BTS,
} from "@/features/layout";
import { Marquee } from "@/features/ui";
import useWindowSize from "@/hooks/useWindowSize";
import styles from "@/styles/Home.module.css";

export default function DesignPage() {
  const page = "design";
  const color = "--ez-orange";
  const [windowWidth] = useWindowSize();
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
      <Work content={landingPageMockData} page={page} />
      <Accordion content={services.design} color={color} />
      <BTS content={btsMockData} page={page} />
      <Brands content={brandsMockData.design} columns={4} />
      <Process content={ourProcess.design} color={color} />
      <Team description={teamDescription.design} content={teamMockData} />
      <Accordion content={faqs.design} color={color} />
    </>
  );
}
