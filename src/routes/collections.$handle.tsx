import { createFileRoute } from "@tanstack/react-router";

import { StoreLayout } from "@/components/StoreLayout";
import { ProductCard } from "@/components/ProductCard";
import { Newsletter } from "@/components/Newsletter";
import { demoCollections } from "@/data/demo/collections";
import { demoProducts } from "@/data/demo/products";
import { demoNewsletter } from "@/data/demo/sections";

export const Route = createFileRoute("/collections/$handle")({
  component: CollectionPage,
  head: ({ params }) => ({
    meta: [
      { title: `${titleFor(params.handle)} — NOIRÉ` },
      {
        name: "description",
        content: `Browse the ${titleFor(params.handle)} edit in the NOIRÉ luxury storefront theme.`,
      },
      { property: "og:title", content: `${titleFor(params.handle)} — NOIRÉ` },
      {
        property: "og:description",
        content: `Browse the ${titleFor(params.handle)} edit in the NOIRÉ luxury storefront theme.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `/collections/${params.handle}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `/collections/${params.handle}` }],
  }),
});

function titleFor(handle: string) {
  const match = demoCollections.find((collection) => collection.handle === handle);
  if (match) return match.title;
  return handle
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function CollectionPage() {
  const { handle } = Route.useParams();
  const collection = demoCollections.find((item) => item.handle === handle);
  const products = demoProducts;

  return (
    <StoreLayout>
      <section className="border-b border-border">
        <div className="container-noire py-14 md:py-20">
          <p className="label-eyebrow">Collection</p>
          <h1 className="display-lg mt-3">{titleFor(handle)}</h1>
          {collection?.description ? (
            <p className="mt-4 max-w-lg text-base text-muted-foreground">
              {collection.description}
            </p>
          ) : null}
          <p className="mt-6 text-xs tracking-[0.18em] text-muted-foreground uppercase">
            {products.length} pieces
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-noire grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Newsletter
        title={demoNewsletter.title}
        description={demoNewsletter.description}
        placeholder={demoNewsletter.placeholder}
        buttonLabel={demoNewsletter.buttonLabel}
      />
    </StoreLayout>
  );
}
