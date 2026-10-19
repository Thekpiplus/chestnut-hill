import { ExperiencesView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("en", "experiences");

export default function Page() {
  return <ExperiencesView lang="en" />;
}
