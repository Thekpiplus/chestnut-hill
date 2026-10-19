import { HomeView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("en", "home");

export default function Page() {
  return <HomeView lang="en" />;
}
