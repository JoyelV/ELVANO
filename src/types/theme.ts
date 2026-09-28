/**
 * NOIRÉ — runtime data boundary.
 *
 * These interfaces describe the shape of data the host platform supplies at
 * runtime. Components depend only on these types, never on demo fixtures.
 */

export interface Store {
  name: string;
  logo?: string;
  description?: string;
  url?: string;
}

export interface MenuItem {
  id: string;
  title: string;
  url: string;
}

export interface Menu {
  id: string;
  items: MenuItem[];
}

export interface Money {
  amount: number;
  currencyCode: string;
}

export interface Product {
  id: string;
  title: string;
  handle: string;
  url: string;
  price: Money;
  compareAtPrice?: Money;
  image: string;
  hoverImage?: string;
  badge?: string;
  description?: string;
  rating?: number;
  reviewCount?: number;
  vendor?: string;
}

export interface Collection {
  id: string;
  title: string;
  handle: string;
  url: string;
  image: string;
  description?: string;
  productCount?: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  meta?: string;
}

export interface ActionLink {
  label: string;
  url: string;
}

export interface CartLine {
  id: string;
  product: Product;
  quantity: number;
  variantTitle?: string;
}
