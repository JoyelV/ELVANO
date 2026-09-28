import { ThemeLink } from "@/components/ThemeLink";
import type { Collection } from "@/types/theme";

export interface CategoryShowcaseProps {
  eyebrow?: string;
  title: string;
  collections: Collection[];
}

export function CategoryShowcase({ eyebrow, title, collections }: CategoryShowcaseProps) {
  return (
    <section aria-labelledby="categories-heading" className="section-y">
      <div className="container-noire">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow ? <p className="label-eyebrow">{eyebrow}</p> : null}
            <h2 id="categories-heading" className="display-lg mt-3">
              {title}
            </h2>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:mt-14 md:grid-cols-4 md:gap-6">
          {collections.map((collection) => (
            <li key={collection.id}>
              <ThemeLink href={collection.url} className="group block">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    width={800}
                    height={1008}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-4 font-display text-lg">{collection.title}</h3>
                {collection.description ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {collection.description}
                  </p>
                ) : null}
              </ThemeLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
