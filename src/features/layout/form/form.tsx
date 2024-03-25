import { Button, ButtonVariant } from "@/features/ui";
import styles from "./form.module.scss";

interface FormProps {
  onClose: () => void;
}

export function Form({ onClose }: FormProps) {
  return (
    <div className={styles.form}>
      Form
      <Button onClick={onClose} variant={ButtonVariant.main}>
        Click me
      </Button>
    </div>
  );
}
