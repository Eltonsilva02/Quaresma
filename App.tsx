import React from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import VisionSection from './components/VisionSection';
import WhatYouGet from './components/WhatYouGet';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';
import UrgencyBar from './components/UrgencyBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-200 font-sans selection:bg-red-900 selection:text-white overflow-x-hidden">
      <UrgencyBar />
      <main>
        <Hero />
        <ProblemSection />
        <VisionSection />
        <WhatYouGet />
        <HowItWorks />
        <div className="py-12 bg-neutral-900/30">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Por que isso é <span className="text-red-500">diferente</span>?</h2>
                <p className="text-gray-400 mb-2">Esta novena não substitui tratamento médico.<br />Mas fortalece espiritualmente quem está lutando e quem ama.</p>
                <p className="text-gray-400 mb-2">Você deixa de se sentir impotente. Você passa a agir.</p>
                <p className="text-red-500 font-medium">Você sente que está protegendo sua casa.</p>
            </div>
        </div>
        <Benefits />
        <Testimonials />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}