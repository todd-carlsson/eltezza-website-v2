import styles from "./form.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Form from "./form";
import { useState } from "react";
import SubmitScreen from "./submitScreen";

interface FormModalProps {
  onClose: () => void;
  showModal: boolean;
  color: "--ez-orange" | "--adobe-purple";
}

export function FormModal({ onClose, showModal, color }: FormModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            onClick={() => {
              onClose(), setIsSubmitted(false);
            }}
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
            aria-modal="true"
          >
            <Image
              onClick={() => {
                onClose(), setIsSubmitted(false);
              }}
              className={styles.close}
              src="/x-close.svg"
              alt="X Close"
              width={32}
              height={33}
              aria-label="Close Contact Form"
              loading="eager"
            />
            <Form
              color={color}
              isSubmitted={isSubmitted}
              submittedForm={() => setIsSubmitted(true)}
            />
            {isSubmitted && (
              <SubmitScreen
                onClose={onClose}
                resetForm={() => setIsSubmitted(false)}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
