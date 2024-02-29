import styles from './index.module.scss';
import classnames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  children?: ReactNode;
};

/** 标准描述页 */
export default function StandardDescription(props: Props) {
  const { title, children } = props;

  return (
    <div className={styles['standard-description']}>
      <h2>{title}</h2>
      <div className={classnames(styles['standard-description-contain'])}>
        {children}
      </div>
    </div>
  );
}
