import { Metadata } from 'next';

interface IMeta {
  title: string;
  description: string;
}

export function meta({ title, description }: IMeta): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: 'Luke Fiji',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@luke_fiji',
      creator: '@luke_fiji',
    },
  };
}
