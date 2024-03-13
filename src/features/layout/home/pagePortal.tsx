import Image from "next/image";
import styles from "./home.module.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button, ButtonVariant } from "@/features/ui";

interface PagePortalProps {
    title: string
    content: Array<object>
    tags: Array<string>
    color: "--ez-orange" | "--adobe-purple"
    buttonVariant: ButtonVariant
}

export default function PagePortal({
    title,
    content,
    tags,
    color,
    buttonVariant
}: PagePortalProps) {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={styles.pagePortalContainer}
        >
            <AnimatePresence>
                {!isHovered &&
                    <motion.div
                        className={styles.pagePortalTitle}
                        initial={{ opacity: 0, display: "none" }}
                        animate={{ opacity: 1, display: "flex" }}
                        exit={{ opacity: 0 }}
                    >
                        <Image
                            src="/images/eltezza-home-logo.png"
                            alt="Eltezza"
                            width={124}
                            height={20}
                        />
                        <h1 className={styles.title}>{title}</h1>
                    </motion.div>}
            </AnimatePresence>
            {isHovered &&
                <Link href={`/${title}`}>
                    <Button variant={buttonVariant}>Enter</Button>
                </Link>
            }
        </div>
    )
}