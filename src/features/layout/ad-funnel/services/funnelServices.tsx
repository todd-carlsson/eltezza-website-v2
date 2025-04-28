import { Button, ButtonVariant } from "@/features/ui";
import styles from "./services.module.scss";
import { FunnelServicesData } from "@/types";
import { calendlyButtonText } from "@/constants";

interface FunnelServicesProps {
  content: Array<FunnelServicesData>;
  onOpen: () => void;
}

export function FunnelServices({ content, onOpen }: FunnelServicesProps) {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.servicesWrap}>
        <div className={styles.servicesIntro}>
          <h2 className={styles.servicesIntroHeading}>Our bread & butter 🧈</h2>
          <Button
            onClick={onOpen}
            variant={ButtonVariant.applyWhite}
            className={styles.servicesButton}
          >
            {calendlyButtonText}
          </Button>
        </div>
        <div className={styles.services}>
          {content.map((item, i) => (
            <div key={item.title} className={styles.servicesText}>
              <div className={styles.servicesHeadingContainer}>
                <span className={styles.servicesNumber}>{i + 1}</span>
                <h3 className={styles.servicesHeading}>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
          <Button
            onClick={onOpen}
            variant={ButtonVariant.applyWhite}
            className={styles.servicesButtonMobile}
          >
            {calendlyButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
