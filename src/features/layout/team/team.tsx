import { TeamData } from "@/types"
import styles from "./team.module.scss"
import Image from "next/image"

interface TeamProps {
    content: Array<TeamData>
    description: string
}

export function Team({
    content,
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
            <div className={styles.teamGrid}>
                {content.map((item) => (
                    <Image 
                    key={item.id} 
                    src={item.src} 
                    alt={item.name} 
                    width={250} 
                    height={420} 
                    />
                ))}
            </div>
        </section>
    )
}