"use client";

import React, { forwardRef, useState } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
}

const enum ButtonVariant {
  main = "main",
  homeOrange = "homeOrange",
  homePurple = "homePurple",
  gradient = "gradient",
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      type = "button",
      variant = ButtonVariant.main,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <button
        data-testid="ui-button"
        className={classNames(styles.button, className, {
          [styles.mainVariant]: variant === ButtonVariant.main,
          [styles.homeOrange]: variant === ButtonVariant.homeOrange,
          [styles.homePurple]: variant === ButtonVariant.homePurple,
          [styles.gradient]: variant === ButtonVariant.gradient,
        })}
        type={type}
        ref={ref}
        {...props}
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {variant === ButtonVariant.main && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            className={styles.gradientBackground}
          />
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, ButtonVariant };
