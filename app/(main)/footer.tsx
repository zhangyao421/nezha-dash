export default function Footer() {
  const startYear = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-5xl flex justify-center items-center">
      <section className="flex flex-col">
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
         Copyright © {startYear}
          {currentYear > startYear && `-${currentYear}`}{" "}
          <a href={"https://musifei.live"}>Musifei</a>
        </section>
      </section>
    </footer>
  );
}
