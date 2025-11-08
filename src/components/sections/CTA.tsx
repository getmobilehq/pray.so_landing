export function CTA() {
  return (
    <section className="bg-neutral-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">Start Your Prayer Journey Today</h2>
        <p className="text-xl text-neutral-300 mb-8">Join thousands of believers praying together right now.</p>
        <a
          href="https://app.pray.so/"
          className="inline-block bg-white text-neutral-900 px-8 py-4 rounded-lg text-lg hover:bg-neutral-100 transition shadow-lg hover:shadow-xl mb-8"
        >
          Create Free Account
        </a>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
          <span>No credit card required</span>
          <span>•</span>
          <span>Free forever</span>
          <span>•</span>
          <span>100% secure</span>
        </div>
      </div>
    </section>
  );
}
