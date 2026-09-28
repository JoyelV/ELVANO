import { Star } from "lucide-react";
import { ThemeLink } from "@/components/ThemeLink";
import { formatMoney } from "@/lib/format";
import type { ActionLink, Product } from "@/types/theme";

export interface ProductShowcaseProps {
  eyebrow?: string;
  product: Product;
  action?: ActionLink;
  details?: string[];
}

export function ProductShowcase({
  eyebrow,
  product,
  action,
  details = [],
}: ProductShowcaseProps) {
  const cta = action ?? { label: "View Product", url: product.url };

  return (
    <section className="section-y bg-surface">
      <div className="container-noire grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <img
          src={product.image}
          alt={product.title}
          width={912}
          height={1104}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />

        <div>
          {eyebrow ? <p className="label-eyebrow">{eyebrow}</p> : null}
          <h2 className="display-md mt-3">{product.title}</h2>

          {typeof product.rating === "number" ? (
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex" aria-hidden>
                {[0, 1, 2, 3, 4].map((index) => (
                  <Star
                    key={index}
                    size={13}
                    className={
                      index < Math.round(product.rating ?? 0)
                        ? "fill-accent text-accent"
                        : "text-border"
                    }
                  />
                ))}
              </span>
              <span>
                {product.rating.toFixed(1)}
                {product.reviewCount ? ` · ${product.reviewCount} reviews` : ""}
              </span>
            </p>
          ) : null}

          {product.description ? (
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          ) : null}

          <p className="mt-6 text-lg">{formatMoney(product.price)}</p>

          {details.length > 0 ? (
            <ul className="mt-7 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          ) : null}

          <ThemeLink
            href={cta.url}
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-foreground px-10 py-4 text-xs tracking-[0.18em] text-background uppercase transition-colors hover:bg-accent"
          >
            {cta.label}
          </ThemeLink>
        </div>
      </div>
    </section>
  );
}
