<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## NOIRÉ theme structure
- Each home-page section is its own component in `src/components/` named after its semantic role (HeroEditorial, CategoryShowcase, SplitEditorial, FeaturedProducts, PromoBanner, ProductShowcase, BrandStory, Testimonials, Newsletter, Header, Footer) — the AMnova theme importer maps component names to ThemeSchema sections.
- Runtime data contracts live in `src/types/theme.ts`; demo fixtures live only in `src/data/demo/` with `demo-*` ids, so no merchant data is baked into components.
- All colors, radii, spacing and type scales are tokens in `src/styles.css`; components never hard-code color values.
- Images are local files in `public/images/` and fonts are system stacks — no external CDNs, so the exported ZIP is fully portable.
