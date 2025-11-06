import { features } from '../../data/content';

export function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div key={i} className="text-center p-6">
            <feature.icon className="w-10 h-10 mx-auto mb-4 text-neutral-700" strokeWidth={1.5} />
            <h3 className="text-xl font-medium text-neutral-900 mb-2">{feature.title}</h3>
            <p className="text-neutral-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
