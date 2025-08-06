import React from 'react';
import { Container, Div, H1, P, Button } from '@/lib/dev-container';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  mounted?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ mounted = false }) => {
  return (
    <Container componentId="landing-hero">
      <Div
        devId="hero-section"
        className={cn(
          'flex flex-col items-center justify-center py-20 px-4 text-center',
          'bg-cover bg-center bg-no-repeat',
          'bg-[url(/images/hero-bg.jpg)]'
        )}
      >
        <H1 devId="hero-title" className="text-5xl font-extrabold text-white drop-shadow-lg">
          Empower Your Business
        </H1>
        <P devId="hero-subtitle" className="mt-4 text-xl text-gray-200 max-w-2xl">
          A single platform to manage clients, appointments, and analytics—all in one place.
        </P>

        {mounted && (
          <Link to="/dashboard">
            <Button
              devId="hero-cta-button"
              className="mt-8 bg-purple-600 hover:bg-purple-700 text-white font-medium"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        )}
      </Div>
    </Container>
  );
};

export default Hero;