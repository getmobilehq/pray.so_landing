import { useCases } from '../../data/content';

export function UseCases() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">Use Cases</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {useCases.map((useCase, i) => (
          <div key={i} className="p-8 border border-neutral-200 rounded-lg hover:border-neutral-300 transition">
            <h3 className="text-2xl font-medium text-neutral-900 mb-3">{useCase.title}</h3>
            <p className="text-neutral-600 text-lg">{useCase.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
