import { Button, ButtonVariant } from "@/features/ui";
import styles from "./hero.module.scss";

export function FunnelHero() {
  return (
    <div className={styles.funnelHero}>
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
        <Button variant={ButtonVariant.applyOrange}>Apply now</Button>
      </div>
    </div>
  );
}
