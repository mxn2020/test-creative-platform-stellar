import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const LandingCTA: React.FC = () => {
  return (
    <section
      data-testid="landing-cta"
      className="py-20 bg-purple-600 text-white text-center"
    >
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg mb-8">
          Join thousands of businesses already enjoying faster, smarter, and more secure operations.
        </p>
        <Link to="/register">
          <Button variant="primary" className={cn('bg-white text-purple-600 hover:bg-gray-100')}>
            Start Your Free Trial
          </Button>
        </Link>
      </div>
    </section>
  );
};