'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};

export default Providers;
