import { ThemeLink } from "@/components/ThemeLink";
import type { MenuItem, Store } from "@/types/theme";

export interface FooterColumn {
  title: string;
  items: MenuItem[];
}

export interface FooterProps {
  store: Store;
  columns: FooterColumn[];
}

export function Footer({ store, columns }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-noire py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-5 md:gap-8">
          <div className="md:col-span-1">
            <p className="font-display text-xl tracking-[0.3em] uppercase">
              {store.name}
            </p>
            {store.description ? (
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {store.description}
              </p>
            ) : null}
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="label-eyebrow">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <li key={item.id}>
                    <ThemeLink
                      href={item.url}
                      className="link-underline text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item.title}
                    </ThemeLink>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">
          © {year} {store.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
