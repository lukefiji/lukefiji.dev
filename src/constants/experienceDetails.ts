type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: Array<string>;
  url?: string;
};

const experienceDetails: Array<Experience> = [
  {
    company: 'Dapper Labs',
    role: 'Software Engineer',
    startDate: '',
    endDate: '',
    description:
      "Enhanced the digital experience for Flow blockchain's leading crypto wallet and played an early role in creating a dynamic, consumer-facing gaming experience. I also had the opportunity to architect the frontend for a new developer portal. My work significantly contributed to improving platform usability, scalability, and peformance, while fostering an engaging developer community.",
    skills: ['TypeScript', 'React', 'Next.js', 'GraphQL'],
    url: 'https://www.dapperlabs.com/',
  },
  {
    company: 'Kelley Blue Book',
    role: 'UI Engineer II',
    startDate: '',
    endDate: '',
    description:
      'Migrated a legacy JavaScript & .NET monolith to a microservices-based architecture on AWS leveraging React, Node.js, and .NET. I collaborated with UX teams to create a front-end design system and a shared component library. Regularly checking in on performance monitoring tools like New Relic and AWS CloudWatch was vital in optimizing system resources and ensuring peak performance.',
    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'GraphQL',
      '.NET',
      'HTML',
      'CSS',
    ],
    url: 'https://www.kbb.com/',
  },
  {
    company: 'GemFind',
    role: 'Developer',
    startDate: '',
    endDate: '',
    description:
      'Led the end-to-end development of over two dozen e-commerce solutions, focusing on improving online sales and user experience for jewelry retailers. To shave off new project setup time, I created a custom WordPress child theme generator using Node.js, and Sass.',
    skills: [
      'JavaScript',
      'Node.js',
      'Sass',
      'WordPress',
      'WooCommerce',
      'HTML',
      'CSS',
    ],
    url: 'https://www.gemfind.com/',
  },
  {
    company: 'RKTech.co',
    role: 'Developer/IT Consultant',
    startDate: '',
    endDate: '',
    description:
      'Consulting gig that demanded a versatile skill set, adapting to varied client needs. Implemented a range of technical improvements, such as improving SEO, setting up development environments, or integration of client sales data with marketing platforms.',
    skills: [
      'JavaScript',
      'Web Performance',
      'SEO',
      'WordPress',
      'HTML',
      'CSS',
    ],
  },
];

export default experienceDetails;
