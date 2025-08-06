import React from 'react';
import { Container, Div, H1, P } from '@/lib/dev-container';
import { cn } from '@/lib/utils';

const stats = [
  { label: 'Active Users', value: '1,245' },
  { label: 'Monthly Sessions', value: '9,876' },
  { label: 'Projects Managed', value: '342' },
  { label: 'Support Tickets', value: '27' },
];

export const Stats: React.FC = () => {
  return (
    <Container componentId="landing-stats">
      <Div devId="stats-section" className="py-12 bg-gray-100">
        <Div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <Div key={idx} devId={`stat-${idx}`} className="flex flex-col">
              <H1 devId={`stat-value-${idx}`} className="text-3xl font-bold text-purple-600">
                {stat.value}
              </H1>
              <P devId={`stat-label-${idx}`} className="mt-2 text-gray-600">
                {stat.label}
              </P>
            </Div>
          ))}
        </Div>
      </Div>
    </Container>
  );
};

export default Stats;