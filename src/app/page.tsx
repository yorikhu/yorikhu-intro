import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles['home']}>
        <div className={styles['info-block']}>
          <div className={styles['avatar']}>
            <Image width={120} height={120} src='/Avatar.jpg' alt='' />
          </div>
          <h2>胡永琪</h2>
          <h3>Yorik Hu</h3>
        </div>
        <div className={styles['drop-down-tips']}>
          <svg viewBox='0 0 1024 1024' width='40' height='40'>
            <path
              d='M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z'
              fill='#515151'
              p-id='1452'
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles['home-other']}>
        <div className={styles['single-block']}>
          <h2>建设中...</h2>
        </div>
      </div>
    </>
  );
}
