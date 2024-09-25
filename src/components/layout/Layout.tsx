import { ReactNode } from 'react';
import Header from '../header';
import { header } from '../../constant';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }:LayoutProps) => {
  return (
    <main className='min-h-screen bg-light-background dark:bg-dark-background text-black dark:text-white transition-colors duration-300'>
      <Header header={header}/>
      {children}
    </main>
  );
}

export default Layout;
