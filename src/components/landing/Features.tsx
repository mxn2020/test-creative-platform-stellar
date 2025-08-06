import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { CheckCircle, ChartBar, Users, Shield } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Easy Onboarding',
    description: 'Get started in minutes with guided setup and instant access.',
  },
  {
    icon: ChartBar,
    title: 'Analytics Dashboard',
    description: 'Real‑time metrics to monitor performance and make data‑driven decisions.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share tasks, assign roles, and communicate without leaving the app.',
  },
  {
    icon: Shield,
    title: 'Enterprise‑grade Security',
    description: 'Built‑in authentication, encryption, and audit logging for peace of mind.',
  },
];

export const LandingFeatures: React.FC = () => {
  return (
    <section
      data-testid="landing-features"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Features that Drive Success
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="flex items-start p-6 space-x-4">
                <Icon className="h-8 w-8 text-purple-600 flex-shrink-0" />
                <div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="mt-2 text-gray-600">{feature.description}</CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};