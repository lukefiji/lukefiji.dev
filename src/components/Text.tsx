import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  underline?: boolean;
  className?: ClassValue;
}

const Text = ({ children, underline, className }: Props) => {
  return (
    <p
      className={cn(
        [
          'lg:text-base xl:text-lg',
          'text-slate-700 dark:text-slate-400',
          'transition-colors',
        ],
        {
          underline,
        },
        className,
      )}
    >
      {children}
    </p>
  );
};

export default Text;
