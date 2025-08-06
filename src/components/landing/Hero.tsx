import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  /** Determines if the component should animate after mount */
  mounted?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ mounted = false }) => {
  return (
    <section
      className={cn(
        'flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8',
        mounted && 'animate-fade-in-up'
      )}
    >
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
        Empower Your Business
      </h1>
      <p className="mt-6 max-w-3xl text-lg text-gray-200">
        A flexible, scalable solution built to help you grow. From insights to
        automation, we bring everything you need under one roof.
      </p>

      <div className="mt-10 flex gap-4">
        <Button
          devId="hero-primary-cta"
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          Get Started
        </Button>
        <Button
          devId="hero-secondary-cta"
          variant="outline"
          className="border-gray-300 text-gray-300 hover:bg-gray-800"
        >
          Learn More
        </Button>
      </div>

      {/* Placeholder illustration */}
      <div className="mt-12 w-full max-w-4xl">
        <img
          src="/images/hero-illustration.svg"
          alt="Hero illustration"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;