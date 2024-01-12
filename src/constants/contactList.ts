import { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export type Contact = {
  title: string;
  url: string;
  IconComponent: IconType;
};

const contactList: Array<Contact> = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lukefiji/',
    IconComponent: FaLinkedin,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/lukefiji',
    IconComponent: FaGithub,
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/luke_fiji',
    IconComponent: FaXTwitter,
  },
  {
    title: 'Email',
    url: 'mailto:luke.fiji@gmail.com',
    IconComponent: FaEnvelope,
  },
];

export default contactList;
