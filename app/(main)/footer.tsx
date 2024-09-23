export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl">
      <section className="flex flex-col">
        <section className="mt-1 flex items-center gap-2 text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50">
          © {new Date().getFullYear()}{" "}
          <a href={"https://musifei.live"}>@Musifei</a>
        </section>
      </section>
    </footer>
  );
}
