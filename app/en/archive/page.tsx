import { ArchiveIndexView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("en", "archive");

export default function Page() {
  return <ArchiveIndexView lang="en" />;
}
