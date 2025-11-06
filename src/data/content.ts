import { Radio, MessageSquare, Lock, Clock, MessageCircle, Tag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface UseCase {
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  ctaLink?: string;
  comingSoon?: boolean;
  highlighted?: boolean;
}

export interface ComparisonRow {
  feature: string;
  traditional: string;
  prayso: string;
}

export const features: Feature[] = [
  { icon: Radio, title: 'Live Prayer Rooms', desc: 'Host or join real-time gatherings.' },
  { icon: MessageSquare, title: 'Prayer Wall', desc: 'Share and lift up prayer requests.' },
  { icon: Lock, title: 'Private Circles', desc: 'Create trusted, invite-only groups.' },
  { icon: Clock, title: 'Scheduled Prayer Times', desc: 'Set reminders and recurring meetings.' },
  { icon: MessageCircle, title: 'Interactive Chat', desc: 'Type prayers and encourage others live.' },
  { icon: Tag, title: 'Prayer Categories', desc: 'Join rooms by theme — healing, worship, etc.' }
];

export const steps: Step[] = [
  { num: '1', title: 'Create Your Account', desc: 'No credit card required.' },
  { num: '2', title: 'Join or Host a Room', desc: 'Public or private options.' },
  { num: '3', title: 'Pray Together', desc: 'Use mic or text chat.' },
  { num: '4', title: 'Build Community', desc: 'Follow others and form circles.' }
];

export const useCases: UseCase[] = [
  { title: 'For Individuals', desc: 'Find prayer partners anytime.' },
  { title: 'For Churches', desc: 'Extend your ministry beyond Sunday.' },
  { title: 'For Small Groups', desc: 'Stay connected between meetings.' },
  { title: 'For Ministries', desc: 'Reach believers worldwide.' }
];

export const testimonials: Testimonial[] = [
  { quote: 'Pray.so transformed our church\'s prayer life.', author: 'Sarah M., Church Leader' },
  { quote: 'I found genuine prayer partners across the world.', author: 'David K., Student' },
  { quote: 'We prayed with believers from 12 countries.', author: 'Pastor James' }
];

export const stats = [
  { value: '10,000+', label: 'Prayer Rooms Hosted' },
  { value: '50,000+', label: 'Prayer Requests Shared' },
  { value: '100+', label: 'Countries Represented' }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Free Forever',
    price: '$0',
    features: [
      'Join unlimited public rooms',
      'Share prayer requests',
      'Create 1 circle (up to 10 members)',
      'Basic scheduling'
    ],
    cta: 'Start for Free',
    ctaLink: 'https://app.pray.so/signup'
  },
  {
    name: 'Premium',
    price: '$9',
    period: '/month',
    features: [
      'Host unlimited rooms',
      'Unlimited circles',
      'Recording & playback',
      'Advanced scheduling',
      'Custom branding'
    ],
    cta: 'Join Waiting List',
    comingSoon: true,
    highlighted: true
  },
  {
    name: 'Church Plan',
    price: '$49',
    period: '/month',
    features: [
      'Everything in Premium',
      '10 hosts',
      '500 participants per room',
      'Admin dashboard',
      'Custom subdomain',
      'Dedicated support'
    ],
    cta: 'Join Waiting List',
    comingSoon: true
  }
];

export const securityFeatures = [
  'End-to-end encrypted rooms available',
  'Invite-only circles',
  'No data selling — ever',
  'Host moderation tools',
  'Full user control over privacy'
];

export const comparisonData: ComparisonRow[] = [
  { feature: 'Location Bound', traditional: 'Yes', prayso: 'No – Global' },
  { feature: 'Fixed Schedules', traditional: 'Yes', prayso: '24/7 Access' },
  { feature: 'Limited Size', traditional: 'Yes', prayso: 'Unlimited' },
  { feature: 'Setup Time', traditional: 'High', prayso: 'Join in Seconds' }
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'System Status', href: '#' }
  ],
  resources: [
    { label: 'Help Center', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Prayer Guide', href: '#' }
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Careers', href: '#' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Community Guidelines', href: '#' }
  ]
};
