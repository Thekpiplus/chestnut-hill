import { HomeView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("th", "home");

export default function Page() {
  return <HomeView lang="th" />;
}
