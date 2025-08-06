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