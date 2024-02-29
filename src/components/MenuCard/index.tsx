import { Props } from "./type";
import Image from "next/image";
import styles from "./index.module.scss";

/** 菜单卡片 */
export default function MenuCard({ title, icon, onClick, children }: Props) {
  return (
    <div onClick={onClick} className={styles["menu-card"]}>
      {icon && (
        <Image
          className={styles["custom-icon"]}
          src={icon}
          width={50}
          height={50}
          alt=""
        />
      )}
      <h3>{title}</h3>
      <div className={styles["card-content"]}>{children}</div>
      <Image
        className={styles["arrow"]}
        src={"/common/arrow.svg"}
        width={20}
        height={20}
        alt=""
      />
    </div>
  );
}
