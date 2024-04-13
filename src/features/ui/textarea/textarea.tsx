import classNames from "classnames";
import styles from "./textarea.module.scss";
import * as React from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, disabled = false, ...props }, ref) => {
    return (
      <textarea
        className={classNames(
          styles.textarea,
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
TextArea.displayName = "TextArea";

export { TextArea };
