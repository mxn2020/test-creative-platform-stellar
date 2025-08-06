import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
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
              devId={`faq-item-${idx}`}
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