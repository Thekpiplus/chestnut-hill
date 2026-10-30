export type Lang = "en" | "th";

export const defaultLang: Lang = "th";

export type PageKey =
  | "home"
  | "story"
  | "accommodation"
  | "experiences"
  | "gallery"
  | "contact"
  | "archive";

export const pagePaths: Record<PageKey, string> = {
  home: "/",
  story: "/story",
  accommodation: "/accommodation",
  experiences: "/experiences",
  gallery: "/gallery",
  contact: "/contact",
  archive: "/archive",
};

/** Old page slugs that now live on a section page. Everything else stays at /archive/[slug]. */
export const sectionForSlug: Record<string, string> = {
  "our-founding-story": "/story",
  "how-are-we-an-eco-resort": "/story",
  "chestnut-eco-concept": "/story",
  "book-now": "/accommodation",
  facilities: "/accommodation",
  gallery: "/gallery",
  "contact-us": "/contact",
  "visiting-us": "/contact",
  "driving-through-malay-border": "/contact",
  "crossing-the-border-by-train": "/contact",
  "songkhla-old-town": "/contact",
  "activities-and-retreat": "/experiences",
  "explore-thai-cooking": "/experiences",
  "hikes-in-the-forrest": "/experiences",
  "organic-garden-and-orchard": "/experiences",
  "lae-pa-cafe": "/experiences",
  "islands-extension": "/experiences",
  "chestnut-hill-niramaya-holistic-wellness-center": "/experiences",
  "massage-and-treatment-at-niramaya": "/experiences",
  "art-and-science-of-qigong-healing": "/experiences",
  "self-guided-retreat-at-chestnut": "/experiences",
  "body-works-workshops-venue": "/experiences",
  "volunteering-opportunity": "/experiences",
  "jobs-opportunity": "/experiences",
  "yoga-teacher-training-course-yttc": "/experiences",
  "education-in-yoga-retreat": "/experiences",
  "love-your-health-detox-retreat": "/experiences",
  "ayurveda-for-rejuvenation-retreat": "/experiences",
  "taiji-yoga-meditation-retreat": "/experiences",
  "cultivating-self-awareness-retreat": "/experiences",
  "art-and-music-for-complementary-health-and-self-development": "/experiences",
  "integrative-deep-tissue-hands-on-healing": "/experiences",
  "saturday-art-class-project": "/experiences",
  "all-pages": "/archive",
};

export const storySources = ["how-are-we-an-eco-resort"] as const;

/** Offerings shown on Nature & Experiences. Wellness, venue rental, and course/retreat pages are omitted. */
export const experienceGroups = [
  {
    id: "here",
    slugs: [
      "activities-and-retreat",
      "explore-thai-cooking",
      "hikes-in-the-forrest",
      "organic-garden-and-orchard",
      "lae-pa-cafe",
      "islands-extension",
    ],
  },
  {
    id: "published",
    slugs: ["volunteering-opportunity", "jobs-opportunity"],
  },
] as const;

/** Thai is the default locale at the root. English lives under /en. */
export function withLang(lang: Lang, path: string) {
  const [pathname, hash = ""] = path.split("#");
  const bare = pathname.replace(/\/+$/, "") || "/";
  const localized = lang === "en" ? (bare === "/" ? "/en" : `/en${bare}`) : bare;
  const slashed = localized === "/" ? "/" : `${localized}/`;
  return hash ? `${slashed}#${hash}` : slashed;
}

export function pathKey(pathname: string) {
  const bare = pathname.split("#")[0]?.replace(/\/+$/, "") || "/";
  return bare === "" ? "/" : bare;
}

/** Match a static URL, including directory children such as /archive/slug/. */
export function isActivePath(pathname: string, href: string, exact = false) {
  const current = pathKey(pathname);
  const target = pathKey(href);
  if (exact || target === "/" || target === "/en") return current === target;
  return current === target || current.startsWith(`${target}/`);
}

export function destinationFor(lang: Lang, slug: string) {
  const path = sectionForSlug[slug] ?? `/archive/${slug}`;
  return withLang(lang, path);
}

export function swapLang(pathname: string, target: Lang) {
  const [pathnameOnly, hash = ""] = pathname.split("#");
  const withoutLang = pathnameOnly.replace(/^\/en(?=\/|$)/, "") || "/";
  const next = withLang(target, withoutLang);
  return hash ? `${next.split("#")[0]}#${hash}` : next;
}

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "th";
}
