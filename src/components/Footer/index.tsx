import styles from './index.module.scss';

/** 页脚备案信息 */
export default function Footer() {
  const recordcode = '33010xxxxxxxxx';
  return (
    <div className={styles['footer']}>
      <a
        href={`https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${recordcode}&token=da019b73-d30c-40f3-a520-01cc28d36e55`}
      >
        浙公网安备 {recordcode}号
      </a>
      <a href='https://beian.miit.gov.cn/'>浙ICP备2023xxxxxx号</a>
      <p>Copyright ©2023 卷卷 Yorik</p>
    </div>
  );
}
