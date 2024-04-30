import Image from "next/image";
import styles from "./form.module.scss";
import { contactFormText } from "@/constants";
import { Button, ButtonVariant } from "@/features/ui";
import { motion } from "framer-motion";

interface SubmitScreenProps {
  onClose: () => void;
  resetForm: () => void;
}

export default function SubmitScreen({
  onClose,
  resetForm,
}: SubmitScreenProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
        },
      }}
      className={styles.submitScreenContainer}
      role="dialog"
      aria-labelledby="dialog1Title"
      aria-describedby="dialog1Desc"
    >
      <Image
        src="/images/coffee_doodle.svg"
        alt="Coffee Doodle Image"
        width={321}
        height={228}
      />
      <div className={styles.submitScreenText}>
        <h1 className="textGradient" id="dialog1Title">
          Thank You!
        </h1>
        <p className={styles.submittedDescription} id="dialog1Desc">
          {contactFormText.submitted}
        </p>
      </div>
      <Button
        onClick={() => {
          onClose(), resetForm();
        }}
        className={styles.submittedCloseBtn}
        variant={ButtonVariant.main}
      >
        Close
      </Button>
    </motion.div>
  );
}
