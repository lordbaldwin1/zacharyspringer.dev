import { MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import { ScrambleText } from "./scramble-text";
import Clock from "./clock";

export default function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="animate-fade-in mb-6 text-4xl font-bold">
        <span className="inline-block">
          <ScrambleText text="zachary springer" />
        </span>
      </h1>
      <div className="animate-[fade-in-up_0.3s_ease-out_forwards]
         [@keyframes_fade-in-up:{0%{opacity:0;transform:translateY(10px)}100%{opacity:1;transform:translateY(0)}}]">
        <div className="text-muted-foreground text-md">
          <Clock />
          <div className="mb-6 flex flex-row items-center gap-2">
            <MapPinIcon size={20} />
            portland, oregon
          </div>
        </div>
        <p className="leading-relaxed">
          {`hello there, I'm a recent graduate with a B.S. in computer science, currently specializing in full-stack web development. I used to play video games competitively but now I build and solve difficult problems through code.`}
        </p>
      </div>
    </header>
  );
}
