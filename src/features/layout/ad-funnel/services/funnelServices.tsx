import { Button, ButtonVariant } from "@/features/ui";
import styles from "./services.module.scss";

export function FunnelServices() {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.servicesIntro}>
        <h2 className={styles.servicesIntroHeading}>Our bread & butter 🧈</h2>
        <Button variant={ButtonVariant.applyPurple}>Apply Now</Button>
      </div>
    </section>
  );
}
