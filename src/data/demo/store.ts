import type { Menu, Store } from "@/types/theme";

/** Demo fixtures only. Replaced by runtime store data on import. */
export const demoStore: Store = {
  name: "NOIRÉ",
  description:
    "A modern editorial storefront designed for premium fashion, accessories, beauty, lifestyle and luxury brands.",
  url: "/",
};

export const demoMainMenu: Menu = {
  id: "demo-menu-main",
  items: [
    { id: "demo-menu-item-1", title: "Shop", url: "/collections/new-arrivals" },
    { id: "demo-menu-item-2", title: "Collections", url: "/collections/women" },
    { id: "demo-menu-item-3", title: "New Arrivals", url: "/collections/new-arrivals" },
    { id: "demo-menu-item-4", title: "About", url: "/collections/men" },
  ],
};

export const demoFooterMenus: { title: string; items: Menu["items"] }[] = [
  {
    title: "Shop",
    items: [
      { id: "demo-footer-shop-1", title: "New Arrivals", url: "/collections/new-arrivals" },
      { id: "demo-footer-shop-2", title: "Women", url: "/collections/women" },
      { id: "demo-footer-shop-3", title: "Men", url: "/collections/men" },
      { id: "demo-footer-shop-4", title: "Accessories", url: "/collections/accessories" },
    ],
  },
  {
    title: "Information",
    items: [
      { id: "demo-footer-info-1", title: "Our Story", url: "/collections/women" },
      { id: "demo-footer-info-2", title: "Materials", url: "/collections/women" },
      { id: "demo-footer-info-3", title: "Sustainability", url: "/collections/women" },
      { id: "demo-footer-info-4", title: "Stockists", url: "/collections/women" },
    ],
  },
  {
    title: "Customer Care",
    items: [
      { id: "demo-footer-care-1", title: "Shipping", url: "/search" },
      { id: "demo-footer-care-2", title: "Returns", url: "/search" },
      { id: "demo-footer-care-3", title: "Size Guide", url: "/search" },
      { id: "demo-footer-care-4", title: "Contact", url: "/search" },
    ],
  },
  {
    title: "Social",
    items: [
      { id: "demo-footer-social-1", title: "Instagram", url: "/" },
      { id: "demo-footer-social-2", title: "Pinterest", url: "/" },
      { id: "demo-footer-social-3", title: "Journal", url: "/" },
    ],
  },
];
