import { Button, ButtonVariant, Input } from "@/features/ui";
import styles from "./form.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { contactFormText } from "@/constants";
import Image from "next/image";

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
            onClick={onClose}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.4,
              transition: {
                duration: 0.15,
              },
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
              transition: {
                duration: 0.6,
              },
            }}
            exit={{
              x: 600,
              transition: {
                duration: 0.35,
              },
            }}
            className={styles.modalContainer}
          >
            <Image
              onClick={onClose}
              className={styles.close}
              src="/x-close.svg"
              alt="X Close"
              width={32}
              height={33}
            />
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
                variant={ButtonVariant.gradient}
              >
                Share your vision
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
