import { TeamData } from "@/types";
import Image from "next/image";
import styles from "./team.module.scss";

interface TeamMemberProps {
  member: TeamData;
  index: number;
}

export default function TeamMember({ member, index }: TeamMemberProps) {
  return (
    <div className={styles.memberContainer}>
      <Image
        key={member.id}
        className={styles.teamImg}
        src={member.src}
        alt={member.name}
        width={250}
        height={420}
      />
      <p className={styles.memberName}>{member.name}</p>
      <div className={styles.lineThrough} />
      <div className={styles.positionContainer}>
        <p>{member.position}</p>
        <p>0{index + 1}</p>
      </div>
    </div>
  );
}
