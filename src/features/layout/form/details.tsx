import { contactFormText } from "@/constants";
import styles from "./form.module.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Details() {
  return (
    <div>
      <p className={styles.formDescription}>{contactFormText.email}</p>
      <p className={styles.formDescription}>{contactFormText.phone}</p>
      <FaFacebookSquare size={32} color="red" />
      <FaInstagramSquare size={32} color="red" />
      <FaLinkedin size={32} color="red" />
    </div>
  );
}
