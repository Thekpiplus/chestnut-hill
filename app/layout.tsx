import type { Metadata, Viewport } from "next";
import "@fontsource/anuphan/latin-400.css";
import "@fontsource/anuphan/latin-500.css";
import "@fontsource/anuphan/latin-600.css";
import "@fontsource/anuphan/thai-400.css";
import "@fontsource/anuphan/thai-500.css";
import "@fontsource/anuphan/thai-600.css";
import "@fontsource/mali/latin-600.css";
import "@fontsource/mali/thai-600.css";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท | หาดใหญ่ สงขลา",
    template: `%s | ${site.name.th}`,
  },
  description:
    "อีโค่รีสอร์ทสำหรับคนรักธรรมชาติในหาดใหญ่ ที่พักเงียบ อาหารออร์แกนิก สระหิน เดินป่า และพื้นที่สำหรับเวิร์กช็อปกับโปรแกรมกลุ่ม",
  applicationName: site.name.th,
  icons: { icon: "/favicon.svg" },
  authors: [{ name: site.legalName.th }],
  creator: site.legalName.th,
  publisher: site.legalName.th,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#546a3c",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="bg-paper font-sans text-ink antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.lang=(location.pathname==='/en'||location.pathname.indexOf('/en/')===0)?'en':'th'",
          }}
        />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
