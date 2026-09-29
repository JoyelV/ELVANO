import { ThemeLink } from "@/components/ThemeLink";
import { formatMoney } from "@/lib/format";
import type { Product } from "@/types/theme";

export interface ProductCardProps {
  product: Product;
  /** Optional quick action wired by the host runtime. */
  onQuickAction?: ((product: Product) => void) | undefined;
  quickActionLabel?: string | undefined;
}

export function ProductCard({
  product,
  onQuickAction,
  quickActionLabel = "Quick add",
}: ProductCardProps) {
  const onSale =
    product.compareAtPrice && product.compareAtPrice.amount > product.price.amount;

  return (
    <article className="group relative">
      <ThemeLink href={product.url} className="block">
        <div className="relative overflow-hidden bg-surface">
          <img
            src={product.image}
            alt={product.title}
            width={912}
            height={1104}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-opacity duration-700 group-hover:opacity-0"
          />
          {product.hoverImage ? (
            <img
              src={product.hoverImage}
              alt=""
              aria-hidden="true"
              width={912}
              height={1104}
              loading="lazy"
              className="absolute inset-0 aspect-[4/5] h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />
          ) : null}
          {product.badge ? (
            <span className="absolute top-3 left-3 bg-background px-3 py-1 text-[0.625rem] tracking-[0.18em] uppercase">
              {product.badge}
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 text-sm leading-snug">{product.title}</h3>
        <p className="mt-1 flex items-center gap-2 text-sm">
          <span>{formatMoney(product.price)}</span>
          {onSale && product.compareAtPrice ? (
            <span className="text-muted-foreground line-through">
              {formatMoney(product.compareAtPrice)}
            </span>
          ) : null}
        </p>
      </ThemeLink>

      {onQuickAction ? (
        <button
          type="button"
          onClick={() => onQuickAction(product)}
          className="mt-3 w-full border border-border bg-surface py-3 text-[0.625rem] tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-background"
        >
          {quickActionLabel}
        </button>
      ) : null}
    </article>
  );
}
