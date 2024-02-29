import Link from 'next/link';
import styles from './index.module.scss';
import { styleVariable } from '@/constants';

/** 页头 */
export default function Header() {
  return (
    <div
      className={styles['header']}
      style={{ height: `${styleVariable.headerHeight}px` }}
    >
      <div className={styles['left']}>
        <div
          className={styles['intro-logo']}
          style={{ height: `${styleVariable.headerHeight}px` }}
        >
          <Link href='/intro'>Yorik Hu</Link>
        </div>
      </div>
    </div>
  );
}
