import { ContactView } from "@/components/views";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("th", "contact");

export default function Page() {
  return <ContactView lang="th" />;
}
