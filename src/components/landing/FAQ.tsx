import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const faqData = [
  {
    question: 'What is the pricing model?',
    answer:
      'We offer a flexible subscription model with monthly and annual plans. No hidden fees and a free trial for new users.',
  },
  {
    question: 'Can I integrate with existing tools?',
    answer:
      'Yes. Our platform provides REST APIs, webhooks, and pre‑built connectors for popular services like Slack, Zapier, and GitHub.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is encrypted in transit and at rest. We follow industry‑standard security practices and undergo regular audits.',
  },
  {
    question: 'Do you provide onboarding assistance?',
    answer:
      'Our onboarding specialists will help you get started with a dedicated setup session, documentation, and 24/7 support.',
  },
];

export const LandingFAQ: React.FC = () => {
  return (
    <section
      data-testid="landing-faq"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionHeader className="text-lg font-medium">
                {item.question}
              </AccordionHeader>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};