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
      <p className={styles.detailsDescription}>{contactFormText.email}</p>
      <p className={styles.detailsDescription}>{contactFormText.phone}</p>
      <div className={styles.socialLinks}>
        <a href={socialLinks.facebook} target="_blank">
          <FaFacebookSquare size={34} color={`var(${color})`} />
        </a>
        <a href={socialLinks.instagram} target="_blank">
          <FaInstagramSquare size={34} color={`var(${color})`} />
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          <FaLinkedin size={34} color={`var(${color})`} />
        </a>
      </div>
    </div>
  );
}
