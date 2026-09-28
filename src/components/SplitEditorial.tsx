import { ThemeLink } from "@/components/ThemeLink";
import type { ActionLink } from "@/types/theme";

export interface SplitEditorialProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  action?: ActionLink;
  /** Controls which side the image sits on. One component, both variants. */
  layout?: "image-left" | "image-right";
}

export function SplitEditorial({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  action,
  layout = "image-left",
}: SplitEditorialProps) {
  const imageFirst = layout === "image-left";

  return (
    <section className="section-y bg-surface">
      <div className="container-noire grid items-center gap-10 md:grid-cols-12 md:gap-16">
        <div
          className={`md:col-span-7 ${imageFirst ? "md:order-1" : "md:order-2"}`}
        >
          <img
            src={image}
            alt={imageAlt}
            width={1200}
            height={1408}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover md:aspect-[5/4]"
          />
        </div>
        <div
          className={`md:col-span-5 ${imageFirst ? "md:order-2" : "md:order-1"}`}
        >
          {eyebrow ? <p className="label-eyebrow">{eyebrow}</p> : null}
          <h2 className="display-lg mt-3 whitespace-pre-line">{title}</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
          {action ? (
            <ThemeLink
              href={action.url}
              className="link-underline mt-8 inline-block text-xs tracking-[0.18em] uppercase"
            >
              {action.label}
            </ThemeLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
