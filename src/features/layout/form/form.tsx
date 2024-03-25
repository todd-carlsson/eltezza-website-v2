import { Button, ButtonVariant, Input } from "@/features/ui";
import styles from "./form.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormText } from "@/constants";

interface FormProps {
  onClose: () => void;
  showModal: boolean;
}

export function Form({ onClose, showModal }: FormProps) {
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.3,
            }}
            exit={{
              opacity: 0,
            }}
            className={styles.opacLayer}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{
              x: 600,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: 600,
            }}
            className={styles.modalContainer}
          >
            <h1 className={styles.formTitle}>{contactFormText.title}</h1>
            <p className={styles.formDescription}>
              {contactFormText.description}
            </p>
            <form className={styles.form} action="">
              <Input placeholder="Full name" type="text" />
              <Input placeholder="Email address" type="email" />
              <Input placeholder="Subject" type="text" />
              <Input placeholder="Message" type="text" />
              <Button
                className={styles.formSubmitBtn}
                variant={ButtonVariant.main}
              >
                Share your vision
              </Button>
            </form>
            <Button onClick={onClose} variant={ButtonVariant.main}>
              Click me
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
