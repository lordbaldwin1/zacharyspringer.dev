import { ArrowUpRightIcon, EggIcon, SwordIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import type { Game } from "~/app/page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

type GamingListProps = {
  title: string;
  games: Game[];
};

export default function GamingList({ title, games }: GamingListProps) {
  return (
    <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold">
          <Dialog>
            <DialogTrigger asChild>
              <span className="text-accent mr-2 group relative hover:cursor-pointer">
                *
                <SwordIcon className="absolute animate-bounce [animation-duration:0.5s] -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </span>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[95vw] sm:max-w-5xl">
              <DialogHeader>
                <DialogTitle>ASH PANTHEON.</DialogTitle>
                <DialogDescription>
                  <Image
                    src="/ap.jpg"
                    alt="Easter egg image"
                    width={800}
                    height={600}
                    quality={100}
                    className="w-full h-auto rounded-lg object-contain"
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          {title}
        </h2>
      <div className="mb-6 space-y-6">
        {games.map((game) => (
          <Dialog key={game.title}>
            <DialogTrigger asChild>
              <div className="group flex justify-between hover:cursor-pointer">
                <div className="flex items-center gap-2">
                  <h2 className="group-hover:text-accent text-lg">
                    {game.title}
                  </h2>
                  <Image
                    src={`/${game.icon}`}
                    alt={`${game.title} icon`}
                    width={20}
                    height={20}
                    className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                </div>
                <span className="text-sm">{game.achievement}</span>
              </div>
            </DialogTrigger>
            <DialogContent className="w-full max-w-[95vw] sm:max-w-5xl">
              <DialogHeader>
                <DialogTitle>{game.title}</DialogTitle>
                <DialogDescription>
                  {game.modalText}
                  <Image
                    src={`/${game.image}`}
                    alt={`image of ${game.achievement}`}
                    width={game.title === "World of Warcraft" ? 500 : 900}
                    height={game.title === "World of Warcraft" ? 300 : 500}
                    className={`h-auto rounded-lg object-contain ${game.title === "world of warcraft" ? "mx-auto w-full sm:w-1/2" : "w-full"}`}
                  />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
