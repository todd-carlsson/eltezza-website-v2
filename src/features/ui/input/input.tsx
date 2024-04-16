import classNames from "classnames";
import styles from "./input.module.scss";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hasValue?: boolean;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      disabled = false,
      placeholder,
      hasValue,
      label = placeholder,
      ...props
    },
    ref,
  ) => {
    const inputId = React.useId();
    return (
      <>
        <input
          type={type}
          id={inputId}
          className={classNames(
            styles.input,
            error ? styles.error : "",
            className,
          )}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        {label || placeholder ? (
          <label
            htmlFor={inputId}
            className={classNames(
              styles.label,
              error ? styles.error : "",
              hasValue ? styles.focused : "",
            )}
          >
            {label}
          </label>
        ) : null}
      </>
    );
  },
);
Input.displayName = "Input";

export { Input };
