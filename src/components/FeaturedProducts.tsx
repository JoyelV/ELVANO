import { ProductCard } from "@/components/ProductCard";
import { ThemeLink } from "@/components/ThemeLink";
import type { ActionLink, Product } from "@/types/theme";

export interface FeaturedProductsProps {
  eyebrow?: string;
  title: string;
  products: Product[];
  action?: ActionLink;
  onQuickAction?: (product: Product) => void;
}

export function FeaturedProducts({
  eyebrow,
  title,
  products,
  action,
  onQuickAction,
}: FeaturedProductsProps) {
  return (
    <section aria-labelledby="featured-products-heading" className="section-y">
      <div className="container-noire">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            {eyebrow ? <p className="label-eyebrow">{eyebrow}</p> : null}
            <h2 id="featured-products-heading" className="display-lg mt-3">
              {title}
            </h2>
          </div>
          {action ? (
            <ThemeLink
              href={action.url}
              className="link-underline text-xs tracking-[0.18em] uppercase"
            >
              {action.label}
            </ThemeLink>
          ) : null}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-14 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickAction={onQuickAction}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
