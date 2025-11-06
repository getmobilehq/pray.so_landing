import { Shield, Check } from 'lucide-react';
import { securityFeatures } from '../../data/content';

export function Security() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <Shield className="w-16 h-16 mx-auto mb-6 text-neutral-700" strokeWidth={1.5} />
        <h2 className="text-4xl font-light text-neutral-900 mb-8">Your Faith Journey, Protected</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
          {securityFeatures.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-neutral-700 flex-shrink-0" />
              <span className="text-neutral-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
