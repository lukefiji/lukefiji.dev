import { cn } from '@/lib/utils';
import Link from 'next/link';

const navLinks = [
  {
    title: 'Home',
    url: '/#',
  },
  {
    title: 'Thoughts',
    url: '/#',
  },
  {
    title: 'Experience',
    url: '/#',
  },
  {
    title: 'Projects',
    url: '/#',
  },
  {
    title: 'Playground',
    url: '/#',
  },
];

const Nav = () => {
  return (
    <div
      className={cn(
        'fixed top-8 z-10 hidden w-full justify-center md:top-16 lg:flex',
      )}
    >
      <div
        className={cn(
          'flex justify-center gap-12',
          'max-w-screen-sm',
          'rounded-full px-8',
          'bg-gradient-to-b from-slate-200/[.05] to-slate-200/0',
          'backdrop-blur-md',
          'shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,.15),inset_0px_-1px_1px_0px_rgba(128,128,128,.05),0_20px_25px_-5px_rgb(0_0_0/0.1),_0_8px_10px_-6px_rgb(0_0_0/0.1)]',
        )}
      >
        {navLinks.map(({ url, title }) => (
          <Link
            href={url}
            key={title}
            className={cn(
              'bg-clip-text text-transparent',
              'bg-gradient-to-b from-slate-200 to-slate-600',
              'hover:from-slate-300 hover:to-slate-900',
              'py-4',
            )}
          >
            <span className="font-semibold transition">{title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
