export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-line bg-linen">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
        <p className="text-sm tracking-[0.16em] text-moss uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.4] text-moss-deep sm:text-5xl">
          {title}
        </h1>
        {lede ? <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{lede}</p> : null}
      </div>
    </header>
  );
}
