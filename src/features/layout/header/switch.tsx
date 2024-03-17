import Link from "next/link"
import styles from "./header.module.scss"
import { motion } from "framer-motion"
interface SwitchProps {
    page: "design" | "creative"
    color: "--ez-orange" | "--adobe-purple"
}

function Switch({
    page,
    color
}: SwitchProps) {
    return (
        <Link href={page === "design" ? "/creative" : "/design"}>
            <div
                className={styles.switch}
                style={{
                    backgroundColor: `var(${color})`,
                    // flexDirection: page === "creative" ? "row-reverse" : "row"
                }}
            >
                <motion.span
                    initial={{
                        x: page === "creative" ? 5 : 60
                    }}
                    animate={{
                        x: page === "creative" ? 60 : 5
                    }}
                    style={{
                        marginLeft: page === "design" ? "1rem" : 0,
                        marginRight: page === "creative" ? "1rem" : 0,
                    }}>{page}</motion.span>
                <motion.div
                    initial={{
                        x: page === "creative" ? 110 : 0
                    }}
                    animate={{
                        x: page === "creative" ? 0 : 110
                    }}
                    className={styles.ellipse} />
            </div>
        </Link>
    )
}

export default Switch