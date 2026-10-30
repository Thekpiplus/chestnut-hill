import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Publish the site as files in out/. Static hosts cannot run Next redirects,
  // so legacy URLs are written as HTML redirects after the build.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
