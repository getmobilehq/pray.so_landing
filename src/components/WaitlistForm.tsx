import { useState, FormEvent } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  role: string;
}

export function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', role: 'individual' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          {
            name: formData.name || null,
            email: formData.email,
            role: formData.role,
            created_at: new Date().toISOString()
          }
        ]);

      if (supabaseError) throw supabaseError;

      setIsSubmitted(true);
    } catch (err: any) {
      console.error('Error submitting form:', err);
      const errorMessage = err?.message || err?.error_description || 'Failed to submit. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-medium text-neutral-900 mb-2">You're on the list!</h3>
        <p className="text-neutral-600 mb-6">
          We'll notify you when Premium plans launch.
        </p>
        <Button href="https://app.pray.so/signup">
          Start Free Account
        </Button>
      </div>
    );
  }

  return (
    <>
      <h3 className="text-2xl font-medium text-neutral-900 mb-2">
        Be the First to Experience Pray.so Premium
      </h3>
      <p className="text-neutral-600 mb-6">
        Join our waiting list for early access, updates, and launch discounts.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-neutral-700 mb-1">
            Name (optional)
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-neutral-700 mb-1">
            Email (required)
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-sm text-neutral-700 mb-1">
            Role
          </label>
          <select
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900"
            disabled={isLoading}
          >
            <option value="individual">Individual</option>
            <option value="church">Church</option>
            <option value="ministry">Ministry</option>
          </select>
        </div>

        {error && (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        )}

        <p className="text-sm text-neutral-500">
          We'll only use your email for Pray.so updates — no spam, ever.
        </p>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Submitting...' : 'Join the Waiting List'}
        </Button>
      </form>
    </>
  );
}
