"use client";

import styles from "./page.module.scss";
import Image from "next/image";

export default function Person() {
  return (
    <div className={styles["person-page"]}>
      <div className={styles["intro-part"]}>
        <div className={styles["avatar-area"]}>
          <Image
            priority={true}
            width={400}
            height={400}
            src="/yorikhu/ai-avatar.png"
            alt=""
          />
        </div>
        <div className={styles["brief-desc"]}>
          <p>花名：卷卷</p>
          <p>姓名：胡永琪</p>
          <p>英文名：Yorik Hu</p>
          <p>坐标：杭州</p>
          <p>爱好：敲代码、书籍、绘画</p>
          <p>技术：JavaScript、HTML + CSS、React、Vue、Node</p>
        </div>
      </div>
      <div className={styles["main-desc"]}>
        <h2>写在前面</h2>
        <div className={styles["desc-content"]}>
          <p>我是一枚 99 年的在职前端开发</p>
        </div>
      </div>
    </div>
  );
}
