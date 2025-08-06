import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Alexandra Lee',
    role: 'Founder, StartupX',
    quote: 'The platform transformed the way we work – onboarding, collaboration, and analytics all in one place.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Mark Patel',
    role: 'CTO, GlobalCorp',
    quote: 'Security and reliability are top‑notch. We never worry about data compliance.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sofia Martinez',
    role: 'Product Lead, InnovateNow',
    quote: 'The UI feels so intuitive that our team adopted it instantly without extensive training.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

export const LandingTestimonials: React.FC = () => {
  return (
    <section
      data-testid="landing-testimonials"
      className="py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-6">
              <CardHeader className="flex items-center justify-center">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={t.avatar} />
                  <AvatarFallback>{t.name[0]}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardTitle className="mt-4 text-xl font-semibold">{t.name}</CardTitle>
              <CardContent className="text-gray-600">{t.role}</CardContent>
              <p className="mt-4 italic text-gray-800">“{t.quote}”</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};