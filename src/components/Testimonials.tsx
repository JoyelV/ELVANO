import type { Testimonial } from "@/types/theme";

export interface TestimonialsProps {
  eyebrow?: string;
  title: string;
  testimonials: Testimonial[];
}

export function Testimonials({ eyebrow, title, testimonials }: TestimonialsProps) {
  return (
    <section aria-labelledby="testimonials-heading" className="section-y">
      <div className="container-noire">
        {eyebrow ? <p className="label-eyebrow">{eyebrow}</p> : null}
        <h2 id="testimonials-heading" className="display-lg mt-3 max-w-2xl">
          {title}
        </h2>

        <ul className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="border-t border-border pt-6">
              <figure>
                <blockquote className="font-display text-xl leading-snug">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {testimonial.author}
                  {testimonial.meta ? ` — ${testimonial.meta}` : ""}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
