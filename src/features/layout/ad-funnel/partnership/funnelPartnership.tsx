import { FunnelPartnershipData } from "@/types";
import styles from "./partnership.module.scss";
import { FaCheck } from "react-icons/fa";
import { AiOutlineStop } from "react-icons/ai";
import { Button, ButtonVariant } from "@/features/ui";
import { motion, useInView } from "framer-motion";
import useMeasure from "react-use-measure";
import { useRef } from "react";

interface FunnelPartnershipProps {
  firstBox: Array<FunnelPartnershipData>;
  secondBox: Array<FunnelPartnershipData>;
  onOpen: () => void;
}

export function FunnelPartnership({
  firstBox,
  secondBox,
  onOpen,
}: FunnelPartnershipProps) {
  const [firsBoxRef, { width: firstBoxWidth }] = useMeasure();
  const [secondBoxRef, { width: secondBoxWidth }] = useMeasure();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);

  const firstBoxVariant = {
    hidden: {
      x: firstBoxWidth / 2,
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  const secondBoxVariant = {
    hidden: {
      x: -secondBoxWidth / 2,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.2,
        delay: 0.5,
      },
    },
  };
  return (
    <section className={styles.partnershipSection}>
      <div className={styles.partnershipContainer} ref={containerRef}>
        <motion.div
          className={styles.firstBox}
          ref={firsBoxRef}
          variants={firstBoxVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className={styles.boxHeading}>
            WE SHOULD WORK <br /> TOGETHER IF...
          </h3>
          {firstBox.map((item) => (
            <div key={item.description} className={styles.boxItemContainer}>
              <FaCheck color="#fff" className={styles.icon} />
              <p className={styles.boxItemText}>{item.description}</p>
            </div>
          ))}
          <div className={styles.buttonContainer}>
            <Button onClick={onOpen} variant={ButtonVariant.applyPurple}>
              Book a Call
            </Button>
          </div>
        </motion.div>
        <motion.div
          className={styles.secondBox}
          variants={secondBoxVariant}
          ref={secondBoxRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className={styles.boxHeading}>
            LET&apos;S NOT WORK
            <br /> TOGETHER IF...
          </h3>
          {secondBox.map((item) => (
            <div key={item.description} className={styles.boxItemContainer}>
              <AiOutlineStop
                color="#000"
                style={{ transform: "rotate(90deg)" }}
                className={styles.iconStop}
                size={34}
              />
              <p className={styles.boxItemText}>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className={styles.buttonMobileContainer}>
        <Button
          onClick={onOpen}
          className={styles.buttonMobile}
          variant={ButtonVariant.applyWhite}
        >
          Book a Call
        </Button>
      </div>
    </section>
  );
}
