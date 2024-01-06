import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return (
    <h1
      className={cn(
        'text-2xl  md:text-3xl lg:text-4xl',
        'font-bold text-dark-gray dark:text-light-gray',
        'mb-4 md:mb-6 lg:mb-8',
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
