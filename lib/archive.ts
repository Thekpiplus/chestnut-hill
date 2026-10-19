import fs from "fs";
import path from "path";
import { destinationFor, type Lang } from "@/lib/routes";

export type ArchivePage = {
  slug: string;
  title: string;
  description: string;
  html: string;
};

function pageFile(lang: Lang, slug: string) {
  if (slug === "index") {
    return path.join(process.cwd(), lang === "en" ? "site/index.html" : "site/th/index.html");
  }
  const dir = lang === "en" ? "site/pages" : "site/th/pages";
  return path.join(process.cwd(), dir, `${slug}.html`);
}

export function listSlugs() {
  const dir = path.join(process.cwd(), "site/pages");
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".html"))
    .map((file) => file.replace(/\.html$/, ""))
    .sort();
}

function rewriteLinks(html: string, lang: Lang) {
  return html.replace(/href="([^"]+)"/g, (full, href: string) => {
    if (/^(mailto:|tel:|https?:|#)/.test(href)) return full;
    const [clean, hash = ""] = href.split("#");
    const suffix = hash ? `#${hash}` : "";
    const file = clean.split("/").pop() ?? "";
    if (!file.endsWith(".html")) return full;
    const slug = file.replace(/\.html$/, "");
    if (slug === "index") return `href="${lang === "th" ? "/" : "/en"}${suffix}"`;
    return `href="${destinationFor(lang, slug)}${suffix}"`;
  });
}

function tidy(html: string) {
  return html
    .replace(/<section class="section stay-section"[\s\S]*?<\/section>/g, "")
    .replace(/<header class="page-hero[\s\S]*?<\/header>/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<h1\b([^>]*)>/gi, "<h2$1>")
    .replace(/<\/h1>/gi, "</h2>")
    .replace(/<\/?font\b[^>]*>/gi, "")
    .replace(/&#8203;|&zwnj;|\u200B/g, "")
    .replace(/(?:&nbsp;\s*){2,}/gi, " ")
    .replace(/<img\b[^>]*>/gi, (tag) => (tag.includes("chestnut-hill-logo") ? tag : ""))
    .trim();
}

export function readArchive(lang: Lang, slug: string): ArchivePage | null {
  const file = pageFile(lang, slug);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const title = raw.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() || slug;
  let description = raw.match(/name="description" content="([^"]*)"/)?.[1]?.trim() || "";
  if (
    /คลังข้อมูล|Weebly|export lists|ข้อมูลส่งออก|rebuild keeps the original|from the archive|imported content|Recovered from/i.test(
      description,
    )
  ) {
    description = "";
  }
  const main = raw.match(/<main id="main">([\s\S]*?)<\/main>/)?.[1] ?? "";
  const html = tidy(rewriteLinks(main, lang));
  if (!description) {
    description = plainPreview(html, 155);
  }
  return { slug, title, description, html };
}

export function plainPreview(html: string, max = 280) {
  const text = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((match) =>
      match[1]
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/\s+/g, " ")
        .trim(),
    )
    .find((paragraph) => paragraph.length > 40);
  if (!text) return "";
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const last = cut.lastIndexOf(" ");
  return `${last > 80 ? cut.slice(0, last) : cut}…`;
}
