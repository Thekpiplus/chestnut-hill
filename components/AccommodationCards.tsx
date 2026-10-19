import { copy } from "@/content/site";
import type { Lang } from "@/lib/routes";

export function AccommodationCards({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {text.rooms.map((room) => (
        <li key={room.id} className="rounded-2xl bg-linen p-6 shadow-soft">
          <h3 className="font-display text-2xl leading-snug text-moss-deep">{room.name}</h3>
          {room.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 leading-7 text-muted">
              {paragraph}
            </p>
          ))}
          {"points" in room && room.points ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted">
              {room.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
