import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
            devId={`feature-${feat.title.replace(/\s+/g, '-').toLowerCase()}`}
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