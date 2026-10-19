import Link from "next/link";
import { copy, navItems, site } from "@/content/site";
import { withLang, type Lang } from "@/lib/routes";

export function Footer({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <footer className="mt-8 bg-moss text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl leading-snug">{site.name[lang]}</p>
          <address className="mt-4 text-sm leading-7 text-paper/90 not-italic">
            {site.address[lang].map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
        <div className="text-sm leading-7">
          {site.phones.map((phone) => (
            <a key={phone.tel} className="block text-paper hover:underline" href={`tel:${phone.tel}`}>
              {phone.display}
            </a>
          ))}
          <a className="mt-2 block break-all text-paper hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="mt-2 block text-paper hover:underline" href={site.facebook} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a className="mt-2 block text-paper hover:underline" href={site.tripadvisor} target="_blank" rel="noopener noreferrer">
            TripAdvisor
          </a>
          <a className="mt-2 block text-paper hover:underline" href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
            {text.bookOnline}
          </a>
        </div>
        <nav aria-label={text.navAria} className="text-sm leading-7">
          {navItems.map((item) => (
            <Link key={item.key} className="block text-paper hover:underline" href={withLang(lang, item.path)}>
              {text.nav[item.key]}
            </Link>
          ))}
          <Link className="block text-paper hover:underline" href={withLang(lang, "/archive")}>
            {text.footerEvents}
          </Link>
        </nav>
      </div>
      <p className="border-t border-paper/20 px-5 py-4 text-center text-sm text-paper/80">
        © {new Date().getFullYear()} {text.footerRights}
      </p>
    </footer>
  );
}
