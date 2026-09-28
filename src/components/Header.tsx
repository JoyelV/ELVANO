import { useState } from "react";
import { Menu as MenuIcon, Search, ShoppingBag, User, X } from "lucide-react";
import { ThemeLink } from "@/components/ThemeLink";
import type { Menu, Store } from "@/types/theme";

export interface HeaderProps {
  store: Store;
  menu: Menu;
  cartCount?: number;
  searchUrl?: string;
  accountUrl?: string;
  cartUrl?: string;
}

export function Header({
  store,
  menu,
  cartCount = 0,
  searchUrl = "/search",
  accountUrl = "/search",
  cartUrl = "/cart",
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container-noire flex h-16 items-center justify-between gap-4 md:h-20">
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="noire-mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
          className="-ml-2 p-2 md:hidden"
        >
          {mobileOpen ? <X size={20} aria-hidden /> : <MenuIcon size={20} aria-hidden />}
        </button>

        <ThemeLink
          href="/"
          className="font-display text-xl tracking-[0.3em] uppercase md:text-2xl"
        >
          {store.name}
        </ThemeLink>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {menu.items.map((item) => (
              <li key={item.id}>
                <ThemeLink
                  href={item.url}
                  className="link-underline text-xs tracking-[0.18em] uppercase"
                >
                  {item.title}
                </ThemeLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 md:gap-3">
          <ThemeLink href={searchUrl} aria-label="Search" className="p-2">
            <Search size={18} aria-hidden />
          </ThemeLink>
          <ThemeLink
            href={accountUrl}
            aria-label="Account"
            className="hidden p-2 md:inline-flex"
          >
            <User size={18} aria-hidden />
          </ThemeLink>
          <ThemeLink
            href={cartUrl}
            aria-label={`Cart, ${cartCount} items`}
            className="relative -mr-2 p-2"
          >
            <ShoppingBag size={18} aria-hidden />
            {cartCount > 0 ? (
              <span className="absolute top-0.5 right-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[0.625rem] text-accent-foreground">
                {cartCount}
              </span>
            ) : null}
          </ThemeLink>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="noire-mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="container-noire flex flex-col py-2">
            {menu.items.map((item) => (
              <li key={item.id}>
                <ThemeLink
                  href={item.url}
                  onClick={() => setMobileOpen(false)}
                  className="block border-b border-border py-4 text-sm tracking-[0.18em] uppercase last:border-b-0"
                >
                  {item.title}
                </ThemeLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
