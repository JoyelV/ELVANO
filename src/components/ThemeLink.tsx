import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes } from "react";

type ThemeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const RouterLink = Link as unknown as React.ComponentType<
  { to: string } & AnchorHTMLAttributes<HTMLAnchorElement>
>;

/**
 * Single link primitive for the theme. Every navigation target is a plain
 * semantic URL string supplied by data (collection.url, product.url, menu item
 * url), never a hard-coded merchant route.
 */
export function ThemeLink({ href, children, ...rest }: ThemeLinkProps) {
  return (
    <RouterLink to={href} {...rest}>
      {children}
    </RouterLink>
  );
}
