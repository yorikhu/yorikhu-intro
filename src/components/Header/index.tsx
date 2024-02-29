import Link from "next/link";
import styles from "./index.module.scss";

/** 页头 */
export default function Header() {
  return (
    <div className={styles["header"]}>
      <div className={styles["left"]}>
        <div className={styles["intro-logo"]}>
          <Link href="/home">Yorik Hu</Link>
        </div>
      </div>
    </div>
  );
}
