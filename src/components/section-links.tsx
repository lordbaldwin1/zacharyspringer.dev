import {
  AtIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function SectionLinks() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold">
        <span className="text-accent mr-2">{`>`}</span>links
      </h2>
      <div className="text-muted-foreground flex flex-row flex-wrap items-center justify-start gap-6">
        <Link href={"https://github.com/lordbaldwin1"} target="_blank" className="group group flex flex-row items-center">
          <span className="group-hover:text-accent duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45">{`<`}</span>
          <span className="group-hover:text-accent">{`/`}</span>
          <span className="group-hover:text-accent mr-3 duration-200 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:rotate-45">{`>`}</span>
          <span className="group-hover:text-accent">{`github`}</span>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/zachary-springer-09207424a/"}
          target="_blank"
          className="hover:text-accent group flex flex-row items-center gap-2"
        >
          <span className="relative inline-block h-[18px] w-[18px]">
            <LinkedinLogoIcon
              size={18}
              className="absolute inset-0 duration-200 group-hover:scale-110 group-hover:opacity-0"
            />
            <span className="absolute inset-0 opacity-0 duration-200 group-hover:opacity-100 -top-1">
              💀
            </span>
          </span>
          {`linkedin`}
        </Link>
        <Link
          href={"mailto:springerczachary@gmail.com"}
          target="_blank"
          className="hover:text-accent group flex flex-row items-center gap-2"
        >
          <AtIcon
            size={18}
            className="group-hover:animate-spin"
          />
          {`springerczachary@gmail.com`}
        </Link>
      </div>
    </section>
  );
}
