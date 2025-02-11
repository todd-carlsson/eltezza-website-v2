import { Button, ButtonVariant } from "@/features/ui";
import styles from "./services.module.scss";
import { FunnelServicesData } from "@/types";
import classNames from "classnames";

interface FunnelServicesProps {
  content: Array<FunnelServicesData>;
}

export function FunnelServices({ content }: FunnelServicesProps) {
  return (
    <section className={styles.servicesContainer}>
      <div className={styles.servicesIntro}>
        <h2 className={styles.servicesIntroHeading}>Our bread & butter 🧈</h2>
        <Button variant={ButtonVariant.applyPurple}>Apply Now</Button>
      </div>
      <div className={styles.services}>
        {content.map((item, i) => (
          <div key={item.title} className={styles.servicesText}>
            <div className={styles.servicesHeadingContainer}>
              <span
                className={classNames(
                  styles.servicesNumber,
                  i + 1 === 1 ? styles.servicesNumberAbsolute : null,
                )}
              >
                {i + 1}
              </span>
              <h3 className={styles.servicesHeading}>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
