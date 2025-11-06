import { footerLinks } from '../../data/content';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-medium text-neutral-900 mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-neutral-600 hover:text-neutral-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-900 mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-neutral-600 hover:text-neutral-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-neutral-600 hover:text-neutral-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-neutral-600 hover:text-neutral-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 pt-8 text-center">
          <p className="text-neutral-600 italic">
            "Where two or three gather in my name, there am I with them." — Matthew 18:20
          </p>
        </div>
      </div>
    </footer>
  );
}
