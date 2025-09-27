import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import ProjectsHeader from "~/components/projects-header";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function ProjectsPage() {
  return (
    <header>
      <ProjectsHeader />
      <ProjectCardList projects={projects} />
    </header>
  );
}

const projects: Project[] = [
  {
    title: "bb-go",
    role: "creator",
    date: "present",
    description:
      "a bitboard chess engine in go, implementing move generation, UCI protocol, and search.",
    achievements: [
      "heavy bitwise usage",
      "implemented UCI protocol",
      "fen parsing",
      "move generation",
    ],
    technologies: ["go"],
    link: "https://github.com/lordbaldwin1/bb-go",
  },
];

type Project = {
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
    <section>
      {projects.map((project) => (
        <Card key={project.title} className="bg-background group hover:border-accent transition-colors duration-200">
          <CardHeader>
            <CardTitle className="mb-2 text-2xl group-hover:text-accent transition-colors duration-200">{project.title}</CardTitle>
            <CardDescription className="space-y-2">
              <div className="leading-relaxed">
                {project.role}{" "}
                ({project.date})
              </div>
              <span >{project.description}</span>
            </CardDescription>
            <CardAction><ArrowUpRightIcon /></CardAction>
          </CardHeader>
          <CardContent>
            <h2>achievements</h2>
          </CardContent>
          <CardFooter>
            <p>technologies</p>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
