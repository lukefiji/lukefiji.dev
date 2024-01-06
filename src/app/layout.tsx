import { Logo } from '@/components';
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

        <div
          className={cn(
            '',
            'sm:top:12 sticky top-8 mb-8 ml-8 md:top-12 md:ml-12 lg:top-16 lg:mb-16 lg:ml-16',
            // 'backdrop-invert backdrop-filter ',
          )}
        >
          <Logo />
        </div>

        <main className="min-h-screen overflow-hidden p-8 md:gap-12 md:p-12 lg:gap-16 lg:p-16">
          {children}
        </main>

        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
