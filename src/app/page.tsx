"use client"

import Header from "~/components/header";
import SectionList from "~/components/section-list";

export type Item = {
  title: string,
  role: string,
  period: string,
  description: string,
  href: string,
}

export default function HomePage() {
  return (
    <>
    <Header />
    <SectionList title={"work"} items={workItems} viewAllText="Full Résumé" viewAllHREF="/resume" />
    </>
  );
}

const workItems: Item[] = [
  {
    title: "robinhood",
    role: "qa contractor",
    period: "oct. 2024 - present",
    description: "leading international regression testing and new feature testing.",
    href: "https://robinhood.com",
  },
  {
    title: "arya jewelry",
    role: "freelance software engineer",
    period: "jan. 2025 - jun. 2025",
    description:
      "engineered an ecommerce storefront and dashboard, optimized for speed and ease of use.",
    href: "/",
  },
  {
    title: "ecobadlandz",
    role: "software engineering intern",
    period: "mar. 2024 - aug. 2024",
    description:
      "built a dynamic mapping application for electric vehicle charging stations.",
    href: "https://ecobadlandz.com/",
  },
]

const projectItems = [
  {
    title: "create-t3-app",
    role: "creator and maintainer",
    description:
      "open-source project for initializing full-stack next.js apps. 24k+ stars, 200+ contributors",
    href: "https://create.t3.gg",
  },
  {
    title: "mini-git",
    role: "creator",
    description: "simplified version of git from scratch",
    href: "https://github.com/nexxeln/mini-git",
  },
]
