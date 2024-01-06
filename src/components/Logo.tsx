import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <svg viewBox="0 0 78 78" className="w-12 md:w-16">
        <title>Luke Fiji logo</title>
        <g>
          <path
            className="fill-dark-gray mix-blend-difference dark:fill-light-gray"
            d="M0,0v78h78V0H0z M36,55H15V23h6v27h15V55z M62.9,28H47v9h14v5H47v13h-5V23h20.9L62.9,28z"
          />
          <polygon
            fill="transparent"
            points="21,23 15,23 15,55 36,55 36,50 21,50"
          />
          <polygon
            fill="transparent"
            points="42,55 47,55 47,42 61,42 61,37 47,37 47,28 62.9,28 62.9,23 42,23"
          />
        </g>
      </svg>
    </Link>
  );
};

export default Logo;
