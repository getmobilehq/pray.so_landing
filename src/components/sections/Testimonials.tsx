import { testimonials, stats } from '../../data/content';

export function Testimonials() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">What Believers Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-lg">
              <p className="text-neutral-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
              <p className="text-sm text-neutral-500">— {testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-light text-neutral-900 mb-2">{stat.value}</div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
