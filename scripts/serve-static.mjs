import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../out");
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
  ".json": "application/json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function resolvePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const full = path.resolve(root, decoded);
  const relative = path.relative(root, full);
  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;
  return full;
}

function send(res, status, file) {
  const body = fs.readFileSync(file);
  res.writeHead(status, {
    "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream",
    "Content-Length": body.length,
  });
  res.end(body);
}

if (!fs.existsSync(path.join(root, "index.html"))) {
  console.error("Missing out/index.html. Run npm run build first.");
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url || "/", "http://localhost");
  const file = resolvePath(url.pathname);
  if (!file) {
    res.writeHead(400);
    res.end();
    return;
  }

  let target = file;
  const exists = fs.existsSync(file);
  const stat = exists ? fs.statSync(file) : null;

  if (stat?.isDirectory()) {
    if (!url.pathname.endsWith("/")) {
      res.writeHead(308, { Location: `${url.pathname}/${url.search}` });
      res.end();
      return;
    }
    target = path.join(file, "index.html");
  } else if (!exists) {
    const index = path.join(file, "index.html");
    if (fs.existsSync(index)) {
      const location = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
      res.writeHead(308, { Location: `${location}${url.search}` });
      res.end();
      return;
    }
    target = path.join(root, "404.html");
    if (fs.existsSync(target)) send(res, 404, target);
    else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
    }
    return;
  }

  if (!fs.existsSync(target)) {
    const missing = path.join(root, "404.html");
    if (fs.existsSync(missing)) send(res, 404, missing);
    else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
    }
    return;
  }

  send(res, 200, target);
});

server.listen(port, () => {
  console.log(`Static site at http://localhost:${port}`);
});
