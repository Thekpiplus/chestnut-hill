import Image from "next/image";
import Link from "next/link";
import { AccommodationCards } from "@/components/AccommodationCards";
import { Cta } from "@/components/Cta";
import { Gallery } from "@/components/Gallery";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { SiteShell } from "@/components/SiteShell";
import { ExperienceSections, SourceNotes } from "@/components/SourceNotes";
import { StayForm } from "@/components/StayForm";
import {
  contactMoodPhoto,
  experiencesMoodPhoto,
  galleryImages,
  heroPhoto,
  homePreviewPhotos,
  photoAlt,
  storyMoodPhoto,
} from "@/content/photos";
import { copy, site } from "@/content/site";
import { listSlugs, readArchive } from "@/lib/archive";
import {
  destinationFor,
  experienceGroups,
  sectionForSlug,
  storySources,
  withLang,
  type Lang,
} from "@/lib/routes";
import { cleanArchiveTitle } from "@/lib/seo";

export function HomeView({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const stay = `${withLang(lang, "/accommodation")}#stay`;
  return (
    <SiteShell lang={lang}>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-moss-deep text-paper">
        <Image
          src={heroPhoto.src}
          alt={photoAlt(lang, heroPhoto)}
          width={heroPhoto.width}
          height={heroPhoto.height}
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/35 to-ink/20" aria-hidden />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:pb-20">
          <p className="text-sm tracking-[0.16em] text-paper/85 uppercase">{text.home.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.35] sm:text-6xl">{site.name[lang]}</h1>
          <p className="mt-4 max-w-2xl whitespace-pre-line font-display text-2xl leading-snug text-paper/95 sm:text-3xl">
            {text.home.title}
          </p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-paper/90">{text.home.panel}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Cta href={stay}>{text.stayCta}</Cta>
            <Cta href={site.bookingUrl} variant="ghost-light" external>
              {text.bookOnline}
            </Cta>
          </div>
          <p className="mt-4 text-sm text-paper/80">{text.ctaNote}</p>
        </div>
      </section>

      <section className="border-y border-line bg-linen">
        <dl className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3">
          {text.home.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-sm tracking-wide text-muted uppercase">{fact.label}</dt>
              <dd className="mt-1 font-display text-3xl leading-snug text-moss-deep">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="font-display text-3xl leading-snug text-moss-deep sm:text-4xl">{text.home.introTitle}</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
          {text.home.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-4xl leading-[1.35] text-moss-deep">{text.photosTitle}</h2>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">{text.photosLead}</p>
          </div>
          <Link href={withLang(lang, "/gallery")} className="text-sm font-medium text-moss-deep underline underline-offset-4">
            {text.photosCta}
          </Link>
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homePreviewPhotos.map((photo) => (
            <li key={photo.id} className="overflow-hidden rounded-2xl bg-linen">
              <Image
                src={photo.src}
                alt={photoAlt(lang, photo)}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="font-display text-4xl leading-[1.35] text-moss-deep">{text.home.waysTitle}</h2>
        <p className="mt-3 max-w-2xl text-lg leading-8 text-muted">{text.home.waysLead}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {text.home.ways.map((way) => (
            <article key={way.href} className="rounded-2xl bg-linen p-6 shadow-soft">
              <h3 className="font-display text-2xl leading-snug text-moss-deep">
                <Link href={withLang(lang, way.href)} className="hover:underline">
                  {way.title}
                </Link>
              </h3>
              <p className="mt-3 leading-7 text-muted">{way.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-moss text-paper">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl leading-snug">{text.home.closingTitle}</h2>
            <p className="mt-2 max-w-xl leading-7 text-paper/90">{text.home.closingText}</p>
          </div>
          <Cta href={stay} variant="clay">
            {text.stayCta}
          </Cta>
        </div>
      </section>
    </SiteShell>
  );
}

export function StoryView({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const story = text.story;
  return (
    <SiteShell lang={lang}>
      <PageHero eyebrow={story.eyebrow} title={story.title} lede={story.lede} />
      <div className="relative h-56 overflow-hidden bg-linen sm:h-72 lg:h-80">
        <Image
          src={storyMoodPhoto.src}
          alt={photoAlt(lang, storyMoodPhoto)}
          width={storyMoodPhoto.width}
          height={storyMoodPhoto.height}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <article className="mx-auto max-w-3xl px-5 py-14">
        <h2 className="font-display text-3xl leading-snug text-moss-deep">{story.introTitle}</h2>
        <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
          {story.introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {story.sections.map((section) => (
          <section key={section.title} className="mt-12">
            <h2 className="font-display text-3xl leading-snug text-moss-deep">{section.title}</h2>
            <p className="mt-2 text-sm font-medium tracking-wide text-moss uppercase">{section.subtitle}</p>
            <div className="mt-5 space-y-5 text-lg leading-8 text-muted">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-14 rounded-3xl bg-linen px-6 py-8 sm:px-8">
          <p className="font-display text-2xl leading-snug text-moss-deep sm:text-3xl">{story.closingLead}</p>
          <p className="mt-4 text-lg leading-8 text-muted">{story.closingText}</p>
        </section>

        <div className="mt-14">
          <h2 className="font-display text-3xl leading-snug text-moss-deep">{story.ecoTitle}</h2>
          <p className="mt-3 leading-7 text-muted">{story.ecoLead}</p>
          <div className="mt-6">
            <SourceNotes lang={lang} slugs={storySources} openFirst />
          </div>
        </div>
      </article>
    </SiteShell>
  );
}

export function AccommodationView({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <SiteShell lang={lang}>
      <PageHero eyebrow={text.stayHero.eyebrow} title={text.stayHero.title} lede={text.stayHero.lede} />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-3xl leading-snug text-moss-deep">{text.roomsTitle}</h2>
        <p className="mt-3 max-w-2xl leading-7 text-muted">{text.roomsLead}</p>
        <div className="mt-8">
          <AccommodationCards lang={lang} />
        </div>
        <p className="mt-6 text-sm leading-6 text-muted">{text.ratesNote}</p>

        <h2 className="mt-14 font-display text-3xl leading-snug text-moss-deep">{text.policiesTitle}</h2>
        <dl className="mt-6 grid gap-4">
          {text.policies.map((policy) => (
            <div key={policy.title} className="rounded-2xl border border-line px-5 py-4">
              <dt className="font-medium text-moss-deep">{policy.title}</dt>
              <dd className="mt-1 leading-7 text-muted">{policy.text}</dd>
            </div>
          ))}
        </dl>

        <h2 className="mt-14 font-display text-3xl leading-snug text-moss-deep">{text.bankTitle}</h2>
        <p className="mt-3 text-muted">{text.bankLead}</p>
        <ul className="mt-3 leading-7 text-muted">
          {text.bank.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h2 className="mt-14 font-display text-3xl leading-snug text-moss-deep">{text.facilitiesTitle}</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-muted">
          {text.facilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3 className="mt-8 font-display text-2xl text-moss-deep">{text.ratesTitle}</h3>
        <table className="mt-4 w-full max-w-xl text-left text-sm">
          <tbody>
            {text.rates.map(([item, price]) => (
              <tr key={item} className="border-b border-line">
                <th scope="row" className="py-2 pr-4 font-normal">
                  {item}
                </th>
                <td className="py-2 text-muted">{price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <section id="stay" className="mt-16 scroll-mt-28 rounded-3xl bg-linen p-6 shadow-soft sm:p-8">
          <h2 className="font-display text-3xl leading-snug text-moss-deep">{text.form.title}</h2>
          <p className="mt-2 max-w-2xl leading-7 text-muted">{text.form.lead}</p>
          <p className="mt-2 text-sm text-muted">{text.ctaNote}</p>
          <div className="mt-4">
            <Cta href={site.bookingUrl} variant="ghost" external>
              {text.bookOnline}
            </Cta>
          </div>
          <div className="mt-6">
            <StayForm lang={lang} />
          </div>
        </section>
      </div>
    </SiteShell>
  );
}

export function ExperiencesView({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <SiteShell lang={lang}>
      <PageHero eyebrow={text.experiences.eyebrow} title={text.experiences.title} lede={text.experiences.lede} />
      <div className="relative h-56 overflow-hidden bg-linen sm:h-72 lg:h-80">
        <Image
          src={experiencesMoodPhoto.src}
          alt={photoAlt(lang, experiencesMoodPhoto)}
          width={experiencesMoodPhoto.width}
          height={experiencesMoodPhoto.height}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-6xl px-5 py-14">
        {experienceGroups.map((group) => (
          <section key={group.id} className="mb-14">
            <h2 className="font-display text-3xl leading-snug text-moss-deep">{text.groups[group.id]}</h2>
            {group.id === "published" ? <p className="mt-3 max-w-2xl leading-7 text-muted">{text.groups.publishedLead}</p> : null}
            <div className="mt-6">
              <ExperienceSections lang={lang} slugs={group.slugs} />
            </div>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}

export function GalleryView({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <SiteShell lang={lang}>
      <PageHero eyebrow={text.gallery.eyebrow} title={text.gallery.title} lede={text.gallery.lede} />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <Gallery images={galleryImages(lang)} />
        <div className="mt-10">
          <Cta href={`${withLang(lang, "/accommodation")}#stay`}>{text.stayCta}</Cta>
        </div>
      </div>
    </SiteShell>
  );
}

export function ContactView({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const contact = text.contact;
  return (
    <SiteShell lang={lang}>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} lede={contact.lede} />
      <div className="relative h-52 overflow-hidden bg-linen sm:h-64 lg:h-72">
        <Image
          src={contactMoodPhoto.src}
          alt={photoAlt(lang, contactMoodPhoto)}
          width={contactMoodPhoto.width}
          height={contactMoodPhoto.height}
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl leading-snug text-moss-deep">{contact.detailsTitle}</h2>
          <p className="mt-3 font-display text-2xl leading-snug text-moss-deep">{site.name[lang]}</p>
          <address className="mt-4 text-lg leading-8 not-italic">
            {site.address[lang].map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <p className="mt-4 text-muted">{contact.localName}</p>
          <ul className="mt-6 space-y-1">
            {site.phones.map((phone) => (
              <li key={phone.tel}>
                <a className="text-moss-deep underline underline-offset-4" href={`tel:${phone.tel}`}>
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
          <a className="mt-3 inline-block text-moss-deep underline underline-offset-4" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            <a className="text-moss-deep underline underline-offset-4" href={site.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a className="text-moss-deep underline underline-offset-4" href={site.tripadvisor} target="_blank" rel="noopener noreferrer">
              TripAdvisor
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl leading-snug text-moss-deep">{contact.mapTitle}</h2>
          <div className="mt-4">
            <MapEmbed title={contact.mapIframeTitle} openLabel={contact.map} />
          </div>
          <h2 className="mt-10 font-display text-3xl leading-snug text-moss-deep">{contact.distanceTitle}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-muted">
            {contact.distances.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="mt-10 font-display text-3xl leading-snug text-moss-deep">{contact.arriveTitle}</h2>
          <div className="mt-4 space-y-4">
            {contact.options.map((option) => (
              <article key={option.title} className="rounded-2xl bg-linen p-5">
                <h3 className="font-medium text-moss-deep">{option.title}</h3>
                <p className="mt-2 leading-7 text-muted">{option.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <section id="stay" className="mx-auto max-w-3xl scroll-mt-28 px-5 py-14">
        <h2 className="font-display text-3xl leading-snug text-moss-deep">{text.form.title}</h2>
        <p className="mt-2 leading-7 text-muted">{text.form.lead}</p>
        <div className="mt-6">
          <StayForm lang={lang} />
        </div>
      </section>
    </SiteShell>
  );
}

export function ArchiveIndexView({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const pages = listSlugs()
    .filter((slug) => !sectionForSlug[slug])
    .map((slug) => readArchive(lang, slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));

  return (
    <SiteShell lang={lang}>
      <PageHero eyebrow={text.archive.eyebrow} title={text.archive.title} lede={text.archive.lede} />
      <ul className="mx-auto grid max-w-6xl gap-4 px-5 py-14 sm:grid-cols-2">
        {pages.map((page) => {
          const title = cleanArchiveTitle(page.title, lang);
          return (
            <li key={page.slug} className="rounded-2xl bg-linen p-5">
              <h2 className="font-display text-xl leading-snug text-moss-deep">
                <Link href={destinationFor(lang, page.slug)} className="hover:underline">
                  {title}
                </Link>
              </h2>
            </li>
          );
        })}
      </ul>
    </SiteShell>
  );
}

export function ArchiveArticleView({ lang, slug }: { lang: Lang; slug: string }) {
  const page = readArchive(lang, slug);
  const text = copy[lang];
  if (!page) return null;
  const title = cleanArchiveTitle(page.title, lang);
  return (
    <SiteShell lang={lang}>
      <PageHero eyebrow={text.archive.eyebrow} title={title} lede={page.description || undefined} />
      <article className="mx-auto max-w-3xl px-5 py-14">
        {page.html ? (
          <div className="archive-body" dangerouslySetInnerHTML={{ __html: page.html }} />
        ) : (
          <p className="text-muted">{text.emptyBody}</p>
        )}
      </article>
    </SiteShell>
  );
}
