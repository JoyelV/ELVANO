import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { StoreLayout } from "@/components/StoreLayout";
import { ProductCard } from "@/components/ProductCard";
import { demoProducts } from "@/data/demo/products";

export const Route = createFileRoute("/search")({
  component: SearchPage,
  head: () => ({
    meta: [
      { title: "Search — NOIRÉ" },
      {
        name: "description",
        content: "Search the catalogue in the NOIRÉ modern luxury storefront theme.",
      },
      { property: "og:title", content: "Search — NOIRÉ" },
      {
        property: "og:description",
        content: "Search the catalogue in the NOIRÉ modern luxury storefront theme.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/search" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
});

function SearchPage() {
  const [query, setQuery] = useState("");
  const results = query
    ? demoProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase()),
      )
    : demoProducts;

  return (
    <StoreLayout>
      <section className="border-b border-border">
        <div className="container-noire py-14 md:py-20">
          <p className="label-eyebrow">Search</p>
          <h1 className="display-lg mt-3">What are you looking for?</h1>
          <form
            role="search"
            onSubmit={(event) => event.preventDefault()}
            className="mt-8 max-w-xl"
          >
            <label htmlFor="search-input" className="sr-only">
              Search products
            </label>
            <input
              id="search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search coats, knitwear, accessories…"
              className="w-full border-b border-border bg-transparent px-1 py-3 text-base placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            />
          </form>
        </div>
      </section>

      <section className="section-y">
        <div className="container-noire">
          <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {results.length} results
          </p>
          {results.length > 0 ? (
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-base text-muted-foreground">
              No pieces match that search. Try a broader term.
            </p>
          )}
        </div>
      </section>
    </StoreLayout>
  );
}
