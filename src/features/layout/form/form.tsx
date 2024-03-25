import { Button, ButtonVariant, Input } from "@/features/ui";
import styles from "./form.module.scss";
import { contactFormText } from "@/constants";
import Image from "next/image";

export default function Form() {
  return (
    <>
      <h1 className={styles.formTitle}>{contactFormText.title}</h1>
      <p className={styles.formDescription}>{contactFormText.description}</p>
      <form className={styles.form} action="">
        <Input placeholder="Full name" type="text" />
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Subject" type="text" />
        <Input placeholder="Message" type="text" />
        <Button
          className={styles.formSubmitBtn}
          variant={ButtonVariant.gradient}
        >
          Share your vision
        </Button>
      </form>
      <div>
        <p className={styles.formDescription}>{contactFormText.email}</p>
        <p className={styles.formDescription}>{contactFormText.phone}</p>
        <Image
          src="/images/facebook.svg"
          alt="Facebook"
          width={32}
          height={32}
        />
        <Image
          src="/images/instagram.svg"
          alt="Instagram"
          width={32}
          height={32}
        />
        <Image
          src="/images/linkedin.svg"
          alt="Linkedin"
          width={20}
          height={20}
        />
      </div>
    </>
  );
}
