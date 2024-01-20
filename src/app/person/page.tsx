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
          <p>坐标：中国 浙江</p>
          <p>爱好：敲代码、书籍、电子游戏</p>
          <p>技术：JavaScript、HTML + CSS、React、Vue、Node</p>
        </div>
      </div>
      <div className={styles["main-desc"]}>
        <h2>写在前面</h2>
        <div className={styles["desc-content"]}>
          <p>
            我是一枚 99
            年的在职前端开发，和大多数程序员一样，将写代码的时光视为一种安静而美好的享受。
            想要写些更有趣的代码，给自己的生活带来一些微小的改变，只可惜能力属实有限，学习之路漫漫，只能慢慢坚持咯！
            说实话，每天都有无数的杂事要做，定的计划如鸡蛋壳一般说碎就碎了，躺下了就真的很难站起来了。
          </p>
          <p>
            我时常也是一个很有梦想的人，我总觉得自己什么都应该会，乐器方面学过葫芦丝、古琴和吉他，其他还学了绘画、摄影等等。
            拥有如此多兴趣爱好的我看似涉猎非常广，但实际则是浅尝则止，可以说是好像什么都会但是其实什么也拿不出手，渐渐的学的也就忘记了，就好像未曾学过一般。
            我常自嘲，也许这就是人生吧，经历了无数事情后回首，发现自己不过是站在最初起点上那个最“纯粹”的少年。
            我觉得自己也是老大不小的人了，也应该好好想想自己能否对自己做的事负责任，也许我应该好好坚持的做一些事，好好认真的做一些事，哪怕只是想得到来自未来自己的肯定。
          </p>
        </div>
        <div className={styles["content-footer"]}>
          <Image
            priority={true}
            width={204}
            height={110}
            src="/yorikhu/signature.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
