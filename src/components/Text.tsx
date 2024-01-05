import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  underline?: boolean;
}

const Text = ({ children, underline }: Props) => {
  return (
    <p
      className={cn(
        [
          'text-lg lg:text-xl',
          'text-dark-gray dark:text-light-gray',
          'transition-colors',
          'hover:dark:text-slate-400',
        ],
        {
          underline,
        },
      )}
    >
      {children}
    </p>
  );
};

export default Text;
