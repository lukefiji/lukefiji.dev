import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Text = ({ children }: Props) => {
  return <p className="body-text mb-4 md:mb-6">{children}</p>;
};

export default Text;
