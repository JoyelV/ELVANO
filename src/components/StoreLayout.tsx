import type { ReactNode } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { demoAnnouncement } from "@/data/demo/sections";
import { demoFooterMenus, demoMainMenu, demoStore } from "@/data/demo/store";

export interface StoreLayoutProps {
  children: ReactNode;
  cartCount?: number;
}

/**
 * Shared chrome: announcement bar + header above, footer below.
 * Store and menu data are injected here and flow down as props.
 */
export function StoreLayout({ children, cartCount = 2 }: StoreLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar
        message={demoAnnouncement.message}
        link={demoAnnouncement.link}
      />
      <Header store={demoStore} menu={demoMainMenu} cartCount={cartCount} />
      <main className="flex-1">{children}</main>
      <Footer store={demoStore} columns={demoFooterMenus} />
    </div>
  );
}
