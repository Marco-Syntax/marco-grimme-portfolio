export default function Footer() {
  return (
    <footer
      className="border-t py-8 px-6 md:px-12 theme-transition"
      style={{ background: "var(--c-bg)", borderColor: "var(--c-border-subtle)" }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-center">
        <p className="text-xs font-mono" style={{ color: "var(--c-text-faint)" }}>Marco Grimme</p>
      </div>
    </footer>
  );
}
