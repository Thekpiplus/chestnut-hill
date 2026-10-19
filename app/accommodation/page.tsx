import { AccommodationView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("th", "accommodation");

export default function Page() {
  return <AccommodationView lang="th" />;
}
