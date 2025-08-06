import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface HeroProps {
  mounted?: boolean;
}

export const LandingHero: React.FC<HeroProps> = ({ mounted = false }) => {
  return (
    <section
      data-testid="landing-hero"
      className={cn(
        'flex flex-col items-center justify-center py-20 px-4 text-center',
        mounted ? 'animate-fade-in-up' : ''
      )}
    >
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
        Empower Your Business with Seamless Solutions
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-200">
        A flexible, scalable platform built to streamline operations, boost productivity,
        and deliver real‑time insights—all wrapped in a beautiful, intuitive UI.
      </p>

      <div className="mt-10 flex gap-4">
        <Link to="/register">
          <Button variant="primary" className="px-8 py-3 text-lg">
            Get Started
          </Button>
        </Link>
        <Link to="/demo">
          <Button variant="secondary" className="px-8 py-3 text-lg">
            View Demo
          </Button>
        </Link>
      </div>

      <div className="mt-12 w-full max-w-4xl">
        <img
          src="https://source.unsplash.com/featured/1200x600?technology,office"
          alt="Hero illustration"
          className="rounded-lg shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
};