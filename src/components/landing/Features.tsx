import React from 'react';
import { Container, Div, H1, P } from '@/lib/dev-container';
import { cn } from '@/lib/utils';
import { CheckCircle, LightningBolt, Users, Calendar } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
    title: 'Streamlined Workflow',
    description: 'Automate repetitive tasks and focus on what matters most.',
  },
  {
    icon: <LightningBolt className="h-8 w-8 text-purple-600" />,
    title: 'Real‑Time Insights',
    description: 'Analytics dashboards keep you informed at a glance.',
  },
  {
    icon: <Users className="h-8 w-8 text-purple-600" />,
    title: 'Client Management',
    description: 'All your client data, communications, and history in one place.',
  },
  {
    icon: <Calendar className="h-8 w-8 text-purple-600" />,
    title: 'Appointment Scheduling',
    description: 'Book, edit, and track appointments with ease.',
  },
];

export const Features: React.FC = () => {
  return (
    <Container componentId="landing-features">
      <Div devId="features-wrapper" className="py-16 px-4 bg-white">
        <H1 devId="features-title" className="text-3xl font-bold text-center text-gray-800">
          Features
        </H1>
        <Div devId="features-grid" className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <Div
              key={idx}
              devId={`feature-${idx}`}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              {feat.icon}
              <H1 devId={`feature-title-${idx}`} className="mt-4 text-xl font-semibold text-gray-900">
                {feat.title}
              </H1>
              <P devId={`feature-desc-${idx}`} className="mt-2 text-gray-600">
                {feat.description}
              </P>
            </Div>
          ))}
        </Div>
      </Div>
    </Container>
  );
};

export default Features;