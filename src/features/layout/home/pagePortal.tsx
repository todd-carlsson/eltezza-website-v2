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
  tags: Array<string>;
  color: "--ez-orange" | "--adobe-purple";
  buttonVariant: ButtonVariant;
  logo: string;
}

export default function PagePortal({
  title,
  content,
  tags,
  color,
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
    }
  }, [windowSize]);

  return (
    <div
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
      className={styles.pagePortalContainer}
    >
      <AnimatePresence>
        {!isHovered && (
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
        )}
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
            className={styles.homeMarquee}
            orientation="horizontal"
            content={content}
            height={250}
          />
          <div className={styles.tagListContainer}>
            {tags.map((tag, i) => (
              <>
                <p key={tag}>{tag} </p>
                {i !== tags.length - 1 && <p> | </p>}
              </>
            ))}
          </div>
          <Link href={`/${title}`}>
            <Button className={styles.homeButton} variant={buttonVariant}>
              Enter
            </Button>
          </Link>
          <p style={{ display: "none" }}>{color}</p>
        </div>
      )}
    </div>
  );
}
