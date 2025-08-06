import React from 'react';
import { Card } from '@/components/ui/card';
interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}
export const Stats: React.FC = () => {
  const stats: StatItem[] = [
    {
      label: 'Active Users',
      value: '12,342',
      icon: <svg className="h-6 w-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9V5h2v4h-2zM9 11h2v2H9v-2z"/></svg>,
    },
    {
      label: 'Monthly Sessions',
      value: '98,765',
      icon: <svg className="h-6 w-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/></svg>,
    },
    {
      label: 'Support Tickets',
      value: '1,023',
      icon: <svg className="h-6 w-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a7 7 0 00-4.95 11.95c.28.28.72.28 1 0 .28-.28.28-.72 0-1A5 5 0 1114 9c0 .28.22.5.5.5h1a.5.5 0 110 1h-1A6.5 6.5 0 009 16a6.5 6.5 0 01-5.5-9.5c.28-.28.72-.28 1 0 .28.28.28.72 0 1A5 5 0 109 14c.28 0 .5-.22.5-.5V9a.5.5 0 110-1V5a.5.5 0 010-1z"/></svg>,
    },
  ];
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <Card
            key={item.label}
            className="bg-gray-800 text-center py-8"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <p className="text-sm text-gray-400">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Stats;