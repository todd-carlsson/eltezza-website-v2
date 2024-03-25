import styles from "./form.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Form from "./form";

interface FormProps {
  onClose: () => void;
  showModal: boolean;
}

export function FormModal({ onClose, showModal }: FormProps) {
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
            <Form />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
