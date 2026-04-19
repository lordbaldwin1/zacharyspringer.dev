
import { ProjectCardList, type Project } from "~/components/project-card-list";
import ProjectsHeader from "~/components/projects-header";


export default function ProjectsPage() {
  return (
    <header>
      <ProjectsHeader
        title="projects"
        description="here is a more extensive, detailed list of my personal projects."
      />
      <div className="animate-[fade-in-up_0.3s_ease-out_forwards]
         [@keyframes_fade-in-up:{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}]">
        <ProjectCardList projects={projects} />
      </div>
    </header>
  );
}

const projects: Project[] = [
  {
    title: "qaplayground",
    role: "contributor",
    date: "jan. 2026",
    description:
      "contributor to open source solution suite. created secondary solution suite showcasing page object model (POM) & data-driven testing techniques.",
    achievements: [
      "contributed to open source project",
      "created secondary solution suite",
      "showcases scalable automated testing architecture",
    ],
    technologies: [
      "playwright",
      "typescript",
      "github actions",
    ],
    link: "https://github.com/lordbaldwin1/automation",
  },
  {
    title: "vanishtype",
    role: "creator",
    date: "jun. 2025",
    description:
      "a minimalistic typing test site with live feedback and multiple game modes.",
    achievements: [
      "complex client-side state management",
      "intuitive, performant UX/UI",
      "ranked game mode with leaderboards",
      "user profiles with stats, socials, and bio",
    ],
    technologies: [
      "typescript",
      "next.js",
      "react",
      "tailwindCSS",
      "postgres",
      "drizzleORM",
      "clerk",
    ],
    link: "https://vanishtype.com/",
  },
  {
    title: "liftthings",
    role: "creator",
    date: "dec. 2025",
    description:
      "a hypertrophy training app with automatic PR tracking, AI workout generation, and progression analytics.",
    achievements: [
      "AI-powered workout generation based on training history",
      "automatic personal record tracking on workout completion",
      "strength progression charts by muscle group or exercise",
      "weekly volume analysis per muscle group",
    ],
    technologies: [
      "typescript",
      "next.js",
      "react",
      "tailwindCSS",
      "postgres",
      "drizzleORM",
      "tanstack query",
      "vercel ai sdk",
    ],
    link: "https://github.com/lordbaldwin1/lift",
  },
  {
    title: "profit prophet",
    role: "creator",
    date: "aug. 2025",
    description:
      "stock fortune teller with Google Gemini API, hand-rolled username and password authentication.",
    achievements: [
      "learned JWT authentication from scratch",
      "managed auth and refresh tokens securely",
      "crafted an ETL pipeline using Yahoo Finance API",
      "AI integration for statistical analysis of tickers",
    ],
    technologies: [
      "gemini",
      "typescript",
      "bun",
      "express.js",
      "cron",
      "postgres",
      "next.js",
      "react",
      "tailwindCSS",
    ],
    link: "https://github.com/lordbaldwin1/fin-fortune",
  },
  {
    title: "cs2-bun",
    role: "creator",
    date: "aug. 2025",
    description:
      "counter-strike 2 automated ETL pipeline and statistical analysis of faceit and leetify data.",
    achievements: [
      "statistical analysis, pearson correlation",
      "data visualization",
      "cron jobs",
      "made an ETL pipeline using faceit API and web-scraping leetify",
    ],
    technologies: [
      "typescript",
      "bun",
      "express.js",
      "cron",
      "sqlite",
      "next.js",
      "react",
      "tailwindCSS",
      "recharts",
    ],
    link: "https://github.com/lordbaldwin1/cs2-bun",
  },
  {
    title: "trimet visualization",
    role: "creator",
    date: "jun. 2025",
    description:
      "trimet transit ETL pipeline with portland bus stop data, built over Google Cloud Platform.",
    achievements: [
      "took data from two sources, sent over GCP pub/sub",
      "validated, integrated, and transformed data",
      "queried data into geoJSON files and visualized with MapBox GL JS",
      "process automated with Linux VMs using system scheduling and cron jobs",
    ],
    technologies: [
      "python",
      "pandas",
      "gcp",
      "pub/sub",
      "linux",
      "postgres",
      "mapbox",
    ],
    link: "https://github.com/lordbaldwin1/transit-pipeline",
  },
];