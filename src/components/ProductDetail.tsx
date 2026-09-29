import { useState } from "react";
import { Star } from "lucide-react";
import { formatMoney } from "@/lib/format";
import type { Product } from "@/types/theme";

export interface ProductDetailProps {
  product: Product;
  sizes?: string[];
  /** Host runtime connects its own add-to-cart handler here. */
  onAddToCart?: (product: Product, size?: string) => void;
}

export function ProductDetail({
  product,
  sizes = ["XS", "S", "M", "L", "XL"],
  onAddToCart,
}: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(sizes[1]);
  const gallery = [product.image, product.hoverImage].filter(Boolean) as string[];

  return (
    <section className="section-y">
      <div className="container-noire grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="grid gap-4">
          {gallery.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={index === 0 ? product.title : `${product.title} detail`}
              width={912}
              height={1104}
              loading={index === 0 ? "eager" : "lazy"}
              className="aspect-[4/5] w-full object-cover"
            />
          ))}
        </div>

        <div className="md:sticky md:top-28 md:self-start">
          {product.vendor ? <p className="label-eyebrow">{product.vendor}</p> : null}
          <h1 className="display-md mt-3">{product.title}</h1>

          <p className="mt-5 flex items-center gap-3 text-lg">
            <span>{formatMoney(product.price)}</span>
            {product.compareAtPrice ? (
              <span className="text-base text-muted-foreground line-through">
                {formatMoney(product.compareAtPrice)}
              </span>
            ) : null}
          </p>

          {typeof product.rating === "number" ? (
            <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
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
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          ) : null}

          <fieldset className="mt-8">
            <legend className="label-eyebrow">Size</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  aria-pressed={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-14 border px-4 py-3 text-xs tracking-[0.18em] uppercase transition-colors ${
                    selectedSize === size
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          <button
            type="button"
            onClick={() => onAddToCart?.(product, selectedSize)}
            className="mt-8 w-full rounded-sm bg-foreground px-8 py-4 text-xs tracking-[0.18em] text-background uppercase transition-colors hover:bg-accent"
          >
            Add to Bag
          </button>

          <dl className="mt-10 space-y-4 border-t border-border pt-6 text-sm text-muted-foreground">
            <div>
              <dt className="text-foreground">Shipping</dt>
              <dd className="mt-1">Complimentary delivery and returns.</dd>
            </div>
            <div>
              <dt className="text-foreground">Care</dt>
              <dd className="mt-1">Specialist clean only. Store away from direct light.</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
