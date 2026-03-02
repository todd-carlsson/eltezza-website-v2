import { highlightsData } from "@/constants";
import { HighlightData } from "@/types";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../highlights.module.scss";
import Image from "next/image";

// const sections = [
//   {
//     id: 0,
//     title: "1: Post Production",
//     description: "Color grading, sound design, and cinematic finishing.",
//     media: [distributionName + "/highlights-page/proper-crisps/Face-off+(zoomed).jpg", distributionName + "/highlights-page/proper-crisps/Habanero+Mustard+-+Ketchup+in+bg+2+(story).jpg"],
//   },
//   {
//     id: 1,
//     title: "2: Campaign Launch",
//     description: "Digital rollout across multiple platforms.",
//     media: [distributionName + "/highlights-page/proper-crisps/Habanero+Mustard+-+Ketchup+in+bg+2+(story).jpg", distributionName + "/highlights-page/proper-crisps/Habanero+Mustard+-+Ketchup+in+bg+2+(story).jpg"],
//   },
//   {
//     id: 2,
//     title: "3: Brand Identity",
//     description: "Visual language, typography, and motion system.",
//     media: [distributionName + "/highlights-page/proper-crisps/Habanero+Mustard+-+Ketchup+in+bg+2+(story).jpg"],
//   },
// ];

function addDash(str: string) {
  return str.split(" ").join("-").toLowerCase();
}

interface HighlightPageProps {
  data: HighlightData;
}

export default function ProjectPage({ data }: HighlightPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { threshold: 0.6 },
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  console.log("Data for project:", data);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {/* LEFT SIDE */}
        <div className={styles.left}>
          {data.project.map((section, index) => (
            <div
              key={section.name}
              data-index={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className={styles.section}
            >
              <div className={styles.mediaStack}>
                {data.project[index].images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    className={styles.mediaItem}
                    width={800}
                    height={600}
                    alt="Highlight media"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (Sticky) */}
        <div className={styles.rightContainer}>
          <div className={styles.right}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={styles.textContainer}
              >
                <h2 className={styles.title}>
                  {data.project[activeIndex].name}
                </h2>
                <p className={styles.description}>
                  {data.project[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// Static paths for all project URLs
export async function getStaticPaths() {
  const paths = highlightsData.map((item) => ({
    params: { id: addDash(item.name) },
  }));

  return { paths, fallback: false }; // fallback: false means 404 for unknown paths
}

// Static props per project
export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = highlightsData.find((item) => addDash(item.name) === params.id);
  let previousIndex =
    highlightsData.findIndex((item) => addDash(item.name) === params.id) - 1;
  let nextIndex =
    highlightsData.findIndex((item) => addDash(item.name) === params.id) + 1;

  if (!data) {
    return { notFound: true }; // Renders Next.js's 404 page
  }

  if (previousIndex < -1) previousIndex = 0;
  if (nextIndex === 0) nextIndex = highlightsData.length - 1;
  if (previousIndex === -1) previousIndex = highlightsData.length - 1;
  if (nextIndex === highlightsData.length) nextIndex = 0;

  const previous = highlightsData[previousIndex];
  const next = highlightsData[nextIndex];

  return { props: { data, previous, next } };
}
