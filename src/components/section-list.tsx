import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import type { Item } from "~/app/page";

type SectionListProps = {
  title: string;
  items: Item[];
  viewAllText: string;
  viewAllHREF: string;
};

export default function SectionList({
  title,
  items,
  viewAllText,
  viewAllHREF,
}: SectionListProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>
      <div className="space-y-6 mb-6">
        {items.map((item) => (
          <div key={item.title} className="group">
            <Link href={item.href}>
              <h3 className="group-hover:text-accent mb-1 text-xl font-semibold transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-1 text-sm">
                {item.role} ({item.period})
              </p>
              <p className="text-muted-foreground">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
      <Link
        className="hover:text-accent transition-colors duration-200 inline-flex items-center gap-1 group"
        href={viewAllHREF}
      >
        {viewAllText}{" "}<ArrowUpRightIcon className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
      </Link>
    </section>
  );
}
