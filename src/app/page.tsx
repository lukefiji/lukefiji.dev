import { Metadata } from 'next';
import { Heading, List, Logo, Text } from '../components';
import contactList from '../constants/contactList';
import experienceList from '../constants/experienceList';

const Page = () => {
  return (
    <div className="flex flex-col gap-8 p-8 md:gap-12 md:p-12 lg:gap-16 lg:p-16">
      <div>
        <Logo />
      </div>

      <div>
        <Heading>Hey there, I&apos;m Luke! 👋🏻</Heading>

        <Text>
          I am a curious adventurer on a never-ending journey of discovery and
          growth.
        </Text>
      </div>

      <div>
        <Heading>Experience</Heading>

        <List items={experienceList} />
      </div>

      <div>
        <Heading>Connect</Heading>

        <List items={contactList} />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Luke Fiji',
  description: 'Luke Fiji - Frontend Software Engineer',
  viewport: 'width=device-width, initial-scale=1',
};

export default Page;
