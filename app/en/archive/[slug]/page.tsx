import { notFound } from "next/navigation";
import { ArchiveArticleView } from "@/components/views";
import { listSlugs, readArchive } from "@/lib/archive";
import { archiveMeta } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return listSlugs()
    .filter((slug) => readArchive("en", slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = readArchive("en", slug);
  if (!page) return {};
  return archiveMeta("en", slug, page.title, page.description, page.html);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!readArchive("en", slug)) notFound();
  return <ArchiveArticleView lang="en" slug={slug} />;
}
