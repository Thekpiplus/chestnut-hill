"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { copy, navItems } from "@/content/site";
import { isActivePath, swapLang, withLang, type Lang } from "@/lib/routes";

export function Header({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const text = copy[lang];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const home = withLang(lang, "/");
  const stay = `${withLang(lang, "/accommodation")}#stay`;

  const linkClass = (href: string) => {
    const active = isActivePath(pathname, href, href === home);
    return `rounded-md px-1 py-1 text-sm transition-colors duration-200 ${
      active ? "text-paper underline decoration-paper/70 underline-offset-8" : "text-paper/85 hover:text-paper"
    }`;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-moss-deep bg-moss text-paper">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-5">
        <Link href={home} className="shrink-0" aria-label={lang === "th" ? "เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท" : "Chestnut Hill Eco Resort"}>
          <Image
            src="/chestnut-hill-logo.jpg"
            alt={lang === "th" ? "เชสท์นัท ฮิลล์ อีโค่ รีสอร์ท" : "Chestnut Hill Eco Resort"}
            width={855}
            height={855}
            priority
            className="h-16 w-16 rounded-md object-cover sm:h-20 sm:w-20"
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label={text.navAria}>
          {navItems.map((item) => {
            const href = withLang(lang, item.path);
            return (
              <Link key={item.key} href={href} className={linkClass(href)} aria-current={pathname === href ? "page" : undefined}>
                {text.nav[item.key]}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <div className="flex rounded-full border border-paper/40 p-0.5" role="navigation" aria-label={text.langAria}>
            {(["th", "en"] as const).map((code) => {
              const active = code === lang;
              return (
                <Link
                  key={code}
                  href={swapLang(pathname, code)}
                  hrefLang={code}
                  lang={code}
                  aria-current={active ? "true" : undefined}
                  className={`rounded-full px-3 py-1 text-sm ${active ? "bg-paper text-moss-deep" : "text-paper"}`}
                >
                  {code === "th" ? "ไทย" : "EN"}
                </Link>
              );
            })}
          </div>
          <Link href={stay} className="hidden rounded-xl bg-clay px-4 py-2.5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-moss-deep sm:inline-flex">
            {text.stayCta}
          </Link>
          <button
            type="button"
            className="rounded-lg border border-paper/40 px-3 py-2 text-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? text.close : text.menu}
          </button>
        </div>
      </div>
      <div className="px-4 pb-3 sm:hidden">
        <Link href={stay} className="flex w-full items-center justify-center rounded-xl bg-clay px-4 py-3 text-sm font-medium text-paper">
          {text.stayCta}
        </Link>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-paper/20 px-5 py-4 lg:hidden" aria-label={text.navAria}>
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const href = withLang(lang, item.path);
              return (
                <li key={item.key}>
                  <Link href={href} className="block py-1 text-base text-paper" aria-current={isActivePath(pathname, href, href === home) ? "page" : undefined}>
                    {text.nav[item.key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
