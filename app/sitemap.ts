import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { listSlugs } from "@/lib/archive";
import { pagePaths, sectionForSlug, withLang, type PageKey } from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = (Object.keys(pagePaths) as PageKey[]).flatMap((key) => {
    const path = pagePaths[key];
    const th = withLang("th", path);
    const en = withLang("en", path);
    return [
      {
        url: `${site.domain}${th}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: key === "home" ? 1 : 0.8,
        alternates: {
          languages: {
            th: `${site.domain}${th}`,
            en: `${site.domain}${en}`,
            "x-default": `${site.domain}${th}`,
          },
        },
      },
      {
        url: `${site.domain}${en}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: key === "home" ? 0.9 : 0.7,
        alternates: {
          languages: {
            th: `${site.domain}${th}`,
            en: `${site.domain}${en}`,
            "x-default": `${site.domain}${th}`,
          },
        },
      },
    ];
  });

  const archive = listSlugs()
    .filter((slug) => !sectionForSlug[slug])
    .flatMap((slug) => {
      const th = `${site.domain}${withLang("th", `/archive/${slug}`)}`;
      const en = `${site.domain}${withLang("en", `/archive/${slug}`)}`;
      const languages = { th, en, "x-default": th };
      return [
        {
          url: th,
          lastModified,
          changeFrequency: "yearly" as const,
          priority: 0.4,
          alternates: { languages },
        },
        {
          url: en,
          lastModified,
          changeFrequency: "yearly" as const,
          priority: 0.3,
          alternates: { languages },
        },
      ];
    });

  return [...pages, ...archive];
}
