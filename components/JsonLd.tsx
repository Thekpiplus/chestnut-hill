import { heroPhoto, photos } from "@/content/photos";
import { copy, site } from "@/content/site";

export function JsonLd() {
  const th = copy.th;
  const absolute = (src: string) => (src.startsWith("http") ? src : `${site.domain}${src}`);
  const lodging = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${site.domain}/#lodging`,
    name: site.name.th,
    alternateName: [site.name.en, "สวนสายน้ำ", "Stream Garden"],
    description: th.seo.home.description,
    url: site.domain,
    inLanguage: ["th", "en"],
    image: [heroPhoto.src, "/chestnut-hill-logo.jpg", ...photos.slice(1, 4).map((photo) => photo.src)].map(absolute),
    logo: absolute("/chestnut-hill-logo.jpg"),
    email: site.email,
    telephone: site.phones.map((phone) => phone.tel),
    address: {
      "@type": "PostalAddress",
      streetAddress: "174/3 หมู่ 5 บ้านทุ่งจัง ต.พะตง",
      addressLocality: "หาดใหญ่",
      addressRegion: "สงขลา",
      postalCode: "90230",
      addressCountry: "TH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.latitude}%2C${site.geo.longitude}`,
    checkinTime: site.checkIn,
    checkoutTime: site.checkOut,
    sameAs: [site.facebook, site.tripadvisor],
    potentialAction: {
      "@type": "ReserveAction",
      target: site.bookingUrl,
      name: "จองที่พัก",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.domain}/#website`,
    name: site.name.th,
    alternateName: site.name.en,
    url: site.domain,
    inLanguage: ["th", "en"],
    publisher: { "@id": `${site.domain}/#lodging` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
