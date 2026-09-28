import type { Collection } from "@/types/theme";

/** Demo fixtures only — never real merchant collections. */
export const demoCollections: Collection[] = [
  {
    id: "demo-collection-1",
    title: "New Arrivals",
    handle: "new-arrivals",
    url: "/collections/new-arrivals",
    image: "/images/category-4.jpg",
    description: "The latest additions to the seasonal wardrobe.",
    productCount: 24,
  },
  {
    id: "demo-collection-2",
    title: "Women",
    handle: "women",
    url: "/collections/women",
    image: "/images/category-1.jpg",
    description: "Fluid silhouettes in silk, wool and cashmere.",
    productCount: 42,
  },
  {
    id: "demo-collection-3",
    title: "Men",
    handle: "men",
    url: "/collections/men",
    image: "/images/category-2.jpg",
    description: "Considered tailoring built for daily wear.",
    productCount: 31,
  },
  {
    id: "demo-collection-4",
    title: "Accessories",
    handle: "accessories",
    url: "/collections/accessories",
    image: "/images/category-3.jpg",
    description: "Leather goods, jewellery and finishing pieces.",
    productCount: 18,
  },
];
