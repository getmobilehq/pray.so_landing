export function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/pray.so black.svg" alt="Pray.so" className="h-8" />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-neutral-600 hover:text-neutral-900 transition">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-neutral-600 hover:text-neutral-900 transition">
            How It Works
          </a>
          <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900 transition">
            Pricing
          </a>
          <a
            href="https://app.pray.so/"
            className="text-sm bg-neutral-900 text-white px-5 py-2 rounded-lg hover:bg-neutral-800 transition"
          >
            Start Praying
          </a>
        </div>
      </div>
    </nav>
  );
}
