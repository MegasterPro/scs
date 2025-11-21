import React from 'react';
import { ConfigContext } from '../context/ConfigContext';
import Header from './Header';
import Hero from './Hero';
import Vision from './Vision';
import Features from './Features';
import Impact from './Impact';
import International from './International';
import Videos from './Videos';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

export default function Landing() {
  const { config } = React.useContext(ConfigContext);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#010118] via-blue-900 to-[#3d0124] text-[#eaf6ff]">
      <Header />
      <main className="container mx-auto px-6 py-8">
        <Hero cfg={config.hero || {}} />
        <Vision />
        <Features items={config.features || []} />
        <Impact impact={config.impact || {}} meta={config.meta || {}} />
        <International section={config.international || {}} />
        <Videos videos={config.videos || []} />
        <Testimonials items={config.testimonials || []} />
        <CTA footer={config.footer || {}} />
      </main>
      <Footer />
    </div>
  );
}
