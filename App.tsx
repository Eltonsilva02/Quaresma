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
    <div className="min-h-screen bg-[#000000] text-[#B8B8B8] font-sans selection:bg-[#8C6B1F] selection:text-white overflow-x-hidden">
      <UrgencyBar />
      <main>
        <Hero />
        <ProblemSection />
        <VisionSection />
        <WhatYouGet />
        <HowItWorks />
        <div className="py-12 bg-[#0F1E3A] border-t border-b border-[#8C6B1F]/30">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Por que isso é <span className="text-[#8C6B1F]">diferente</span>?</h2>
                <p className="text-[#B8B8B8] mb-2">Esta novena não substitui tratamento médico.<br />Mas fortalece espiritualmente quem está lutando e quem ama.</p>
                <p className="text-[#B8B8B8] mb-2">Você deixa de se sentir impotente. Você passa a agir.</p>
                <p className="text-[#8C6B1F] font-medium">Você sente que está protegendo sua casa.</p>
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