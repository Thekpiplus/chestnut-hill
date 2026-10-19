import { site } from "@/content/site";

export function MapEmbed({ title, openLabel }: { title: string; openLabel: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-linen shadow-soft">
      <iframe
        title={title}
        src={site.mapsEmbed}
        className="aspect-[4/3] w-full border-0 sm:aspect-[16/10] lg:min-h-[28rem]"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${site.geo.latitude}%2C${site.geo.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-moss-deep underline underline-offset-4"
        >
          {openLabel}
        </a>
      </figcaption>
    </figure>
  );
}
