import Image from "next/image";
import styles from "./contact.module.scss";
import { Button, ButtonVariant } from "@/features/ui";

interface ContactProps {
  text: "design" | "create";
  onOpen: () => void;
}

export function Contact({ text, onOpen }: ContactProps) {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.purpleOrb} />
      <div className={styles.contactContainer}>
        <Image
          src="/images/eltezza-home-logo.png"
          alt="Eltezza"
          width={133}
          height={22}
        />
        <div>
          <h1 className={styles.contactLargeText}>
            LET&apos;S
            <span
              className={styles.specialText}
              style={{
                backgroundColor:
                  text === "create"
                    ? "var(--ez-orange)"
                    : "var(--adobe-purple)",
              }}
            >
              {" "}
              CONNECT
            </span>{" "}
            &
          </h1>
          <h1 className={styles.contactLargeText}>
            <span
              className={styles.specialText}
              style={{
                backgroundColor:
                  text === "create"
                    ? "var(--adobe-purple)"
                    : "var(--ez-orange)",
              }}
            >
              {text}
            </span>{" "}
            TOGETHER
          </h1>
        </div>
        <p className={styles.contactDescription}>
          Let&apos;s make your digital dreams a reality. Contact us today to
          start the journey.
        </p>
        <Button
          onClick={onOpen}
          variant={ButtonVariant.main}
          className={styles.contactButton}
        >
          Let&apos;s Collaborate
        </Button>
      </div>
      <div className={styles.orangeOrb} />
    </section>
  );
}
