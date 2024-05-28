import { TeamData } from "@/types";
import Image from "next/image";
import styles from "./team.module.scss";
import { memo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMail } from "react-icons/io5";
import { contactFormText } from "@/constants";

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
    hover: {
      opacity: 0.45,
      scale: 1.1,
    },
  };
  const [isHovered, setIsHovered] = useState(false);
  function hoverHandler() {
    setIsHovered(true);
  }
  function onMouseLeave() {
    setIsHovered(false);
  }
  return (
    <div className={styles.memberContainer}>
      <motion.div
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.imageContainer}
        onMouseOver={hoverHandler}
        onMouseLeave={onMouseLeave}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.memberEmailContainer}
            >
              <a
                className={styles.memberEmail}
                href={`mailto:${member.email ? member.email : contactFormText.email}`}
              >
                <IoMail size={22} color={"var(--ez-orange)"} />
                {member.email ? member.email : contactFormText.email}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          variants={variant}
          whileHover="hover"
          animate={isHovered ? "hover" : ""}
          className={styles.imageWrapper}
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
