import { Heading, List, Text } from '@/components';
import Experience from '@/components/Experience';
import HandWave from '@/components/HandWave';
import contactList from '@/constants/contactList';
import { Metadata } from 'next';

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-8 p-8 md:gap-12 md:p-12 lg:gap-16 lg:p-16">
        <div className="max-w-screen-sm">
          <Heading>
            Hey there, I&apos;m Luke! <HandWave />
          </Heading>

          <Text className="">
            As an experienced frontend software engineer, my drive in crafting
            sleek, intuitive experiences is matched only by my lifelong passion
            for learning. I eagerly{' '}
            <em className="opacity-75">(and carefully!)</em> embrace my
            industry&apos;s latest trends and tools, constantly seeking new
            knowledge to broaden my impact. In essence, I am a curious
            adventurer on a never-ending journey of professional and personal
            growth, ready to explore new horizons ~ 🌊 ⛵️
          </Text>
        </div>

        <Experience />

        <div>
          <Heading>Connect</Heading>

          <List items={contactList} />
        </div>
      </div>
    </>
  );
};

export const metadata: Metadata = {
  title: 'Luke Fiji',
  description: 'Luke Fiji - Frontend Software Engineer',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
};

export default Page;
