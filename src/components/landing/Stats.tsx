import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Active Users', value: '12,345' },
  { label: 'Monthly Sessions', value: '98,765' },
  { label: 'Tasks Processed', value: '1.2M' },
  { label: 'Uptime', value: '99.99%' },
];

export const LandingStats: React.FC = () => {
  return (
    <section data-testid="landing-stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Trusted by Thousands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center">
              <CardHeader>
                <CardTitle className="text-4xl font-semibold text-gray-900">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">{stat.label}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};