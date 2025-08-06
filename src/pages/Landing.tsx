import React, { useEffect, useState } from 'react';
import { Container, Div } from '@/lib/dev-container';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { Hero } from '@/components/landing/Hero';
import { Stats } from '@/components/landing/Stats';
import { Features } from '@/components/landing/Features';
import { Testimonials } from '@/components/landing/Testimonials';
import { CTA } from '@/components/landing/CTA';
import { FAQ } from '@/components/landing/FAQ';
import { LandingFooter } from '@/components/landing/LandingFooter';

export const Landing: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Container componentId="landing-page-root">
      <Div
        devId="landing-main-wrapper"
        devName="Landing Main Wrapper"
        devDescription="Full-screen wrapper with gradient background"
        className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Header */}
        <LandingHeader />

        {/* Hero Section */}
        <Hero mounted={mounted} />

        {/* Stats Section */}
        <Stats />

        {/* Features Section */}
        <Features />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTA />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <LandingFooter />
      </Div>
    </Container>
  );
};

export default Landing;