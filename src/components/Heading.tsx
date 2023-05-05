import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return (
    <h1 className="mb-4 text-3xl font-bold text-dark-gray dark:text-light-gray md:mb-6 md:text-4xl lg:mb-8 lg:text-5xl">
      {children}
    </h1>
  );
};

export default Heading;
