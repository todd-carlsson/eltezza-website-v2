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
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    function onMouseOver() {
      if (variant === ButtonVariant.main && !disabled) {
        setIsHovered(true);
      }
    }
    function onMouseLeave() {
      if (variant === ButtonVariant.main && !disabled) {
        setIsHovered(false);
      }
    }
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
        disabled={disabled}
        {...props}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
        {children}
        {variant === ButtonVariant.main && !disabled && (
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            className={styles.gradientBackground}
            aria-hidden={!isHovered}
          />
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, ButtonVariant };
