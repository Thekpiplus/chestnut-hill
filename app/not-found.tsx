import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-5 py-24">
      <h1 className="font-display text-4xl text-moss-deep">ไม่พบหน้านี้</h1>
      <p className="mt-4 leading-8 text-muted">ที่อยู่นี้ไม่มีในเว็บไซต์เชสท์นัท ฮิลล์</p>
      <p className="mt-2 text-sm leading-7 text-muted">Page not found on the Chestnut Hill site.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/" className="text-moss-deep underline underline-offset-4">
          หน้าแรก
        </Link>
        <Link href="/en" className="text-moss-deep underline underline-offset-4">
          English home
        </Link>
      </div>
    </main>
  );
}
