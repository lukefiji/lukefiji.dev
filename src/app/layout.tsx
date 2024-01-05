import Spotlight from '@/components/Spotlight';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="en" className={cn('dark')}>
      <body>
        <Spotlight />
        <main className="min-h-screen overflow-hidden">{children}</main>
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
