import { Contact } from "../constants/contactList";
import { Experience } from "../constants/experienceList";
import Link from "next/link";

interface Props {
  items: Array<Contact> | Array<Experience>;
}

const List = ({ items }: Props) => (
  <ul>
    {items.map(({ title, url }) => (
      <li key={title} className="mb-4 md:mb-6">
        {url ? (
          <Link href={url} className="body-text underline">
            {title}
          </Link>
        ) : (
          <p className="body-text">{title}</p>
        )}
      </li>
    ))}
  </ul>
);

export default List;
