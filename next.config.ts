import type { NextConfig } from "next";
import fs from "fs";
import path from "path";
import { destinationFor, type Lang } from "./lib/routes";

function htmlRedirects(dir: string, sourcePrefix: string, lang: Lang) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".html"))
    .map((file) => ({
      source: `${sourcePrefix}/${file}`,
      destination: destinationFor(lang, file.replace(/\.html$/, "")),
      permanent: true as const,
    }));
}

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Thai is the default locale at the root. Keep old /th URLs working.
      { source: "/th", destination: "/", permanent: true },
      { source: "/th/:path*", destination: "/:path*", permanent: true },
      { source: "/th/index.html", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      // Older English marketing pages → English routes
      { source: "/stay.html", destination: "/en/accommodation", permanent: true },
      { source: "/visit.html", destination: "/en/contact", permanent: true },
      { source: "/eco.html", destination: "/en/story", permanent: true },
      { source: "/experiences.html", destination: "/en/experiences", permanent: true },
      { source: "/contact.html", destination: "/en/contact", permanent: true },
      ...htmlRedirects(path.join(process.cwd(), "site/pages"), "/pages", "en"),
      ...htmlRedirects(path.join(process.cwd(), "site/th/pages"), "/th/pages", "th"),
    ];
  },
};

export default nextConfig;
