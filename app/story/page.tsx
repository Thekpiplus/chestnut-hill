import { StoryView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("th", "story");

export default function Page() {
  return <StoryView lang="th" />;
}
