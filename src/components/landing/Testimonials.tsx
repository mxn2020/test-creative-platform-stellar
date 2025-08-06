import React from 'react';
import { Card } from '@/components/ui/card';
interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}
export const Testimonials: React.FC = () => {
  const data: Testimonial[] = [
    {
      name: 'Alex Johnson',
      role: 'Founder, TechCo',
      quote: 'The platform transformed how we work – insights are instant and actionable.',
      avatar: '/images/avatars/alex.jpg',
    },
    {
      name: 'Maria Gomez',
      role: 'Product Lead, InnovateX',
      quote: 'Automation saved us weeks of manual effort. Highly recommended!',
      avatar: '/images/avatars/maria.jpg',
    },
    {
      name: 'Liam Chen',
      role: 'CTO, ScaleUp',
      quote: 'Scalable and secure – it grows with our business without a hitch.',
      avatar: '/images/avatars/liam.jpg',
    },
  ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((t) => (
          <Card
            key={t.name}
            className="p-6 flex flex-col items-center text-center"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mb-4"
            />
            <p className="italic text-gray-800 flex-1">{t.quote}</p>
            <div className="mt-4 text-sm font-medium text-gray-900">{t.name}</div>
            <div className="text-xs text-gray-500">{t.role}</div>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;