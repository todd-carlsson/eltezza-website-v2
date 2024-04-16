import classNames from "classnames";
import styles from "./textarea.module.scss";
import * as React from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasValue?: boolean;
  label?: string;
  error?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
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
        <textarea
          id={inputId}
          className={classNames(
            styles.textarea,
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
TextArea.displayName = "TextArea";

export { TextArea };
