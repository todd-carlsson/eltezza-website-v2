import { Button, ButtonVariant, Input } from "@/features/ui";
import styles from "./form.module.scss";
import { contactFormText } from "@/constants";

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
    </>
  );
}
