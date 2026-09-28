import { ThemeLink } from "@/components/ThemeLink";
import type { ActionLink } from "@/types/theme";

export interface HeroEditorialProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction: ActionLink;
  secondaryAction?: ActionLink;
}

export function HeroEditorial({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
}: HeroEditorialProps) {
  return (
    <section aria-labelledby="hero-heading" className="border-b border-border">
      <div className="container-noire grid items-center gap-10 py-14 md:grid-cols-12 md:gap-16 md:py-24">
        <div className="rise-in md:col-span-5">
          {eyebrow ? <p className="label-eyebrow">{eyebrow}</p> : null}
          <h1 id="hero-heading" className="display-xl mt-5 whitespace-pre-line">
            {title}
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ThemeLink
              href={primaryAction.url}
              className="inline-flex items-center justify-center rounded-sm bg-foreground px-8 py-4 text-xs tracking-[0.18em] text-background uppercase transition-colors hover:bg-accent"
            >
              {primaryAction.label}
            </ThemeLink>
            {secondaryAction ? (
              <ThemeLink
                href={secondaryAction.url}
                className="inline-flex items-center justify-center rounded-sm border border-foreground px-8 py-4 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-foreground hover:text-background"
              >
                {secondaryAction.label}
              </ThemeLink>
            ) : null}
          </div>
        </div>

        <div className="md:col-span-7">
          <img
            src={image}
            alt={imageAlt}
            width={1200}
            height={1504}
            className="h-[60vh] w-full object-cover md:h-[78vh]"
          />
        </div>
      </div>
    </section>
  );
}
