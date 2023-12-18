"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import MenuCard from "./components/MenuCard";
import { useRouter } from "next/navigation";
import classnames from "classnames";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className={styles["home"]}>
        <div className={styles["info-block"]}>
          <div className={styles["avatar"]}>
            <Image
              priority={true}
              width={120}
              height={120}
              src="/yorikhu/avatar.jpg"
              alt=""
            />
          </div>
          <div className={styles["name-wrapper"]}>
            <h2 className={styles["nick"]}>卷卷</h2>
            <h2 className={styles["real"]}>胡永琪</h2>
          </div>
          <h3>Yorik Hu</h3>
        </div>
        <div className={styles["drop-down-tips"]}>
          <svg viewBox="0 0 1024 1024" width="40" height="40">
            <path
              d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z"
              fill="#515151"
              p-id="1452"
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles["home-other"]}>
        <h2>关于我...</h2>
        <div
          className={classnames(styles["single-block"], styles["menu-block"])}
        >
          <div className={styles["wrap"]}>
            <MenuCard
              title="个人简介"
              icon="/christmas-collection/bear.svg"
              onClick={() => router.push("/person")}
            >
              <p>掀开这一页，</p>
              <p>或许，</p>
              <p>我们的故事就开始了。</p>
            </MenuCard>
            <MenuCard
              icon="/christmas-collection/socks.svg"
              title="职业生涯"
              onClick={() => router.push("/career")}
            >
              <p>每一次转身，</p>
              <p>都是新的一页，</p>
              <p>上面谱写的是一首首诗篇。</p>
            </MenuCard>
          </div>
          <div className={styles["wrap"]}>
            <MenuCard
              icon="/christmas-collection/ice-cream.svg"
              title="产品板块"
              onClick={() => router.push("/products")}
            >
              <p>冰冷的字符，</p>
              <p>跃动在纸上，</p>
              <p>恰似一曲悠扬的交响。</p>
            </MenuCard>
            <MenuCard
              icon="/christmas-collection/home.svg"
              title="社区互动"
              onClick={() => router.push("/community")}
            >
              <p>再回首，</p>
              <p>莫在此处驻足，</p>
              <p>前面还有漫漫长路。</p>
            </MenuCard>
          </div>
        </div>
      </div>
    </>
  );
}
