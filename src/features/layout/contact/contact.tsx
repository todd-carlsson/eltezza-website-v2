import styles from "./contact.module.scss";

export function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.purpleOrb} />
      <div className={styles.contactContainer}>
        <h1 className="largeText">LET&apos;S CONNECT &</h1>
        <h1 className="largeText">DESIGN TOGETHER</h1>
      </div>
      <div className={styles.orangeOrb} />
    </section>
  );
}
