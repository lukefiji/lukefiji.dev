import Head from "next/head";
import { Inter } from "next/font/google";
import { Heading, Text, List, Logo } from "../components";
import contactList from "../constants/contactList";
import experienceList from "../constants/experienceList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Luke Fiji</title>
        <meta name="description" content="Luke Fiji - Software Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className="p-8 md:p-12 lg:p-16">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <Logo />
        </div>

        <div className="mb-8 md:mb-12 lg:mb-16">
          <Heading>Hey there, I&apos;m Luke.</Heading>

          <Text>
            I am a curious problem-solver with an eager passion for learning.
          </Text>
        </div>
        <div className="mb-8 md:mb-12 lg:mb-16">
          <Heading>Experience</Heading>

          <List items={experienceList} />
        </div>
        <div className="mb-8 md:mb-12 lg:mb-16">
          <Heading>Connect</Heading>

          <List items={contactList} />
        </div>
      </main>
    </>
  );
}
