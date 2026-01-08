import SectionLinks from "~/components/section-links";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Kbd } from "~/components/ui/kbd";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export type Project = {
  title: string;
  role: string;
  date: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link: string;
};

type ProjectListProps = {
  projects: Project[];
};
export function ProjectCardList({ projects }: ProjectListProps) {
  return (
    <section className="space-y-12">
      {projects.map((project) => (
        <Card
          key={project.title}
          className="bg-background group hover:border-accent transition-colors duration-200"
        >
          <CardHeader>
            <CardTitle className="group-hover:text-accent text-2xl transition-colors duration-200">
              {project.title}
            </CardTitle>
            <CardDescription className="space-y-2">
              <div className="leading-relaxed">
                {project.role} ({project.date})
              </div>
              <span className="text-foreground">{project.description}</span>
            </CardDescription>
            <CardAction>
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-muted-foreground/30 text-sm text-muted-foreground transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/10 group-hover:border-accent/50"
              >
                <span>view</span>
                <ArrowUpRightIcon
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </CardAction>
          </CardHeader>
          <CardContent>
            <h2 className="text-lg font-semibold">achievements</h2>
            <ul className="list-inside list-disc">
              {project.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-2">
            <h2 className="text-lg font-semibold">technologies</h2>
            <div className="flex flex-row flex-wrap gap-2">
              {project.technologies.map((item, i) => (
                <Kbd key={i} disableGroupHover={true}>
                  {item}
                </Kbd>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
      <SectionLinks />
    </section>
  );
}
