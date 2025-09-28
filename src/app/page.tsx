"use client";

import GamingList from "~/components/gaming-list";
import Header from "~/components/header";
import SectionLinks from "~/components/section-links";
import SectionList from "~/components/section-list";

export type Item = {
  title: string;
  role: string;
  period?: string;
  description: string;
  href: string;
};

export type Game = {
  title: string;
  achievement: string;
  modalText: string;
  image: string;
  icon: string;
};

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="animate-[fade-in-up_0.3s_ease-out_forwards]
         [@keyframes_fade-in-up:{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}]">
        <SectionList
          title={"work"}
          items={workItems}
          viewAllText="full résumé"
          viewAllHREF="/resume"
        />
        <GamingList title={"gaming"} games={gamingItems} />
        <SectionList
          title={"projects"}
          items={projectItems}
          viewAllText="all projects"
          viewAllHREF="/projects"
        />
        <SectionLinks />
      </div>
    </>
  );
}

const workItems: Item[] = [
  {
    title: "robinhood",
    role: "qa contractor",
    period: "oct. 2024 - present",
    description:
      "leading international regression testing and new feature testing.",
    href: "https://robinhood.com",
  },
  {
    title: "arya jewelry",
    role: "freelance software engineer",
    period: "jan. 2025 - jun. 2025",
    description:
      "engineered an ecommerce storefront and dashboard, optimized for speed and ease of use.",
    href: "https://github.com/lordbaldwin1/arya/tree/main",
  },
  {
    title: "ecobadlandz",
    role: "software engineering intern",
    period: "mar. 2024 - aug. 2024",
    description:
      "built a dynamic mapping application for electric vehicle charging stations.",
    href: "https://ecobadlandz.com/",
  },
];

const gamingItems: Game[] = [
  {
    title: "mordhau",
    achievement: "rank 1 US west, rank 7 world in 1v1s",
    modalText:
      "rank 1 player in the US west region, rank 7 in the world in 1v1 ranked",
    image: "mordhau-screenshot.webp",
    icon: "mordhau-icon.png",
  },
  {
    title: "world of warcraft",
    achievement: "top 0.2% of rogue players US",
    modalText:
      "top 0.2% of rogue players in the US, ranked 1320 out of 584,000. rank 1 horde guild on the most popular US server, faerlina.",
    image: "wow-screenshot.webp",
    icon: "wow-icon.png",
  },
  {
    title: "league of legends",
    achievement: "reached diamond 1 after 2 years of playing",
    modalText:
      "diamond 1, solo queue after 2 years of playing without prior moba experience. top 1% of US players.",
    image: "lol-screenshot.webp",
    icon: "lol-icon.png",
  },
];

const projectItems: Item[] = [
  {
    title: "bb-go (work in progress)",
    role: "creator",
    description: "bitboard chess engine in go.",
    href: "https://github.com/lordbaldwin1/bb-go",
  },
  {
    title: "vanishtype",
    role: "creator",
    description: "minimalistic typing game with live feedback.",
    href: "https://vanishtype.com/",
  },
  {
    title: "cs2-bun",
    role: "creator",
    description:
      "statistical analysis and visualization of counter-strike 2 leetify data's correlation to match winrate.",
    href: "https://cs2-bun-frontend-production.up.railway.app/",
  },
];
