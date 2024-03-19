import styles from "./team.module.scss"

interface TeamProps {
    description: string
}

export function Team({
    description
}: TeamProps) {
    return (
        <section className={styles.teamSection}>
            <div className={styles.textContainer}>
                <h1
                    className="largeText"
                    style={{
                        textAlign: "left"
                    }}
                >THE <span className="textGradient">TEAM</span>
                </h1>
                <p className={styles.teamDescription}>
                    {description}
                </p>
            </div>
        </section>
    )
}