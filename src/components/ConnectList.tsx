'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import contactList from '@/constants/contactList';
import Link from 'next/link';

const ConnectList = () => {
  return (
    <div className="flex gap-6 text-3xl">
      {contactList.map(({ title, url, IconComponent }) => (
        <Tooltip key={title}>
          <TooltipTrigger>
            <Link href={url} target="_bl ank" title={title} key={title}>
              <IconComponent className="fill-slate-400 drop-shadow transition-colors hover:fill-slate-500" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>{title}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
};

export default ConnectList;
