import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";

import { StoreLayout } from "@/components/StoreLayout";
import { ThemeLink } from "@/components/ThemeLink";
import { formatMoney } from "@/lib/format";
import { demoProducts } from "@/data/demo/products";
import type { CartLine } from "@/types/theme";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({
    meta: [
      { title: "Shopping Bag — NOIRÉ" },
      {
        name: "description",
        content: "Review your bag in the NOIRÉ modern luxury storefront theme.",
      },
      { property: "og:title", content: "Shopping Bag — NOIRÉ" },
      {
        property: "og:description",
        content: "Review your bag in the NOIRÉ modern luxury storefront theme.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cart" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
});

const initialLines: CartLine[] = [
  { id: "demo-cart-line-1", product: demoProducts[0]!, quantity: 1, variantTitle: "One size" },
  { id: "demo-cart-line-2", product: demoProducts[1]!, quantity: 2, variantTitle: "M" },
];

function CartPage() {
  const [lines, setLines] = useState<CartLine[]>(initialLines);

  const subtotal = lines.reduce(
    (total, line) => total + line.product.price.amount * line.quantity,
    0,
  );
  const currencyCode = lines[0]?.product.price.currencyCode ?? "USD";

  function updateQuantity(id: string, delta: number) {
    setLines((current) =>
      current.map((line) =>
        line.id === id
          ? { ...line, quantity: Math.max(1, line.quantity + delta) }
          : line,
      ),
    );
  }

  function removeLine(id: string) {
    setLines((current) => current.filter((line) => line.id !== id));
  }

  return (
    <StoreLayout cartCount={lines.length}>
      <section className="section-y">
        <div className="container-noire">
          <p className="label-eyebrow">Your Selection</p>
          <h1 className="display-lg mt-3">Shopping Bag</h1>

          {lines.length === 0 ? (
            <div className="mt-12 border-t border-border pt-10">
              <p className="text-base text-muted-foreground">Your bag is empty.</p>
              <ThemeLink
                href="/collections/new-arrivals"
                className="mt-6 inline-flex rounded-sm bg-foreground px-8 py-4 text-xs tracking-[0.18em] text-background uppercase transition-colors hover:bg-accent"
              >
                Continue Shopping
              </ThemeLink>
            </div>
          ) : (
            <div className="mt-12 grid gap-12 lg:grid-cols-3 lg:gap-16">
              <ul className="lg:col-span-2">
                {lines.map((line) => (
                  <li
                    key={line.id}
                    className="flex gap-5 border-t border-border py-6 first:border-t-0 first:pt-0"
                  >
                    <img
                      src={line.product.image}
                      alt={line.product.title}
                      width={912}
                      height={1104}
                      loading="lazy"
                      className="h-32 w-24 shrink-0 object-cover md:h-40 md:w-32"
                    />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h2 className="text-sm leading-snug">{line.product.title}</h2>
                          {line.variantTitle ? (
                            <p className="mt-1 text-xs text-muted-foreground">
                              {line.variantTitle}
                            </p>
                          ) : null}
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${line.product.title}`}
                          onClick={() => removeLine(line.id)}
                          className="p-1 text-muted-foreground hover:text-foreground"
                        >
                          <X size={16} aria-hidden />
                        </button>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-4 pt-4">
                        <div className="flex items-center border border-border">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(line.id, -1)}
                            className="px-3 py-2"
                          >
                            <Minus size={14} aria-hidden />
                          </button>
                          <span className="min-w-8 text-center text-sm">
                            {line.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(line.id, 1)}
                            className="px-3 py-2"
                          >
                            <Plus size={14} aria-hidden />
                          </button>
                        </div>
                        <p className="text-sm">
                          {formatMoney({
                            amount: line.product.price.amount * line.quantity,
                            currencyCode: line.product.price.currencyCode,
                          })}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <aside className="h-fit border border-border bg-surface p-7">
                <h2 className="label-eyebrow">Summary</h2>
                <dl className="mt-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd>{formatMoney({ amount: subtotal, currencyCode })}</dd>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <dt>Shipping</dt>
                    <dd>Complimentary</dd>
                  </div>
                </dl>
                <p className="mt-6 flex justify-between border-t border-border pt-5 text-base">
                  <span>Total</span>
                  <span>{formatMoney({ amount: subtotal, currencyCode })}</span>
                </p>
                <button
                  type="button"
                  className="mt-7 w-full rounded-sm bg-foreground px-8 py-4 text-xs tracking-[0.18em] text-background uppercase transition-colors hover:bg-accent"
                >
                  Proceed to Checkout
                </button>
                <ThemeLink
                  href="/collections/new-arrivals"
                  className="link-underline mt-5 inline-block text-xs tracking-[0.18em] uppercase"
                >
                  Continue Shopping
                </ThemeLink>
              </aside>
            </div>
          )}
        </div>
      </section>
    </StoreLayout>
  );
}
