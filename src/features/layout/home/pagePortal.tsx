import Image from "next/image";
import styles from "./home.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button, ButtonVariant } from "@/features/ui";
import { Marquee } from "@/features/ui";
import { CarouselData } from "@/types";
import useWindowSize from "@/hooks/useWindowSize";

interface PagePortalProps {
  title: string;
  content: Array<CarouselData>;
  duration: number;
  tags: Array<string>;
  buttonVariant: ButtonVariant;
  logo: string;
}

export default function PagePortal({
  title,
  content,
  duration,
  tags,
  buttonVariant,
  logo,
}: PagePortalProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [windowSize] = useWindowSize();

  function hoverHandler(isTrue: boolean) {
    if (windowSize <= 1200) {
      setIsHovered(true);
    } else setIsHovered(isTrue);
  }

  useEffect(() => {
    if (windowSize <= 1200) {
      setIsHovered(true);
    } else setIsHovered(false);
  }, [windowSize]);

  function PagePortalTitle() {
    return (
      <motion.div
        className={styles.pagePortalTitle}
        initial={{ opacity: 0, display: "none" }}
        animate={{ opacity: 1, display: "flex" }}
        exit={{ opacity: 0 }}
      >
        <Image
          src="/images/eltezza-home-logo.png"
          alt="Eltezza"
          width={124}
          height={20}
        />
        <h1 className={styles.title}>{title}</h1>
      </motion.div>
    );
  }

  return (
    <div
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      className={styles.pagePortalContainer}
    >
      <AnimatePresence>
        {/* If window width is > 1200 and hovered is true, don't display the title text*/}
        {windowSize > 1200
          ? isHovered
            ? null
            : PagePortalTitle()
          : // If window width is <= 1200px, always display the title text
            PagePortalTitle()}
      </AnimatePresence>
      {isHovered && (
        <div className={styles.portalContent}>
          <Image
            className={styles.portalLogo}
            src={logo}
            alt={title}
            width={200}
            height={170}
          />
          <Marquee
            badgeSize="small"
            orientation="horizontal"
            content={content}
            imgHeight={250}
            duration={duration}
          />
          <div className={styles.portalBottom}>
            <div className={styles.tagListContainer}>
              {tags.map((tag, i) => (
                <>
                  <p key={tag}>{tag} </p>
                  {i !== tags.length - 1 && <p> | </p>}
                </>
              ))}
            </div>
            <Link href={`/${title}`} scroll={false} shallow>
              <Button className={styles.homeButton} variant={buttonVariant}>
                Enter
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
