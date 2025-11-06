import { Check } from 'lucide-react';
import { pricingPlans } from '../../data/content';
import { Button } from '../ui/Button';

interface PricingProps {
  onWaitlistClick: () => void;
}

export function Pricing({ onWaitlistClick }: PricingProps) {
  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-light text-neutral-900 mb-4 text-center">
        Simple, Transparent, Faith-Focused
      </h2>
      <p className="text-center text-neutral-600 mb-16 text-lg">Choose the plan that fits your ministry</p>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, i) => (
          <div
            key={i}
            className={`border rounded-lg p-8 hover:border-neutral-300 transition relative ${
              plan.highlighted ? 'border-2 border-neutral-900' : 'border-neutral-200'
            }`}
          >
            {plan.comingSoon && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-4 py-1 rounded-full text-sm">
                Coming Soon
              </div>
            )}
            <h3 className="text-2xl font-medium text-neutral-900 mb-2">{plan.name}</h3>
            <div className="text-4xl font-light text-neutral-900 mb-6">
              {plan.price}
              {plan.period && <span className="text-lg text-neutral-600">{plan.period}</span>}
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-2 text-neutral-600">
                  <Check className="w-5 h-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {plan.ctaLink ? (
              <Button href={plan.ctaLink} className="w-full text-center block">
                {plan.cta}
              </Button>
            ) : (
              <Button
                onClick={onWaitlistClick}
                variant={plan.highlighted ? 'secondary' : 'secondary'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
