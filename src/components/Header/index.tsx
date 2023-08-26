import styles from "./index.module.scss";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["left"]}>
        <div className={styles["intro-logo"]}>
          <span>Yorikhu</span>
        </div>
      </div>
    </div>
  );
}
