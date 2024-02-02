import contactList from '@/constants/contactList';
import Link from 'next/link';

const ConnectList = () => {
  return (
    <div className="flex gap-6 text-3xl">
      {contactList.map(({ title, url, IconComponent }) => (
        <Link href={url} target="_blank" title={title} key={title}>
          <IconComponent className="fill-slate-400 drop-shadow transition-colors hover:fill-slate-500" />
        </Link>
      ))}
    </div>
  );
};

export default ConnectList;
