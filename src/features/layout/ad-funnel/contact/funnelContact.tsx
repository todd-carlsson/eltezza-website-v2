import { Button, ButtonVariant } from "@/features/ui";
import styles from "./contact.module.scss";
import Link from "next/link";
import Image from "next/image";
import { LiaFacebookSquare, LiaLinkedin, LiaInstagram } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { socialLinks } from "@/constants";

interface FunnelContactProps {
  onOpen: () => void;
}

export function FunnelContact({ onOpen }: FunnelContactProps) {
  return (
    <section className={styles.contactSection}>
      <div className={styles.topSection}>
        <div className={styles.topSectionText}>
          <h2 className={styles.contactTitle}>
            Ready to take your business to
            <br /> the <strong style={{ fontWeight: 800 }}>
              next level?
            </strong>{" "}
            Let&apos;s do it.
          </h2>
          <p>
            No awkward small talk, just big ideas. Let&apos;s chat and see what
            we can build together!
          </p>
        </div>
        <Button onClick={onOpen} variant={ButtonVariant.applyOrange}>
          APPLY NOW
        </Button>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomSectionLinks}>
          <Link href="/">
            <Image
              src="/images/eltezza_gradientLogo.svg"
              alt="Eltezza"
              width={164}
              height={56}
              className={styles.logo}
            />
          </Link>
          <div className={styles.socialLinks}>
            <a href={socialLinks.twitter} target="_blank" aria-label="Twitter">
              <FaXTwitter size={30} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              aria-label="Linkedin"
            >
              <LiaLinkedin size={40} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              aria-label="Instagram"
            >
              <LiaInstagram size={40} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              aria-label="Facebook"
            >
              <LiaFacebookSquare size={40} />
            </a>
          </div>
        </div>
        <div className={styles.copyrightFooter}>
          <p>&copy; 2025 Eltezza. All Rights Reserved.</p>
          <div className={styles.pageLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
