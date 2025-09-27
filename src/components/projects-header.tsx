import { ScrambleText } from "./scramble-text";

export default function ProjectsHeader() {
  return (
    <header className="mb-8">
      <h1 className="animate-fade-in mb-6 text-4xl font-bold">
        <span className="mr-2 text-accent">{`>`}</span>
        <span className="inline-block">
          <ScrambleText text="projects" />
        </span>
      </h1>
      <p className="animate-fade-in-up text-muted-foreground leading-relaxed transition-all duration-200">
        {`here is a more extensive, detailed list of my personal projects.`}
      </p>
    </header>
  );
}
