import Link from 'next/link';
import { Contact } from '../constants/contactList';
import { Experience } from '../constants/experienceList';
import Text from './Text';

interface Props {
  items: Array<Contact> | Array<Experience>;
}

const List = ({ items }: Props) => (
  <ul className="flex flex-col gap-4 md:gap-6">
    {items.map(({ title, url }) => (
      <li key={title}>
        {url ? (
          <Link href={url}>
            <Text underline>{title}</Text>
          </Link>
        ) : (
          <Text>{title}</Text>
        )}
      </li>
    ))}
  </ul>
);

export default List;
