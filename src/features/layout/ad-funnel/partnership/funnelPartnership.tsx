import styles from "./partnership.module.scss";

export function FunnelPartnership() {
  return (
    <section className={styles.partnershipSection}>
      <div className={styles.partnershipContainer}>
        <div className={styles.firstBox}>
          <h3>WE SHOULD WORK TOGETHER IF...</h3>
        </div>
        <div className={styles.secondBox}></div>
      </div>
    </section>
  );
}
