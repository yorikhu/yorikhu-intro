import { Props } from "./type";
import styles from "./index.module.scss";

export default function MenuCard({ title, children }: Props) {
  return (
    <div className={styles["menu-card"]}>
      <h3>{title}</h3>
      <div className={styles["card-content"]}>{children}</div>
    </div>
  );
}
