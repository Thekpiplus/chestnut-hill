import { copy } from "@/content/site";
import { readArchive } from "@/lib/archive";
import type { Lang } from "@/lib/routes";

export function SourceNotes({
  lang,
  slugs,
  openFirst = false,
}: {
  lang: Lang;
  slugs: readonly string[];
  openFirst?: boolean;
}) {
  const empty = copy[lang].emptyBody;
  return (
    <div className="space-y-3">
      {slugs.map((slug, index) => {
        const page = readArchive(lang, slug);
        if (!page) return null;
        return (
          <details
            key={slug}
            id={slug}
            open={openFirst && index === 0}
            className="rounded-2xl border border-line bg-linen px-5 py-4"
          >
            <summary className="cursor-pointer font-medium text-moss-deep">{page.title}</summary>
            {page.html ? (
              <div className="archive-body mt-4" dangerouslySetInnerHTML={{ __html: page.html }} />
            ) : (
              <p className="mt-4 text-muted">{page.description || empty}</p>
            )}
          </details>
        );
      })}
    </div>
  );
}

export function ExperienceSections({ lang, slugs }: { lang: Lang; slugs: readonly string[] }) {
  const text = copy[lang];
  return (
    <div className="space-y-8">
      {slugs.map((slug) => {
        const page = readArchive(lang, slug);
        if (!page) return null;
        const showCooking = slug === "explore-thai-cooking";
        return (
          <article key={slug} id={slug} className="scroll-mt-28 rounded-2xl bg-linen p-6 shadow-soft">
            <h3 className="font-display text-2xl leading-snug text-moss-deep">{page.title}</h3>
            {showCooking ? <p className="mt-3 font-medium text-moss-deep">{text.cookingFact}</p> : null}
            {page.html ? (
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-medium text-moss">{text.readMore}</summary>
                <div className="archive-body mt-4" dangerouslySetInnerHTML={{ __html: page.html }} />
              </details>
            ) : page.description ? (
              <p className="mt-4 text-muted">{page.description}</p>
            ) : (
              <p className="mt-4 text-muted">{text.emptyBody}</p>
            )}
          </article>
        );
      })}
    </div>
  );
}
