import fs from "node:fs";
import path from "node:path";
import { destinationFor, pagePaths, withLang } from "../lib/routes.ts";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "out");

function writeRedirect(file: string, target: string) {
  const html = `<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="utf-8">
<meta name="robots" content="noindex">
<link rel="canonical" href="${target}">
<meta http-equiv="refresh" content="0;url=${target}">
<title>Redirect</title>
<script>location.replace(${JSON.stringify(target)})</script>
</head>
<body>
<p><a href="${target}">Continue</a></p>
</body>
</html>
`;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function htmlFiles(dir: string) {
  return fs.readdirSync(dir).filter((name) => name.endsWith(".html"));
}

if (!fs.existsSync(path.join(outDir, "index.html"))) {
  console.error("Missing out/index.html. Run next build before writing redirects.");
  process.exit(1);
}

for (const file of htmlFiles(path.join(root, "site", "pages"))) {
  const slug = file.replace(/\.html$/, "");
  writeRedirect(path.join(outDir, "pages", file), destinationFor("en", slug));
}

for (const file of htmlFiles(path.join(root, "site", "th", "pages"))) {
  const slug = file.replace(/\.html$/, "");
  writeRedirect(path.join(outDir, "th", "pages", file), destinationFor("th", slug));
}

const rootLegacy: Array<[string, string]> = [
  ["stay.html", withLang("en", "/accommodation")],
  ["visit.html", withLang("en", "/contact")],
  ["eco.html", withLang("en", "/story")],
  ["experiences.html", withLang("en", "/experiences")],
  ["contact.html", withLang("en", "/contact")],
];

for (const [file, target] of rootLegacy) {
  writeRedirect(path.join(outDir, file), target);
}

for (const destPath of Object.values(pagePaths)) {
  const dest = withLang("th", destPath);
  const file =
    dest === "/"
      ? path.join(outDir, "th", "index.html")
      : path.join(outDir, "th", dest.replace(/^\/|\/$/g, ""), "index.html");
  writeRedirect(file, dest);
}

const archiveDir = path.join(outDir, "archive");
if (fs.existsSync(archiveDir)) {
  for (const entry of fs.readdirSync(archiveDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    writeRedirect(
      path.join(outDir, "th", "archive", entry.name, "index.html"),
      withLang("th", `/archive/${entry.name}`),
    );
  }
}

console.log("Wrote legacy static redirects into out/.");
