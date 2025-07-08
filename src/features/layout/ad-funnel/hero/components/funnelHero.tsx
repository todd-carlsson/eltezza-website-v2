import { Button, ButtonVariant } from "@/features/ui";
import styles from "./components.module.scss";
import { calendlyButtonText } from "@/constants";
import { ScrollIcon } from "./scrollIcon";

interface HeaderProps {
  onOpen: () => void;
}

export function Header({ onOpen }: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <h1 className={styles.headerHeading}>
          We craft brands built to <span className={styles.boldWord}>grow</span>
          ,{" "}
        </h1>
        <h1 className={styles.headerHeading}>
          <span className={styles.boldWord}>sell</span>, and be{" "}
          <span className={styles.boldWord}>remembered</span>.
        </h1>
        <p className={styles.headerSubHeading}>
          Scaling brands with killer content and high-performing ads.
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          onClick={onOpen}
          variant={ButtonVariant.applyOrange}
          className={styles.applyButton}
        >
          {calendlyButtonText}
        </Button>
      </div>
      <div className={styles.arrowContainer}>
        <ScrollIcon type="exOne" />
      </div>
    </div>
  );
}
