import { Heading, Heading2, List, Text } from '@/components';
import Experience from '@/components/Experience';
import HandWave from '@/components/HandWave';
import contactList from '@/constants/contactList';
import { Metadata } from 'next';

const Page = () => {
  return (
    <>
      <div className="grid max-w-screen-xl gap-8 lg:grid-cols-5 lg:grid-rows-2 lg:gap-16">
        <div className="max-w-screen-sm space-y-8 lg:col-span-2 lg:row-span-1">
          <Heading>
            Hey there, I&apos;m Luke! <HandWave />
          </Heading>

          <Text>
            As an experienced frontend software engineer, my drive in crafting
            sleek, intuitive experiences is matched only by my lifelong passion
            for learning. I eagerly{' '}
            <em className="opacity-75">(and carefully!)</em> embrace my
            industry&apos;s latest trends and tools, constantly seeking new
            knowledge to broaden my impact. In essence, I am a curious
            adventurer on a never-ending journey of professional and personal
            growth, ready to explore new horizons ~ 🌊 ⛵️
          </Text>

          <div>
            <Heading2>Connect</Heading2>

            <List items={contactList} />
          </div>
        </div>

        <Experience className="max-w-screen-sm lg:col-span-3 lg:row-span-2" />
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
