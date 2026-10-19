import Link from "next/link";

type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "clay" | "moss" | "ghost" | "ghost-light";
  external?: boolean;
};

const styles = {
  clay: "bg-clay text-paper hover:bg-moss-deep",
  moss: "bg-moss text-paper hover:bg-moss-deep",
  ghost: "border border-moss text-moss-deep hover:bg-linen",
  "ghost-light": "border border-paper/70 text-paper hover:bg-paper/15",
};

export function Cta({ href, children, variant = "clay", external = false }: CtaProps) {
  const className = `inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium transition-colors duration-200 ${styles[variant]}`;
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
