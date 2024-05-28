import Image from "next/image";
import styles from "./contact.module.scss";
import { Button, ButtonVariant } from "@/features/ui";
import Link from "next/link";

interface ContactProps {
  text: "design" | "create";
  onOpen: () => void;
  isOpen: boolean;
}

export function Contact({ text, onOpen, isOpen }: ContactProps) {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.purpleOrb} />
      <div className={styles.contactContainer}>
        <Image
          src="/images/eltezza-home-logo.png"
          alt="Eltezza"
          width={133}
          height={22}
          className={styles.logo}
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
          Let&apos;s make your digital dreams a reality.
          <br className={styles.break} /> Contact us today to start the journey.
        </p>
        <Button
          onClick={onOpen}
          variant={ButtonVariant.main}
          className={styles.contactButton}
          aria-label="Open Contact Form"
          aria-haspopup="dialog"
          aria-expanded={isOpen}
        >
          Let&apos;s Collaborate
        </Button>
      </div>
      <div className={styles.orangeOrb} />
      <div className={styles.policyLinks}>
        <Link
          href="/privacy-policy"
          scroll={false}
          shallow
          className={styles.link}
        >
          Privacy Policy
        </Link>
        |
        <Link
          href="/terms-and-conditions"
          scroll={false}
          shallow
          className={styles.link}
        >
          Terms & Conditions
        </Link>
      </div>
    </section>
  );
}
