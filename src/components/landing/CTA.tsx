import React from 'react';
import { Container, Div, H1, P, Button } from '@/lib/dev-container';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTA: React.FC = () => {
  return (
    <Container componentId="landing-cta">
      <Div
        devId="cta-section"
        className="flex flex-col items-center justify-center py-20 px-4 bg-purple-600 text-white text-center"
      >
        <H1 devId="cta-title" className="text-4xl font-bold">
          Ready to Streamline Your Operations?
        </H1>
        <P devId="cta-subtitle" className="mt-4 text-lg max-w-xl">
          Join thousands of professionals who trust our platform to grow their business.
        </P>
        <Link to="/dashboard">
          <Button devId="cta-button" className="mt-8 bg-white text-purple-600 hover:bg-gray-100 font-medium">
            <span className="flex items-center gap-2">
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>
        </Link>
      </Div>
    </Container>
  );
};

export default CTA;