'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
          Fehler
        </p>
        <h2
          className="font-[800] text-4xl md:text-5xl tracking-tight mb-4"
          style={{ color: 'var(--c-text)' }}
        >
          Etwas ist schiefgelaufen
        </h2>
        <p
          className="text-base leading-relaxed mb-8"
          style={{ color: 'var(--c-text-muted)' }}
        >
          Ein unerwarteter Fehler ist aufgetreten. Versuche es erneut.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 rounded-full font-semibold text-sm theme-transition"
          style={{
            background: 'var(--c-text)',
            color: 'var(--c-bg)',
          }}
        >
          Erneut versuchen
        </button>
      </div>
    </div>
  );
}
