import { SwordIcon } from "@phosphor-icons/react/dist/ssr";
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
      <h2 className="mb-6 text-2xl font-bold">
        <Dialog>
          <DialogTrigger asChild>
            <span className="text-accent group relative hover:cursor-pointer">
              <span className="text-accent mr-2 text-2xl">{`>`}</span>
              <SwordIcon className="absolute -top-4 left-1/2 h-4 w-4 -translate-x-1/2 transform animate-bounce opacity-0 transition-opacity duration-200 [animation-duration:0.5s] group-hover:opacity-100" />
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
                  className="h-auto w-full rounded-lg object-contain"
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
              <div className="group flex justify-between items-center hover:cursor-pointer">
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
                <span className="sm:hidden inline-block text-muted-foreground text-2xl">›</span>
                <span className="hidden sm:inline-block text-sm text-muted-foreground">{game.achievement}</span>
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
                    className={`mt-2 h-auto rounded-lg object-contain ${game.title === "world of warcraft" ? "mx-auto w-full sm:w-1/2" : "w-full"}`}
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
