import { ThemeLink } from "@/components/ThemeLink";
import type { ActionLink } from "@/types/theme";

export interface AnnouncementBarProps {
  message: string;
  link?: ActionLink;
}

export function AnnouncementBar({ message, link }: AnnouncementBarProps) {
  return (
    <div className="bg-foreground text-background">
      <div className="container-noire flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center">
        <p className="text-[0.6875rem] tracking-[0.18em] uppercase">{message}</p>
        {link ? (
          <ThemeLink
            href={link.url}
            className="link-underline text-[0.6875rem] tracking-[0.18em] uppercase opacity-80 hover:opacity-100"
          >
            {link.label}
          </ThemeLink>
        ) : null}
      </div>
    </div>
  );
}
