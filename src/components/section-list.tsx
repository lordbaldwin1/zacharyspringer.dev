import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { Item } from "~/app/page";

type SectionListProps = {
  title: string;
  items: Item[];
  viewAllText: string;
} & (
  | { viewAllHREF: string; onViewAllClick?: never }
  | { viewAllHREF?: string; onViewAllClick: () => void }
);

export default function SectionList({
  title,
  items,
  viewAllText,
  viewAllHREF,
  onViewAllClick,
}: SectionListProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold flex flex-row items-center"><span className="text-accent mr-2 text-2xl">{`>`}</span>{title}</h2>
      <div className="space-y-6 mb-6">
        {items.map((item) => {
          const body = (
            <>
              <h3
                className={
                  item.href
                    ? "group-hover:text-accent mb-1 text-xl font-semibold transition-colors duration-200"
                    : "mb-1 text-xl font-semibold"
                }
              >
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-1 text-sm leading-relaxed">
                {item.role} {item.period ? `(${item.period})` : ""}
              </p>
              <p className="text-md">{item.description}</p>
            </>
          );

          return (
            <div key={item.title} className={item.href ? "group" : undefined}>
              {item.href ? (
                <Link href={item.href} target="_blank">
                  {body}
                </Link>
              ) : (
                body
              )}
            </div>
          );
        })}
      </div>
      {onViewAllClick ? (
        <button
          type="button"
          onClick={onViewAllClick}
          className="hover:underline text-accent transition-colors duration-200 inline-flex items-center gap-1 group cursor-pointer bg-transparent border-0 p-0 font-mono text-left"
        >
          {viewAllText}{" "}
          <ArrowUpRightIcon
            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={16}
          />
        </button>
      ) : (
        <Link
          className="hover:underline text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
          href={viewAllHREF}
        >
          {viewAllText}{" "}
          <ArrowUpRightIcon
            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            size={16}
          />
        </Link>
      )}
    </section>
  );
}
