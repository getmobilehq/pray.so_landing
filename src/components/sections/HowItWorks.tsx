import { steps } from '../../data/content';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-neutral-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">How It Works</h2>
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xl font-light">
                {step.num}
              </div>
              <div>
                <h3 className="text-2xl font-medium text-neutral-900 mb-2">{step.title}</h3>
                <p className="text-neutral-600 text-lg">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
