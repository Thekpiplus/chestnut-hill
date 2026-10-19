import { GalleryView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("th", "gallery");

export default function Page() {
  return <GalleryView lang="th" />;
}
