import { createFileRoute } from "@tanstack/react-router";

import { StoreLayout } from "@/components/StoreLayout";
import { ProductDetail } from "@/components/ProductDetail";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { demoProducts } from "@/data/demo/products";

export const Route = createFileRoute("/products/$handle")({
  component: ProductPage,
  head: ({ params }) => {
    const product = demoProducts.find((item) => item.handle === params.handle);
    const title = product ? `${product.title} — NOIRÉ` : "Product — NOIRÉ";
    const description =
      product?.description ??
      "A product page in the NOIRÉ modern luxury storefront theme.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.handle}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/products/${params.handle}` }],
    };
  },
});

function ProductPage() {
  const { handle } = Route.useParams();
  const product =
    demoProducts.find((item) => item.handle === handle) ?? demoProducts[0];
  const related = demoProducts.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <StoreLayout>
      <ProductDetail product={product} />
      <FeaturedProducts
        eyebrow="Pairs With"
        title="You May Also Like"
        products={related}
      />
    </StoreLayout>
  );
}
