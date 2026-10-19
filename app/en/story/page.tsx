import { StoryView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("en", "story");

export default function Page() {
  return <StoryView lang="en" />;
}
