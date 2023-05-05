import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  underline?: boolean;
}

const Text = ({ children, underline }: Props) => {
  return (
    <p
      className={clsx(
        'text-lg text-dark-gray dark:text-light-gray lg:text-xl',
        { underline }
      )}
    >
      {children}
    </p>
  );
};

export default Text;
