import classNames from "classnames";
import styles from "./badge.module.scss";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "small" | "large";
  children: string;
}

export function Badge({
  children,
  className,
  size = "large",
  ...props
}: BadgeProps) {
  return (
    <div
      className={classNames(
        styles.badge,
        size === "small" ? styles.small : null,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
