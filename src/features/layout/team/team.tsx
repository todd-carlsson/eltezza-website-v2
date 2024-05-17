import { TeamData } from "@/types";
import styles from "./team.module.scss";
import { TeamMember } from "./teamMember";
import { useEffect, useRef, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import { Button, ButtonVariant } from "@/features/ui";

interface TeamProps {
  content: Array<TeamData>;
  description: string;
  color: string;
}

export function Team({ content, description, color }: TeamProps) {
  const [windowWidth] = useWindowSize();
  const [paginationCount, setPaginationCount] = useState(
    windowWidth > 1050 ? content.length : 3,
  );
  const [isPaginated, setIsPaginated] = useState(false);

  const scrollDiv = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (windowWidth > 1050) {
      setPaginationCount(content.length);
    }
    if (windowWidth <= 1050 && !isPaginated) {
      setPaginationCount(4);
    }
    if (windowWidth <= 720 && !isPaginated) {
      setPaginationCount(2);
    }
  }, [windowWidth, isPaginated, content.length]);

  function paginateData() {
    if (paginationCount !== content.length) {
      setPaginationCount(content.length);
      setIsPaginated(true);
    } else if (paginationCount === content.length) {
      if (windowWidth <= 1050) {
        setPaginationCount(4);
        setIsPaginated(false);
        setTimeout(() => {
          scrollDiv.current?.scrollIntoView({ behavior: "smooth" });
        }, 10);
      }
      if (windowWidth <= 500) {
        setPaginationCount(3);
        setIsPaginated(false);
      }
    }
  }

  return (
    <section id="about" className={styles.teamSection}>
      <div className={styles.textContainer}>
        <h1
          className="largeText"
          style={{
            textAlign: "left",
          }}
        >
          THE <span className="textGradient">TEAM</span>
        </h1>
        <p className={styles.teamDescription}>{description}</p>
      </div>
      <div className={styles.teamGrid}>
        {content.slice(0, paginationCount).map((item, i) => (
          <TeamMember key={item.id} member={item} index={i} color={color} />
        ))}
      </div>
      <div className={styles.buttonContainer} ref={scrollDiv}>
        <Button
          onClick={paginateData}
          variant={ButtonVariant.gradient}
          className={styles.paginateButton}
        >
          {paginationCount < content.length ? "View our team" : "Show less"}
        </Button>
      </div>
    </section>
  );
}
