import { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { styleVariable } from '@/constants';

type Props = {
  headerVisible?: boolean;
  footerVisible?: boolean;
  minWidth?: string;
  minHeight?: string;
  children?: ReactNode;
};

/** 页面 Layout 包裹 */
const PageContain: React.FC<Props> = (props) => {
  const {
    headerVisible = true,
    footerVisible = true,
    minWidth = '700px',
    minHeight = `calc(100vh - ${styleVariable.headerHeight})`,
    children,
  } = props;
  return (
    <div
      style={{
        minWidth,
        minHeight,
      }}
    >
      {headerVisible && <Header />}
      {children}
      {footerVisible && <Footer />}
    </div>
  );
};

export default PageContain;
