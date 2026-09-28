import type { ActionLink } from "@/types/theme";

/** Demo section content. Theme-level placeholder copy, not merchant data. */

export const demoAnnouncement = {
  message: "Complimentary shipping on all orders — Explore the new season",
  link: { label: "Shop now", url: "/collections/new-arrivals" } as ActionLink,
};

export const demoHero = {
  eyebrow: "Autumn / Winter Edit",
  title: "The New\nEssentials",
  description:
    "A restrained wardrobe of tailored volumes, natural fibres and enduring neutrals — built to be worn far beyond a single season.",
  image: "/images/hero-editorial.jpg",
  imageAlt: "Model wearing an oversized wool coat against a plaster wall",
  primaryAction: { label: "Explore Collection", url: "/collections/new-arrivals" } as ActionLink,
  secondaryAction: { label: "Shop New Arrivals", url: "/collections/women" } as ActionLink,
};

export const demoSplitEditorial = {
  eyebrow: "The Atelier",
  title: "Crafted for\nEveryday Icons",
  description:
    "Each piece begins as a single pattern, refined until nothing remains that does not serve the garment. Natural fibres, honest construction, and a finish that improves with wear.",
  image: "/images/editorial.jpg",
  imageAlt: "Folded cashmere knitwear and leather accessories on a stone surface",
  action: { label: "Discover the Story", url: "/collections/women" } as ActionLink,
  layout: "image-left" as const,
};

export const demoPromoBanner = {
  eyebrow: "Seasonal Campaign",
  title: "A Wardrobe in Quiet Tones",
  description:
    "Nine pieces, endlessly combined. The campaign edit is now available in full.",
  image: "/images/promo-banner.jpg",
  imageAlt: "Two models in neutral tailoring walking through a sunlit gallery",
  action: { label: "View the Campaign", url: "/collections/new-arrivals" } as ActionLink,
};

export const demoBrandStory = {
  eyebrow: "Our Approach",
  title: "Designed with\nIntention",
  description:
    "This theme is built for brands that value longevity over novelty — where materials are chosen for how they age and every detail is deliberate.",
  image: "/images/story.jpg",
  imageAlt: "Artisan hand-stitching a leather wallet at a workbench",
  action: { label: "Read Our Story", url: "/collections/men" } as ActionLink,
  layout: "image-right" as const,
};

export const demoNewsletter = {
  title: "Join the List",
  description:
    "Early access to new collections, atelier notes and private previews. No noise.",
  buttonLabel: "Subscribe",
  placeholder: "Your email address",
};
