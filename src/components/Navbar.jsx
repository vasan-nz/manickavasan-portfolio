export default function Navbar({ onContactClick, onBlogClick }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="text-sm font-semibold tracking-[0.2em] text-white">
          MANICKAVASAN
        </a>

        <div className="flex items-center gap-3">
          <button
            onClick={onBlogClick}
            className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Blog
          </button>

          <button
            onClick={() => onContactClick?.("contact")}
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </header>
  );
}
