import type { Metadata } from "next";
import { heroPhoto } from "@/content/photos";
import { copy, site } from "@/content/site";
import { plainPreview } from "@/lib/archive";
import { withLang, type Lang, type PageKey } from "@/lib/routes";

function pagePath(lang: Lang, key: PageKey) {
  return withLang(lang, key === "home" ? "/" : `/${key}`);
}

function absoluteTitle(lang: Lang, pageTitle: string) {
  const brand = site.name[lang];
  return pageTitle.includes(brand) ? pageTitle : `${pageTitle} | ${brand}`;
}

function socialImage(lang: Lang) {
  return {
    url: heroPhoto.src,
    width: heroPhoto.width,
    height: heroPhoto.height,
    alt: heroPhoto.alt[lang],
  };
}

export function pageMeta(lang: Lang, key: PageKey): Metadata {
  const page = copy[lang].seo[key];
  const path = pagePath(lang, key);
  const thPath = pagePath("th", key);
  const enPath = pagePath("en", key);
  const titleText = absoluteTitle(lang, page.title);

  return {
    title: { absolute: titleText },
    description: page.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: path,
      languages: {
        th: thPath,
        en: enPath,
        "x-default": thPath,
      },
    },
    openGraph: {
      title: titleText,
      description: page.description,
      url: path,
      siteName: site.name[lang],
      locale: lang === "th" ? "th_TH" : "en_US",
      alternateLocale: lang === "th" ? ["en_US"] : ["th_TH"],
      type: "website",
      images: [socialImage(lang), { url: "/chestnut-hill-logo.jpg", width: 855, height: 855, alt: site.name[lang] }],
    },
    twitter: {
      card: "summary_large_image",
      title: titleText,
      description: page.description,
      images: [heroPhoto.src],
    },
  };
}

export function cleanArchiveTitle(raw: string, lang: Lang) {
  const brand = site.name[lang];
  let title = raw
    .replace(/\s*[|·–—-]\s*Chestnut Hill(?:\s+Eco(?:\s+Resort)?)?.*$/i, "")
    .replace(/^Chestnut Hill(?:\s+Eco(?:\s+Resort)?)?\s*[|·–—-]\s*/i, "")
    .replace(/\s*[|·–—-]\s*เชสท์นัท(?:\s*ฮิลล์)?(?:\s*อีโค่)?(?:\s*รีสอร์ท)?.*$/u, "")
    .replace(/^เชสท์นัท(?:\s*ฮิลล์)?(?:\s*อีโค่)?(?:\s*รีสอร์ท)?\s*[|·–—-]\s*/u, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!title || title.toLowerCase() === brand.toLowerCase()) {
    title = raw.trim() || brand;
  }
  return title;
}

export function archiveMeta(
  lang: Lang,
  slug: string,
  title: string,
  description: string,
  html = "",
): Metadata {
  const cleaned = cleanArchiveTitle(title, lang);
  const brand = site.name[lang];
  const fullTitle = cleaned.includes(brand) ? cleaned : `${cleaned} | ${brand}`;
  const preview = html ? plainPreview(html, 155) : "";
  const desc =
    description.trim() ||
    preview ||
    (lang === "th"
      ? `${cleaned} ที่เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท หาดใหญ่ สงขลา`
      : `${cleaned} at Chestnut Hill Eco Resort, Hat Yai, Songkhla.`);
  const path = withLang(lang, `/archive/${slug}`);
  const thPath = `/archive/${slug}`;
  const enPath = `/en/archive/${slug}`;

  return {
    title: { absolute: fullTitle },
    description: desc,
    robots: { index: true, follow: true },
    alternates: {
      canonical: path,
      languages: {
        th: thPath,
        en: enPath,
        "x-default": thPath,
      },
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: path,
      siteName: brand,
      locale: lang === "th" ? "th_TH" : "en_US",
      alternateLocale: lang === "th" ? ["en_US"] : ["th_TH"],
      type: "article",
      images: [socialImage(lang)],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [heroPhoto.src],
    },
  };
}
