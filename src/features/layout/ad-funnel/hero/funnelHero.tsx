import { Button, ButtonVariant } from "@/features/ui";
import styles from "./hero.module.scss";

interface FunnelHeroProps {
  onOpen: () => void;
}

export function FunnelHero({ onOpen }: FunnelHeroProps) {
  return (
    <section className={styles.funnelHero}>
      <div className={styles.funnelHeroText}>
        <h1 className={styles.funnelHeroHeading}>We help build brands that </h1>
        <h1 className={styles.funnelHeroHeading}>
          <span className={styles.boldWord}>captivate</span>,{" "}
          <span className={styles.boldWord}>convert</span>, and{" "}
          <span className={styles.boldWord}>scale</span>.
        </h1>
        <p className={styles.funnelHeroSubHeading}>
          Scaling brands with killer content and high-performing ads.
        </p>
      </div>
      <div className={styles.funnelButtonContainer}>
        <Button
          onClick={onOpen}
          variant={ButtonVariant.applyOrange}
          className={styles.applyButton}
        >
          Apply now
        </Button>
      </div>
    </section>
  );
}
