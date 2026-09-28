import { useState, type FormEvent } from "react";

export interface NewsletterProps {
  title: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  /** Host runtime connects its own subscribe handler here. */
  onSubscribe?: (email: string) => void;
}

export function Newsletter({
  title,
  description,
  placeholder = "Your email address",
  buttonLabel = "Subscribe",
  onSubscribe,
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    onSubscribe?.(email);
    setSubmitted(true);
    setEmail("");
  }

  return (
    <section aria-labelledby="newsletter-heading" className="section-y bg-foreground text-background">
      <div className="container-noire grid gap-8 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <h2 id="newsletter-heading" className="display-md">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">
              {description}
            </p>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={placeholder}
              className="w-full border-b border-background/40 bg-transparent px-1 py-3 text-sm placeholder:text-background/50 focus:border-background focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 border border-background px-8 py-3 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-background hover:text-foreground"
            >
              {buttonLabel}
            </button>
          </div>
          <p aria-live="polite" className="mt-3 h-4 text-xs opacity-70">
            {submitted ? "Thank you — please confirm via email." : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
