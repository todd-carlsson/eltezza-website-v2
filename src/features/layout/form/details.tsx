import { contactFormText, socialLinks } from "@/constants";
import styles from "./form.module.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

interface DetailsProps {
  color: "--ez-orange" | "--adobe-purple";
}

export default function Details({ color }: DetailsProps) {
  return (
    <div className={styles.details}>
      <a
        href={`mailto:${contactFormText.email}`}
        className={styles.detailsLink}
      >
        <span className={styles.detailsDescription}>
          {contactFormText.email}
        </span>
      </a>
      <a
        href={`tel:+${contactFormText.phone.replace(/\s/g, "")}`}
        className={styles.detailsLink}
      >
        <span className={styles.detailsDescription}>
          {contactFormText.phone}
        </span>
      </a>
      <div className={styles.socialLinks}>
        <a href={socialLinks.facebook} target="_blank">
          <FaFacebookSquare
            size={28}
            color={`var(${color})`}
            aria-label="Facebook"
          />
        </a>
        <a href={socialLinks.instagram} target="_blank">
          <FaInstagramSquare
            size={28}
            color={`var(${color})`}
            aria-label="Instagram"
          />
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          <FaLinkedin size={28} color={`var(${color})`} aria-label="Linkedin" />
        </a>
      </div>
    </div>
  );
}
