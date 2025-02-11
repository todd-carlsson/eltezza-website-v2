import { FunnelPartnershipData } from "@/types";
import styles from "./partnership.module.scss";
import { FaCheck } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { Button, ButtonVariant } from "@/features/ui";

interface FunnelPartnershipProps {
  firstBox: Array<FunnelPartnershipData>;
  secondBox: Array<FunnelPartnershipData>;
}

export function FunnelPartnership({
  firstBox,
  secondBox,
}: FunnelPartnershipProps) {
  return (
    <section className={styles.partnershipSection}>
      <div className={styles.partnershipContainer}>
        <div className={styles.firstBox}>
          <h3 className={styles.boxHeading}>
            WE SHOULD WORK <br /> TOGETHER IF...
          </h3>
          {firstBox.map((item) => (
            <div key={item.description} className={styles.boxItemContainer}>
              <FaCheck color="#fff" size={18} />
              <p className={styles.boxItemText}>{item.description}</p>
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <Button variant={ButtonVariant.applyPurple}>Apply Now</Button>
          </div>
        </div>
        <div className={styles.secondBox}>
          <h3 className={styles.boxHeading}>
            LET&apos;S NOT WORK
            <br /> TOGETHER IF...
          </h3>
          {secondBox.map((item) => (
            <div key={item.description} className={styles.boxItemContainer}>
              <AiOutlineStop
                color="#000"
                size={34}
                style={{ transform: "rotate(90deg)" }}
              />
              <p className={styles.boxItemText}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
