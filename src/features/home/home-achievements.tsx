export function HomeAchievements() {
  return (
    <section className="relative z-0 mx-auto w-full max-w-[1440px] bg-[#F5F7FA] px-6 py-16 sm:px-10 lg:px-[88px]">
      <div className="rounded-3xl bg-white px-6 py-10 shadow-[0_14px_40px_-30px_rgba(16,39,69,0.3)] sm:px-10 lg:px-14 lg:py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start" dir="rtl">
          <div className="lg:col-span-6">
            <h2 className="text-[42px] font-bold leading-[1.1] tracking-[-0.02em] text-[#102A46] sm:text-[48px]">
              اعتماداتنا وإنجازاتنا في أرقام
            </h2>
            <p className="mt-5 max-w-[640px] text-[18px] leading-[1.75] text-[#425B74]">
              بفضل شراكاتنا مع أفضل المعاهد والمؤسسات التعليمية حول العالم، ساعدنا
              آلاف الطلاب على تحقيق حلمهم بتعلّم اللغة الإنجليزية في بيئات دولية
              معتمدة
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6">
            <article className="border-s border-[#D9E3ED] ps-5 sm:border-s-0 sm:border-e sm:pe-5 sm:ps-0">
              <p className="text-[56px] font-bold leading-none tracking-[-0.02em] text-[#1764B6]">
                +15,000
              </p>
              <p className="mt-4 text-[18px] leading-[1.7] text-[#223A54]">
                طالب وطالبة التحقوا ببرامج دراسة الإنجليزية المعتمدة بالخارج
              </p>
            </article>

            <article>
              <p className="text-[56px] font-bold leading-none tracking-[-0.02em] text-[#1764B6]">
                +50
              </p>
              <p className="mt-4 text-[18px] leading-[1.7] text-[#223A54]">
                شراكة مع جامعات التحقوا ببرامج دراسة الإنجليزية المعتمدة بالخارج
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
