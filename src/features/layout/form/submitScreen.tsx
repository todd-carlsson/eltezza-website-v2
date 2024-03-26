import Image from "next/image";
import styles from "./form.module.scss";
import { contactFormText } from "@/constants";
import { Button, ButtonVariant } from "@/features/ui";

interface SubmitScreenProps {
  onClose: () => void;
  resetForm: () => void;
}

export default function SubmitScreen({
  onClose,
  resetForm,
}: SubmitScreenProps) {
  return (
    <div className={styles.submitScreenContainer}>
      <Image
        src="/images/coffee_doodle.svg"
        alt="Coffee Doodle Image"
        width={321}
        height={228}
      />
      <div className={styles.submitScreenText}>
        <h1 className="textGradient">Thank You!</h1>
        <p className={styles.submittedDescription}>
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
    </div>
  );
}
