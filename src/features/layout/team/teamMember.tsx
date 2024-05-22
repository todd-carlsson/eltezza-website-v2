import { TeamData } from "@/types";
import Image from "next/image";
import styles from "./team.module.scss";
import { memo } from "react";
import { motion } from "framer-motion";

interface TeamMemberProps {
  member: TeamData;
  index: number;
  color: string;
}

export const TeamMember = memo(function TeamMember({
  member,
  index,
  color,
}: TeamMemberProps) {
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.325,
      },
    },
  };
  return (
    <div className={styles.memberContainer}>
      <motion.div
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image
          key={member.id}
          className={styles.teamImg}
          src={member.src}
          alt={member.name}
          width={1300}
          height={1800}
        />
      </motion.div>
      <p className={styles.memberName}>{member.name}</p>
      <div className={styles.lineThrough} />
      <div
        className={styles.positionContainer}
        style={{
          color: color.slice(0, 2) === "--" ? `var(${color})` : color,
        }}
      >
        <p>{member.position}</p>
        <p>0{index + 1}</p>
      </div>
    </div>
  );
});
