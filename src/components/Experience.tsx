import { Heading2 } from '@/components';
import experienceDetails from '@/constants/experienceDetails';
import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx';
import Link from 'next/link';

interface Props {
  className?: ClassValue;
}

const Experience = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      <Heading2>Experience</Heading2>

      {experienceDetails.map(({ company, role, description, skills, url }) => (
        <div key={company} className="mb-8 space-y-4">
          <div>
            <h2 className="text-md lg:text-lg">{role}</h2>

            {url ? (
              <Link
                href={url}
                className="lg:text-md text-sm underline"
                target="_blank"
              >
                {company}
              </Link>
            ) : (
              <p className="lg:text-md text-sm">{company}</p>
            )}
          </div>

          <p className="text-sm text-slate-400">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills.map((item) => (
              <div
                key="item"
                className="rounded-full bg-indigo-950 px-3 py-1 text-xs text-indigo-200"
              >
                {item}
              </div>
            ))}
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Experience;
