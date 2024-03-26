import classNames from "classnames";
import styles from "./input.module.scss";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, disabled = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={classNames(
          styles.input,
          error ? styles.error : "",
          className,
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
