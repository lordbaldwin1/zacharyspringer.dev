import { EducationSection, ExperienceSection, ResumeHeader, SkillsSection } from "~/components/resume-sections";
import ProjectsHeader from "~/components/projects-header";
import SectionLinks from "~/components/section-links";

export default function ResumePage() {
  return (
    <>
      <ProjectsHeader title="résumé" description="here is my résumé in full." />
      <ResumeHeader />
      <EducationSection education={education} />
      <SkillsSection skills={skills} />
      <ExperienceSection experience={experience} />
      <ExperienceSection experience={projects} />
      <SectionLinks />
    </>
  );
}

const education: Education = {
  title: "Education",
  school: "Portland State University",
  period: "Sep 2019 - Aug 2024",
  degree: "B.S. Computer Science",
  location: "Portland, OR",
  courses:
    "Discrete Mathematics, Data Structures, Algorithms, Databases, Data Engineering, Web Development, Natural Language Processing, Operating Systems, Programming Language Design",
};

export type Education = {
  title: string;
  school: string;
  period: string;
  degree: string;
  location: string;
  courses: string;
};

export type Skills = {
  title: string;
  languages: string;
  technologies: string;
  misc: string;
};

const skills: Skills = {
  title: "Skills",
  languages: "TypeScript, JavaScript, SQL, HTML, CSS, Python, Go, Java",
  technologies:
    "Node.js, Express.js, Postgres, SQLite, React, Next.js, TailwindCSS",
  misc: "Git, Docker, GitHub, GitHub Actions, GCP, AWS",
};

export type Experience = {
  title: string;
  experiences: {
    company: string;
    role: string;
    period: string;
    location: string;
    contributions: string[];
  }[];
};

const experience: Experience = {
  title: "Experience",
  experiences: [
    {
      company: "Robinhood",
      role: "QA Contractor",
      period: "Oct 2024 - Present",
      location: "Portland, OR",
      contributions: [
        "Developed comprehensive regression test suites for the expansion of Robinhood internationally, providing a successful launch to over 150,000 United Kingdom users.",
        "Collaborated directly with engineers and product managers to streamline the QA process of development, using work management tools such as Jira, TestRail, and Coda.",
        "Diagnosed and aided in fixing over 500 front-end and back-end bugs, documenting which API endpoints to hit, Python scripts to execute, and ensuring reproducibility for engineers.",
      ]
    },
    {
      company: "Arya Jewelry",
      role: "Freelance Software Engineer",
      period: "Jan 2025 - Jun 2025",
      location: "Portland, OR",
      contributions: [
        "Engineered a full-stack jewelry e-commerce platform utilizing Next.js and TypeScript, enabling server-side rendering for instantaneous first page loading, improved search engine optimization, and end-to-end type safety.",
        "Implemented a hand rolled stock management system, leveraging cloud-based SQLite, DrizzleORM, and Cron jobs, ensuring data integrity through all user interactions.",
        "Developed beautiful, production grade React components for product browsing, sorting, searching, pagination, cart management, item reservations, and checkout.",
        "Programmed a simple, intuitive admin dashboard for viewing and managing product stock and site metrics, using Next.js, TypeScript, shadcn/ui, and Tanstack Form.",
      ]
    },
    {
      company: "Ecobadlandz",
      role: "Software Engineering Intern",
      period: "Mar 2024 - Aug 2024",
      location: "Portland, OR",
      contributions: [
        "Designed and implemented two AirBnB-like mapping applications, providing users with enhanced access to electric vehicle charging stations.",
        "Spearheaded backend development, designing and implementing REST API endpoints with Java, Spring Boot, JPA/Hibernate, and AWS RDS MySQL to support data retrieval, validation, and integration across multiple applications.",
        "Developed production grade frontend component, including dynamic maps, interactive markers, in-app navigation handoffs, and advanced filtering/search, using React, React Native, Redux, and Google Maps API.",
      ]
    },
  ]
}

const projects: Experience = {
  title: "Notable Projects",
  experiences: [
    {
      company: "Vanishtype",
      role: "Full Stack Software Engineer",
      period: "May 2025 - July 2025",
      location: "Portland, OR",
      contributions: [
        "Built a full-stack, minimalistic typing test application with user authentication, live typing feedback, global leaderboards, visualized statistics, a vanishing UI while typing, and an animated cursor that moves as you type.",
        "Designed and wrote custom React hooks to consolidate state updates, ensuring a separation of concerns.",
        "Developed a secure and efficient data access layer with Next.js, Postgres, and DrizzleORM, centralizing serverside logic and preventing client-side data leaks.",
      ]
    },
    {
      company: "TriMet Data Pipeline and Visualization",
      role: "Full Stack Software Engineer",
      period: "Jan 2024 - May 2024",
      location: "Portland, OR",
      contributions: [
        "Engineered an automated ETL pipeline over Google Cloud Pub/Sub with Python (Pandas) and Postgres to gather, process, and visualize Portland TriMet breadcrumb bus stop data.",
        "Programmed scripts to validate, clean, integrate, and transform data from two sources into a unified dataset stored in a PostgreSQL database.",
        "Visualized the dataset by running queries into a GeoJSON file to be visualized on a Python HTTP server using Mapbox GL.",
        "Automated the pipeline with GCP CE Linux virtual machines through system scheduling and Cron jobs.",
      ]
    },
  ]
}
