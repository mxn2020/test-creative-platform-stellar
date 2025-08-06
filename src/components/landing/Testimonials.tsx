import React from 'react';
import { Container, Div, H1, P } from '@/lib/dev-container';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'CEO, Acme Corp',
    comment: 'The platform transformed the way we manage clients—saving us hours every week.',
  },
  {
    name: 'Maria Gomez',
    role: 'Founder, StartupX',
    comment: 'Intuitive, powerful, and everything we needed in one place.',
  },
  {
    name: 'Liam Patel',
    role: 'Product Manager, Innovate Ltd',
    comment: 'Analytics are spot‑on; we can act on data before the competition even sees it.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <Container componentId="landing-testimonials">
      <Div devId="testimonials-section" className="py-20 bg-white">
        <H1 devId="testimonials-title" className="text-3xl font-bold text-center text-gray-800">
          What Our Users Say
        </H1>
        <Div devId="testimonials-grid" className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {testimonials.map((t, idx) => (
            <Div
              key={idx}
              devId={`testimonial-${idx}`}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg"
            >
              <Quote className="h-6 w-6 text-purple-600 mb-4" />
              <P devId={`testimonial-comment-${idx}`} className="text-center text-gray-700 italic">
                “{t.comment}”
              </P>
              <Div className="mt-4 text-center">
                <H1 devId={`testimonial-name-${idx}`} className="font-semibold text-gray-900">
                  {t.name}
                </H1>
                <P devId={`testimonial-role-${idx}`} className="text-sm text-gray-600">
                  {t.role}
                </P>
              </Div>
            </Div>
          ))}
        </Div>
      </Div>
    </Container>
  );
};

export default Testimonials;