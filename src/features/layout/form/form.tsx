"use client";

import { useEffect, useRef } from "react";
import styles from "./form.module.scss";
import { createPortal } from "react-dom";

export function Form() {
  const ref = useRef<Element | null>(null);
  useEffect(() => {
    ref.current = document.getElementById("contact-root");
  }, []);

  return ref.current
    ? createPortal(
        <div className={styles.form}>Form</div>,
        document.getElementById("contact-root") as HTMLElement,
      )
    : null;
}
