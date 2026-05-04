/**
 * @file App.jsx
 * @description Root application component. Composes the full page layout
 *              by assembling all layout and section components in order.
 */

import React from 'react';

// Layout
import { Navbar }          from './components/layout/Navbar';
import { Footer }          from './components/layout/Footer';

// Sections
import { Hero }            from './components/sections/Hero/Hero';
import { FeaturedMoments } from './components/sections/FeaturedMoments/FeaturedMoments';
import { Destinations }    from './components/sections/Destinations/Destinations';
import { VisaSection }     from './components/sections/VisaSection/VisaSection';
import { WhyUs }           from './components/sections/WhyUs/WhyUs';
import { Testimonials }    from './components/sections/Testimonials/Testimonials';
import { CTASection }      from './components/sections/CTASection/CTASection';

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedMoments />
        <Destinations />
        <VisaSection />
        <WhyUs />
        <Testimonials />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
