import type { Metadata, Viewport } from "next";
import { Anuphan, Mali } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";
import "./globals.css";

const mali = Mali({
  weight: "600",
  subsets: ["latin", "thai"],
  variable: "--font-mali",
  display: "swap",
});

const anuphan = Anuphan({
  weight: ["400", "500", "600"],
  subsets: ["latin", "thai"],
  variable: "--font-anuphan",
  display: "swap",
});

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
    <html lang="th" className={`${mali.variable} ${anuphan.variable}`} suppressHydrationWarning>
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
