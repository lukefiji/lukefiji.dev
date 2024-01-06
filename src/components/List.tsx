import { Contact } from '@/constants/contactList';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Text from './Text';

interface Props {
  items: Array<Contact>;
}

const List = ({ items }: Props) => (
  <ul className="flex flex-col items-start gap-2 md:gap-4">
    {items.map(({ title, url }) => (
      <li key={title}>
        {url ? (
          <Link href={url}>
            <Text
              underline
              className={cn(!!url && 'hover:dark:text-slate-400')}
            >
              {title}
            </Text>
          </Link>
        ) : (
          <Text>{title}</Text>
        )}
      </li>
    ))}
  </ul>
);

export default List;
