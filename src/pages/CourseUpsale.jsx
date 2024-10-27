export default function CurseUpsale() {
  return (
    <section className="flex flex-wrap gap-10 justify-center items-center mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/45016453b3c6a19e7a8bac4633bc78ef496a2ad3c38a464b31bf6e0f7ef938f7?placeholderIfAbsent=true&apiKey=ef178f19b00f46df9e6f7824633e0af0"
        alt="Raising EQ Kids Course illustration"
        className="object-contain grow shrink self-stretch my-auto rounded-sm aspect-[1.27] min-w-[240px] w-[698px] max-md:max-w-full"
      />
      <article className="flex flex-col grow shrink self-stretch my-auto min-w-[240px] w-[314px]">
        <header className="flex flex-col justify-center w-full">
          <h1 className="text-4xl text-stone-400">Raising EQ Kids Course</h1>
          <p className="mt-4 text-base text-slate-600">
            This course is designed to empower parents with the knowledge and
            skills to raise emotionally intelligent children. Through three
            transformative modules, you&apos;ll discover how to break old emotional
            habits, respond calmly to your child&apos;s behavior, and teach them
            essential emotional intelligence (EI) skills that will set them up
            for life. By the end of the course, you&apos;ll feel confident in how to
            foster emotional resilience, empathy, and self-awareness in your
            child.
          </p>
        </header>
        <div className="flex flex-col justify-center items-start mt-10 w-full">
          <button>Continue</button>
        </div>
      </article>
    </section>
  );
}
