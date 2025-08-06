import React from 'react';
import { Button } from '@/components/ui/button';
export const CTA: React.FC = () => {
  return (
    <section className="bg-purple-600 py-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Ready to Accelerate Your Growth?
      </h2>
      <p className="text-lg text-purple-200 mb-8">
        Join thousands of businesses that trust our platform.
      </p>
      <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold">
        Start Your Free Trial
      </Button>
    </section>
  );
};
export default CTA;
---END:src/components/landing/CTA.tsx---
---FILE:src/components/landing/FAQ.tsx---
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
interface FAQItem {
  question: string;
  answer: string;
}
export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqList: FAQItem[] = [
    {
      question: 'What is the pricing model?',
      answer:
        'We offer a flexible subscription model with monthly and annual plans. All features are included in the premium tier.',
    },
    {
      question: 'Can I import existing data?',
      answer:
        'Yes, our migration tools let you import data from CSV, Excel, or other platforms with a few clicks.',
    },
    {
      question: 'Is there a free trial?',
      answer:
        'A 14‑day free trial is available with no credit card required. You can upgrade anytime.',
    },
  ];
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqList.map((item, idx) => (
            <Card
              key={idx}
              className="p-4 cursor-pointer"
              onClick={() => toggle(idx)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-gray-800">{item.question}</h4>
                {openIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </div>
              {openIndex === idx && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
---END:src/components/landing/FAQ.tsx---
---FILE:src/components/landing/Features.tsx---
import React from 'react';
import { Card } from '@/components/ui/card';
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export const Features: React.FC = () => {
  const featureList: Feature[] = [
    {
      title: 'Analytics',
      description: 'Deep insights with real‑time dashboards and custom reports.',
      icon: <svg className="h-8 w-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10a8 8 0 1016 0 8 8 0 10-16zM9 5h2v6l3 3-1.5 1.5L9 12V5z"/></svg>,
    },
    {
      title: 'Automation',
      description: 'Streamline workflows with powerful automation tools.',
      icon: <svg className="h-8 w-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4z"/></svg>,
    },
    {
      title: 'Collaboration',
      description: 'Team spaces, comments, and shared resources.',
      icon: <svg className="h-8 w-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a5 5 0 00-5 5v1H4a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2V10a2 2 0 00-2-2h-1V7a5 5 0 00-5-5z"/></svg>,
    },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureList.map((feat) => (
          <Card
            key={feat.title}
            className="bg-white hover:shadow-lg transition-shadow p-6 text-center"
          >
            <div className="flex justify-center mb-4">{feat.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{feat.title}</h3>
            <p className="mt-2 text-gray-600">{feat.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Features;
---END:src/components/landing/Features.tsx---