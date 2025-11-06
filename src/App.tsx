import { useState } from 'react';
import { X, Radio, MessageSquare, Lock, Clock, MessageCircle, Tag, Users, Globe, Shield, Check } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'individual' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setFormData({ name: '', email: '', role: 'individual' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/pray.so black.svg" alt="Pray.so" className="h-8" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-neutral-600 hover:text-neutral-900 transition">Features</a>
            <a href="#how-it-works" className="text-sm text-neutral-600 hover:text-neutral-900 transition">How It Works</a>
            <a href="#pricing" className="text-sm text-neutral-600 hover:text-neutral-900 transition">Pricing</a>
            <a href="https://app.pray.so/signup" className="text-sm bg-neutral-900 text-white px-5 py-2 rounded-lg hover:bg-neutral-800 transition">
              Start Praying
            </a>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
        <h1 className="text-5xl md:text-6xl font-light text-neutral-900 mb-6 leading-tight">
          Pray Together, Anywhere
        </h1>
        <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join live prayer rooms, share requests, and build meaningful connections with believers around the world.
        </p>
        <a
          href="https://app.pray.so/signup"
          className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-lg text-lg hover:bg-neutral-800 transition shadow-lg hover:shadow-xl"
        >
          Start Praying (Free)
        </a>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-900 mb-6">
            Prayer Was Never Meant to Be Lonely
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            In our busy, digital world, it's easy to feel disconnected in faith. Local prayer groups are limited by time zones and schedules. Pray.so helps believers connect in real time—wherever they are.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-neutral-900 mb-6">
            Real-Time Prayer Rooms That Bring Believers Together
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Pray.so creates sacred digital spaces where you can pray live with others, share your heart, and experience authentic Christian community—anytime, anywhere.
          </p>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Radio, title: 'Live Prayer Rooms', desc: 'Host or join real-time gatherings.' },
            { icon: MessageSquare, title: 'Prayer Wall', desc: 'Share and lift up prayer requests.' },
            { icon: Lock, title: 'Private Circles', desc: 'Create trusted, invite-only groups.' },
            { icon: Clock, title: 'Scheduled Prayer Times', desc: 'Set reminders and recurring meetings.' },
            { icon: MessageCircle, title: 'Interactive Chat', desc: 'Type prayers and encourage others live.' },
            { icon: Tag, title: 'Prayer Categories', desc: 'Join rooms by theme — healing, worship, etc.' }
          ].map((feature, i) => (
            <div key={i} className="text-center p-6">
              <feature.icon className="w-10 h-10 mx-auto mb-4 text-neutral-700" strokeWidth={1.5} />
              <h3 className="text-xl font-medium text-neutral-900 mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">How It Works</h2>
          <div className="space-y-12">
            {[
              { num: '1', title: 'Create Your Account', desc: 'No credit card required.' },
              { num: '2', title: 'Join or Host a Room', desc: 'Public or private options.' },
              { num: '3', title: 'Pray Together', desc: 'Use mic or text chat.' },
              { num: '4', title: 'Build Community', desc: 'Follow others and form circles.' }
            ].map((step) => (
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

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'For Individuals', desc: 'Find prayer partners anytime.' },
            { title: 'For Churches', desc: 'Extend your ministry beyond Sunday.' },
            { title: 'For Small Groups', desc: 'Stay connected between meetings.' },
            { title: 'For Ministries', desc: 'Reach believers worldwide.' }
          ].map((useCase, i) => (
            <div key={i} className="p-8 border border-neutral-200 rounded-lg hover:border-neutral-300 transition">
              <h3 className="text-2xl font-medium text-neutral-900 mb-3">{useCase.title}</h3>
              <p className="text-neutral-600 text-lg">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">What Believers Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: 'Pray.so transformed our church\'s prayer life.', author: 'Sarah M., Church Leader' },
              { quote: 'I found genuine prayer partners across the world.', author: 'David K., Student' },
              { quote: 'We prayed with believers from 12 countries.', author: 'Pastor James' }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-lg">
                <p className="text-neutral-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-sm text-neutral-500">— {testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-light text-neutral-900 mb-2">10,000+</div>
              <div className="text-neutral-600">Prayer Rooms Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-light text-neutral-900 mb-2">50,000+</div>
              <div className="text-neutral-600">Prayer Requests Shared</div>
            </div>
            <div>
              <div className="text-4xl font-light text-neutral-900 mb-2">100+</div>
              <div className="text-neutral-600">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-light text-neutral-900 mb-16 text-center">Pray.so vs Traditional Prayer Groups</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-neutral-200">
                <th className="text-left py-4 px-4 text-neutral-900"></th>
                <th className="text-center py-4 px-4 text-neutral-900 font-medium">Traditional Prayer Groups</th>
                <th className="text-center py-4 px-4 text-neutral-900 font-medium">Pray.so</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Location Bound', traditional: 'Yes', prayso: 'No – Global' },
                { feature: 'Fixed Schedules', traditional: 'Yes', prayso: '24/7 Access' },
                { feature: 'Limited Size', traditional: 'Yes', prayso: 'Unlimited' },
                { feature: 'Setup Time', traditional: 'High', prayso: 'Join in Seconds' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-neutral-100">
                  <td className="py-4 px-4 text-neutral-900">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-neutral-600">{row.traditional}</td>
                  <td className="py-4 px-4 text-center text-neutral-900 font-medium">{row.prayso}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-neutral-700" strokeWidth={1.5} />
          <h2 className="text-4xl font-light text-neutral-900 mb-8">Your Faith Journey, Protected</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              'End-to-end encrypted rooms available',
              'Invite-only circles',
              'No data selling — ever',
              'Host moderation tools',
              'Full user control over privacy'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-neutral-700 flex-shrink-0" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-light text-neutral-900 mb-4 text-center">Simple, Transparent, Faith-Focused</h2>
        <p className="text-center text-neutral-600 mb-16 text-lg">Choose the plan that fits your ministry</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-neutral-200 rounded-lg p-8 hover:border-neutral-300 transition">
            <h3 className="text-2xl font-medium text-neutral-900 mb-2">Free Forever</h3>
            <div className="text-4xl font-light text-neutral-900 mb-6">$0</div>
            <ul className="space-y-3 mb-8">
              {[
                'Join unlimited public rooms',
                'Share prayer requests',
                'Create 1 circle (up to 10 members)',
                'Basic scheduling'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-600">
                  <Check className="w-5 h-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://app.pray.so/signup"
              className="block w-full text-center bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition"
            >
              Start for Free
            </a>
          </div>

          <div className="border-2 border-neutral-900 rounded-lg p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-4 py-1 rounded-full text-sm">
              Coming Soon
            </div>
            <h3 className="text-2xl font-medium text-neutral-900 mb-2">Premium</h3>
            <div className="text-4xl font-light text-neutral-900 mb-6">$9<span className="text-lg text-neutral-600">/month</span></div>
            <ul className="space-y-3 mb-8">
              {[
                'Host unlimited rooms',
                'Unlimited circles',
                'Recording & playback',
                'Advanced scheduling',
                'Custom branding'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-600">
                  <Check className="w-5 h-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="block w-full text-center border-2 border-neutral-900 text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-50 transition"
            >
              Join Waiting List
            </button>
          </div>

          <div className="border border-neutral-200 rounded-lg p-8 hover:border-neutral-300 transition relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-4 py-1 rounded-full text-sm">
              Coming Soon
            </div>
            <h3 className="text-2xl font-medium text-neutral-900 mb-2">Church Plan</h3>
            <div className="text-4xl font-light text-neutral-900 mb-6">$49<span className="text-lg text-neutral-600">/month</span></div>
            <ul className="space-y-3 mb-8">
              {[
                'Everything in Premium',
                '10 hosts',
                '500 participants per room',
                'Admin dashboard',
                'Custom subdomain',
                'Dedicated support'
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-neutral-600">
                  <Check className="w-5 h-5 text-neutral-700 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsModalOpen(true)}
              className="block w-full text-center border-2 border-neutral-900 text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-50 transition"
            >
              Join Waiting List
            </button>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Start Your Prayer Journey Today</h2>
          <p className="text-xl text-neutral-300 mb-8">Join thousands of believers praying together right now.</p>
          <a
            href="https://app.pray.so/signup"
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

      <footer className="border-t border-neutral-200 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-medium text-neutral-900 mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-neutral-600 hover:text-neutral-900">Features</a></li>
                <li><a href="#pricing" className="text-neutral-600 hover:text-neutral-900">Pricing</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">System Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">Help Center</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">Blog</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">Prayer Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">About</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">Contact</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">Privacy Policy</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">Terms of Service</a></li>
                <li><a href="#" className="text-neutral-600 hover:text-neutral-900">Community Guidelines</a></li>
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-medium text-neutral-900 mb-2">
                  Be the First to Experience Pray.so Premium
                </h3>
                <p className="text-neutral-600 mb-6">
                  Join our waiting list for early access, updates, and launch discounts.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-700 mb-1">Name (optional)</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-700 mb-1">Email (required)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-neutral-700 mb-1">Role</label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900"
                    >
                      <option value="individual">Individual</option>
                      <option value="church">Church</option>
                      <option value="ministry">Ministry</option>
                    </select>
                  </div>

                  <p className="text-sm text-neutral-500">
                    We'll only use your email for Pray.so updates — no spam, ever.
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition"
                  >
                    Join the Waiting List
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-medium text-neutral-900 mb-2">You're on the list!</h3>
                <p className="text-neutral-600 mb-6">
                  We'll notify you when Premium plans launch.
                </p>
                <a
                  href="https://app.pray.so/signup"
                  className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg hover:bg-neutral-800 transition"
                >
                  Start Free Account
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
