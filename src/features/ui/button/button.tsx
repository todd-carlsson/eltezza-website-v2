"use client"

import { forwardRef, useState } from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
import { motion } from "framer-motion";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant
}

enum ButtonVariant {
    main = "main",
    homeOrange = "homeOrange",
    homePurple = "homePurple",
    icon = "icon"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    type = "button",
    variant = ButtonVariant.main,
    ...props
}, ref) => {
    const [isHovered, setIsHovered] = useState(false) 
    return (
        <button
            data-testid="ui-button"
            className={classNames(
                styles.button,
                className, {
                [styles.mainVariant]: variant === ButtonVariant.main,
                [styles.homeOrange]: variant === ButtonVariant.homeOrange,
                [styles.homePurple]: variant === ButtonVariant.homePurple,
                [styles.icon]: variant === ButtonVariant.icon,
            }
            )}
            type={type}
            ref={ref}
            {...props}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {variant === ButtonVariant.main &&
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: isHovered ? 1 : 0
                        }}
                        className={styles.gradientBackground}
                    />
            }
        </button>
    )
})

Button.displayName = "Button";

export { Button, ButtonVariant }