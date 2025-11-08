export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
      <h1 className="text-5xl md:text-6xl font-light text-neutral-900 mb-6 leading-tight">
        Pray Together, Anywhere
      </h1>
      <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
        Join live prayer rooms, share requests, and build meaningful connections with believers around the world.
      </p>
      <a
        href="https://app.pray.so/"
        className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-lg text-lg hover:bg-neutral-800 transition shadow-lg hover:shadow-xl"
      >
        Start Praying (Free)
      </a>
    </section>
  );
}
