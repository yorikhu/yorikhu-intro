import styles from './index.module.scss';
import classnames from 'classnames';
import MenuCard from '@/components/MenuCard';
import { useRouter } from 'next/navigation';
import StandardDescription from '@/components/StandardDescription';

export default function AboutMe() {
  const router = useRouter();

  return (
    <div className={styles['about-me']}>
      <StandardDescription title='关于我...'>
        <div className={classnames(styles['about-me-contain'])}>
          <div className={styles['wrap']}>
            <MenuCard
              title='个人简介'
              icon='/christmas-collection/bear.svg'
              onClick={() => router.push('/intro/person')}
            >
              <p>掀开这一页，</p>
              <p>或许，</p>
              <p>我们的故事就开始了。</p>
            </MenuCard>
            <MenuCard
              icon='/christmas-collection/socks.svg'
              title='职业生涯'
              onClick={() => router.push('/intro/career')}
            >
              <p>每一次转身，</p>
              <p>都是新的一页，</p>
              <p>上面谱写的是一首首诗篇。</p>
            </MenuCard>
          </div>
          <div className={styles['wrap']}>
            <MenuCard
              icon='/christmas-collection/ice-cream.svg'
              title='产品板块'
              onClick={() => router.push('/intro/products')}
            >
              <p>冰冷的字符，</p>
              <p>跃动在纸上，</p>
              <p>恰似一曲悠扬的交响。</p>
            </MenuCard>
            <MenuCard
              icon='/christmas-collection/home.svg'
              title='社区互动'
              onClick={() => router.push('/community')}
            >
              <p>再回首，</p>
              <p>莫在此处驻足，</p>
              <p>前面还有漫漫长路。</p>
            </MenuCard>
          </div>
        </div>
      </StandardDescription>
    </div>
  );
}
