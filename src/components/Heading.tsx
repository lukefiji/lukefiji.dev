import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return (
    <h1
      className={cn(
        'text-2xl  lg:text-3xl xl:text-4xl',
        'font-bold text-slate-800 dark:text-slate-200',
        'mb-4 md:mb-6 lg:mb-8',
      )}
    >
      {children}
    </h1>
  );
};

export const Heading2 = ({ children }: Props) => {
  return (
    <h2
      className={cn(
        'text-lg  md:text-xl lg:text-2xl',
        'font-bold text-slate-800 dark:text-slate-200',
        'mb-4 lg:mb-6',
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
