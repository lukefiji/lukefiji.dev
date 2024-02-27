import { Spotlight } from '@/components';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ReactNode } from 'react';
import Providers from './Providers';

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={cn('dark')}>
      <body>
        <Spotlight />

        {/* <Nav /> */}

        <Providers>
          <main className="min-h-screen p-8 md:gap-12 md:p-12 lg:gap-16 lg:p-16">
            {children}
          </main>
        </Providers>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
