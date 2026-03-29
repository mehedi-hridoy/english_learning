import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#EAF4FB_0%,#F7FAFD_45%,#FFFFFF_100%)] px-6">
      <section className="w-full max-w-2xl rounded-3xl border border-[#D8E3EE] bg-white p-8 text-center shadow-[0_24px_70px_-32px_rgba(16,39,69,0.45)] sm:p-12">
        <p className="text-sm font-semibold text-[#0071BC]">Page Not Found</p>
        <h1 className="mt-2 text-5xl font-extrabold tracking-[-0.03em] text-[#0F2745] sm:text-6xl">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-[#102A46]">عذرا، الصفحة غير موجودة</h2>
        <p className="mt-4 text-base leading-7 text-[#5F7288]">
          يبدو أن الرابط غير صحيح أو أن الصفحة تم نقلها. يمكنك العودة إلى الصفحة
          الرئيسية أو استعراض العروض الحالية.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 min-w-44 items-center justify-center rounded-2xl bg-[#0071BC] px-6 text-sm font-semibold text-white transition hover:bg-[#0065A8]"
          >
            العودة إلى الرئيسية
          </Link>
          <Link
            href="/offers"
            className="inline-flex h-12 min-w-44 items-center justify-center rounded-2xl border border-[#C7D7E8] bg-white px-6 text-sm font-semibold text-[#133254] transition hover:bg-[#F3F8FC]"
          >
            تصفح العروض
          </Link>
        </div>
      </section>
    </main>
  );
}
