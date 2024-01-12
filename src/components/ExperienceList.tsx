import experienceDetails from '@/constants/experienceDetails';
import { cn } from '@/lib/utils';
import { type ClassValue } from 'clsx';
import Link from 'next/link';

interface Props {
  className?: ClassValue;
}

const ExperienceList = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
      {experienceDetails.map(({ company, role, description, skills, url }) => (
        <div key={company} className="mb-8 space-y-4">
          <div>
            <h2 className="text-base lg:text-lg">{role}</h2>

            {url ? (
              <Link href={url} target="_blank">
                <span className="text-sm underline transition-colors hover:text-slate-400 lg:text-base">
                  {company}
                </span>
              </Link>
            ) : (
              <p className="text-sm lg:text-base">{company}</p>
            )}
          </div>

          <p className="text-sm text-slate-400  lg:text-base">{description}</p>

          <div className="flex flex-wrap gap-2">
            {skills.map((item) => (
              <div
                key={item}
                className="rounded-full bg-gradient-to-b from-indigo-900 to-indigo-950 p-[1px]"
              >
                <div className="rounded-full bg-indigo-950 px-3 py-1 text-xs text-indigo-200">
                  {item}
                </div>
              </div>
            ))}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
