import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { Education, Experience, Skills } from "~/app/resume/page";

type EducationSectionProps = {
  education: Education;
};

export function ResumeHeader() {
  return (
    <header className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-2xl font-semibold">Zachary Springer</h1>
      <div className="flex flex-row">
        <Link
          href={"mailto:springerczachary@gmail.com"}
          className="hover:underline"
          target="_blank"
        >
          springerczachary@gmail.com
        </Link>
        {` | `}
        <p>503-887-2280</p>
      </div>
      <div className="flex flex-row gap-4">
      <Link href={"https://github.com/lordbaldwin1"} target="_blank" className="group group flex flex-row items-center">
          <span className="group-hover:text-accent duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45">{`<`}</span>
          <span className="group-hover:text-accent">{`/`}</span>
          <span className="group-hover:text-accent mr-3 duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:rotate-45">{`>`}</span>
          <span className="group-hover:text-accent">{`github`}</span>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/zachary-springer-09207424a/"}
          target="_blank"
          className="hover:text-accent group flex flex-row items-center gap-2"
        >
          <span className="relative inline-block h-[18px] w-[18px]">
            <LinkedinLogoIcon
              size={20}
              className="absolute inset-0 duration-200 group-hover:scale-110 group-hover:opacity-0"
            />
            <span className="absolute inset-0 opacity-0 duration-200 group-hover:opacity-100 -top-1">
              💀
            </span>
          </span>
          {`linkedin`}
        </Link>
      </div>
    </header>
  );
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-bold">{education.title}</h2>
      <div className="flex flex-row justify-between leading-relaxed font-semibold">
        <h3>{education.school}</h3>
        <h3>{education.period}</h3>
      </div>
      <div className="flex flex-row justify-between leading-relaxed">
        <p>{education.degree}</p>
        <i>{education.location}</i>
      </div>
      <p className="max-w-2xl">{education.courses}</p>
    </section>
  );
}

type SkillsSectionProps = {
  skills: Skills;
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-bold">{skills.title}</h2>
      <div className="flex flex-row justify-between gap-6">
        <h3 className="font-semibold">Languages</h3>
        <p>{skills.languages}</p>
      </div>
      <div className="flex flex-row justify-between gap-6">
        <h3 className="font-semibold">Technologies</h3>
        <p>{skills.technologies}</p>
      </div>
      <div className="flex flex-row justify-between gap-6">
        <h3 className="font-semibold">Miscellaneous</h3>
        <p>{skills.misc}</p>
      </div>
    </section>
  );
}

type ExperienceSectionProps = {
  experience: Experience;
};
export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-2 text-xl font-bold">{experience.title}</h2>
      {experience.experiences.map((job) => (
        <div key={job.company} className="mb-2">
          <div className="flex flex-row justify-between">
            <h3 className="font-semibold">{job.company}</h3>
            <p>{job.period}</p>
          </div>
          <div className="ml-2 flex flex-row justify-between">
            <i>{job.role}</i>
            <i>{job.location}</i>
          </div>
          <ul className="ml-8 list-outside list-disc">
            {job.contributions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
