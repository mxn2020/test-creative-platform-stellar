import React, { useEffect, useState } from 'react';
import { Container, Div } from '../lib/dev-container';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { LandingHero } from '@/components/landing/Hero';
import { LandingStats } from '@/components/landing/Stats';
import { LandingFeatures } from '@/components/landing/Features';
import { LandingTestimonials } from '@/components/landing/Testimonials';
import { LandingCTA } from '@/components/landing/CTA';
import { LandingFAQ } from '@/components/landing/FAQ';
import { LandingFooter } from '@/components/landing/LandingFooter';

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container componentId="landing-page-root">
      <Div
        devId="main-wrapper"
        devName="Main Wrapper"
        devDescription="Main page wrapper with gradient background"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Header */}
        <LandingHeader />

        {/* Hero Section */}
        <LandingHero mounted={mounted} />

        {/* Stats Section */}
        <LandingStats />

        {/* Features Section */}
        <LandingFeatures />

        {/* Testimonials Section */}
        <LandingTestimonials />

        {/* Call‑to‑Action Section */}
        <LandingCTA />

        {/* FAQ Section */}
        <LandingFAQ />

        {/* Footer */}
        <LandingFooter />
      </Div>
    </Container>
  );
};

export default Landing;