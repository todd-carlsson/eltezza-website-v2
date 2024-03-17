import Link from "next/link"
import styles from "./header.module.scss"

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
                    backgroundColor: `var(${color})`
                }}
            >
                {page}
                <div className={styles.ellipse} />
            </div>
        </Link>
    )
}

export default Switch