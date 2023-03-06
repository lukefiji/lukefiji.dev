import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return <h1 className="heading-text mb-4 md:mb-6 lg:mb-8">{children}</h1>;
};

export default Heading;
