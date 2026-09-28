import { ThemeLink } from "@/components/ThemeLink";
import type { ActionLink } from "@/types/theme";

export interface PromoBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  action?: ActionLink;
}

export function PromoBanner({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  action,
}: PromoBannerProps) {
  return (
    <section className="relative">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1008}
        loading="lazy"
        className="h-[60vh] w-full object-cover md:h-[80vh]"
      />
      <div className="absolute inset-0 flex items-end">
        <div className="container-noire pb-10 md:pb-20">
          <div className="max-w-xl bg-background/85 p-7 backdrop-blur-sm md:p-10">
            {eyebrow ? <p className="label-eyebrow">{eyebrow}</p> : null}
            <h2 className="display-md mt-3">{title}</h2>
            {description ? (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            ) : null}
            {action ? (
              <ThemeLink
                href={action.url}
                className="mt-7 inline-flex items-center justify-center rounded-sm bg-foreground px-8 py-4 text-xs tracking-[0.18em] text-background uppercase transition-colors hover:bg-accent"
              >
                {action.label}
              </ThemeLink>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
