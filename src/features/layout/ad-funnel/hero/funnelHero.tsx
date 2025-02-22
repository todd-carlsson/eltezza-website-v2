import { Button, ButtonVariant, CalendlyEmbed } from "@/features/ui";
import styles from "./hero.module.scss";
import { calendlyLink } from "@/constants";

export function FunnelHero() {
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
        <CalendlyEmbed url={calendlyLink} />
        <Button
          variant={ButtonVariant.applyOrange}
          className={styles.applyButton}
        >
          Apply now
        </Button>
      </div>
    </section>
  );
}
