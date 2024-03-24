import classNames from "classnames";
import styles from "./badge.module.scss";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div className={classNames(styles.badge, className)} {...props}>
      {children}
    </div>
  );
}
