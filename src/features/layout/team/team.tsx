import { TeamData } from "@/types";
import styles from "./team.module.scss";
import TeamMember from "./teamMember";

interface TeamProps {
  content: Array<TeamData>;
  description: string;
}

export function Team({ content, description }: TeamProps) {
  return (
    <section id="about" className={styles.teamSection}>
      <div className={styles.textContainer}>
        <h1
          className="largeText"
          style={{
            textAlign: "left",
          }}
        >
          THE <span className="textGradient">TEAM</span>
        </h1>
        <p className={styles.teamDescription}>{description}</p>
      </div>
      <div className={styles.teamGrid}>
        {content.map((item, i) => (
          <TeamMember key={item.id} member={item} index={i} />
        ))}
      </div>
    </section>
  );
}
