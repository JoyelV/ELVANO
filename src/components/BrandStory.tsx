import { SplitEditorial, type SplitEditorialProps } from "@/components/SplitEditorial";

export type BrandStoryProps = SplitEditorialProps;

/**
 * Brand story section — an editorial image + text block. Semantically distinct
 * from SplitEditorial for importer mapping, visually built on the same layout.
 */
export function BrandStory(props: BrandStoryProps) {
  return <SplitEditorial {...props} />;
}
