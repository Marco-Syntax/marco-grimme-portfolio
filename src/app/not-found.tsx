import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 theme-transition"
      style={{ background: 'var(--c-bg)' }}
    >
      <div className="text-center max-w-md">
        <p
          className="text-xs font-mono uppercase tracking-widest mb-4"
          style={{ color: 'var(--c-text-faint)' }}
        >
          404
        </p>
        <h2
          className="font-[800] text-4xl md:text-5xl tracking-tight mb-4"
          style={{ color: 'var(--c-text)' }}
        >
          Seite nicht gefunden
        </h2>
        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: 'var(--c-text-muted)' }}
        >
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-full font-semibold text-sm theme-transition"
          style={{
            background: 'var(--c-text)',
            color: 'var(--c-bg)',
          }}
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
