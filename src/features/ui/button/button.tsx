import { forwardRef } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
}

enum ButtonVariant {
    homeOrange = "homeOrange",
    homePurple = "homePurple",
    icon = "icon"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    type = "button",
    variant = "homeOrange",
    ...props
}, ref) => {
    return (
        <button
            data-testid="ui-button"
            className={classNames(
                styles.button,
                className, {
                [styles.homeOrange]: variant === ButtonVariant.homeOrange,
                [styles.homePurple]: variant === ButtonVariant.homePurple,
                [styles.icon]: variant === ButtonVariant.icon,
            }
            )}
            type={type}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = "Button";

export { Button, ButtonVariant }