import { GalleryView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("en", "gallery");

export default function Page() {
  return <GalleryView lang="en" />;
}
