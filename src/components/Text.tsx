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
          'text-lg lg:text-xl',
          'text-dark-gray dark:text-light-gray',
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
