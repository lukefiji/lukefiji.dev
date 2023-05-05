import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import '../styles/globals.css';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="en" className={clsx('dark')}>
      <body>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
