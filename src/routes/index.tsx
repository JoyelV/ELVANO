import { createFileRoute } from "@tanstack/react-router";

import { StoreLayout } from "@/components/StoreLayout";
import { HeroEditorial } from "@/components/HeroEditorial";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { SplitEditorial } from "@/components/SplitEditorial";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PromoBanner } from "@/components/PromoBanner";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BrandStory } from "@/components/BrandStory";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";

import { demoCollections } from "@/data/demo/collections";
import { demoProducts } from "@/data/demo/products";
import { demoTestimonials } from "@/data/demo/testimonials";
import {
  demoBrandStory,
  demoHero,
  demoNewsletter,
  demoPromoBanner,
  demoSplitEditorial,
} from "@/data/demo/sections";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "NOIRÉ — Modern Luxury Storefront Theme" },
      {
        name: "description",
        content:
          "A modern editorial storefront theme for premium fashion, accessories, beauty and lifestyle brands.",
      },
      { property: "og:title", content: "NOIRÉ — Modern Luxury Storefront Theme" },
      {
        property: "og:description",
        content:
          "Editorial luxury ecommerce theme with a monochrome foundation and generous whitespace.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  const showcaseProduct = demoProducts[0];

  return (
    <StoreLayout>
      <HeroEditorial
        eyebrow={demoHero.eyebrow}
        title={demoHero.title}
        description={demoHero.description}
        image={demoHero.image}
        imageAlt={demoHero.imageAlt}
        primaryAction={demoHero.primaryAction}
        secondaryAction={demoHero.secondaryAction}
      />

      <CategoryShowcase
        eyebrow="Collections"
        title="Shop by Category"
        collections={demoCollections}
      />

      <SplitEditorial
        eyebrow={demoSplitEditorial.eyebrow}
        title={demoSplitEditorial.title}
        description={demoSplitEditorial.description}
        image={demoSplitEditorial.image}
        imageAlt={demoSplitEditorial.imageAlt}
        action={demoSplitEditorial.action}
        layout={demoSplitEditorial.layout}
      />

      <FeaturedProducts
        eyebrow="Selected"
        title="Featured Pieces"
        products={demoProducts.slice(0, 4)}
        action={{ label: "View all", url: "/collections/new-arrivals" }}
      />

      <PromoBanner
        eyebrow={demoPromoBanner.eyebrow}
        title={demoPromoBanner.title}
        description={demoPromoBanner.description}
        image={demoPromoBanner.image}
        imageAlt={demoPromoBanner.imageAlt}
        action={demoPromoBanner.action}
      />

      <ProductShowcase
        eyebrow="Piece of the Season"
        product={showcaseProduct}
        details={[
          "Grained calf leather, suede lining",
          "Antique brass hardware",
          "Made in a family-run atelier",
        ]}
        action={{ label: "Shop This Piece", url: showcaseProduct.url }}
      />

      <BrandStory
        eyebrow={demoBrandStory.eyebrow}
        title={demoBrandStory.title}
        description={demoBrandStory.description}
        image={demoBrandStory.image}
        imageAlt={demoBrandStory.imageAlt}
        action={demoBrandStory.action}
        layout={demoBrandStory.layout}
      />

      <Testimonials
        eyebrow="In Their Words"
        title="Considered by those who wear it daily"
        testimonials={demoTestimonials}
      />

      <Newsletter
        title={demoNewsletter.title}
        description={demoNewsletter.description}
        placeholder={demoNewsletter.placeholder}
        buttonLabel={demoNewsletter.buttonLabel}
      />
    </StoreLayout>
  );
}
