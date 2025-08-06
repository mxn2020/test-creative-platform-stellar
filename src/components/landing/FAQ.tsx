import React, { useState } from 'react';
import { Container, Div, H1, P, Button } from '@/lib/dev-container';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    question: 'What is the platform built on?',
    answer:
      'Our platform is built with a modern stack: React, TypeScript, Tailwind CSS, and Prisma for data management.',
  },
  {
    question: 'Can I import existing client data?',
    answer:
      'Yes! You can import CSV or JSON files directly from the Settings page to migrate your data.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'We offer a generous free tier that includes unlimited users and basic analytics. Premium features are available on paid plans.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container componentId="landing-faq">
      <Div devId="faq-section" className="py-20 bg-gray-50">
        <H1 devId="faq-title" className="text-3xl font-bold text-center text-gray-800">
          Frequently Asked Questions
        </H1>
        <Div devId="faq-list" className="mt-12 max-w-2xl mx-auto space-y-4">
          {faqItems.map((item, idx) => (
            <Div key={idx} devId={`faq-item-${idx}`} className="border-b pb-4">
              <Button
                devId={`faq-question-${idx}`}
                className="w-full flex justify-between items-center text-left text-gray-900"
                onClick={() => toggle(idx)}
              >
                <P className="font-medium">{item.question}</P>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </Button>
              {openIndex === idx && (
                <P devId={`faq-answer-${idx}`} className="mt-3 text-gray-600">
                  {item.answer}
                </P>
              )}
            </Div>
          ))}
        </Div>
      </Div>
    </Container>
  );
};

export default FAQ;