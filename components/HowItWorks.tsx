import React from 'react';

const steps = [
  { id: 1, text: "Faça a compra com 1 clique" },
  { id: 2, text: "Receba acesso imediato ao conteúdo" },
  { id: 3, text: "Aplique o hábito matinal em casa" },
  { id: 4, text: "Sinta os primeiros sinais em até 7 dias" }
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-4 bg-[#000000]">
      <div className="max-w-5xl mx-auto border border-[#8C6B1F]/20 rounded-2xl bg-[#0a0a0a] p-8 md:p-12">
        <h3 className="text-2xl font-bold text-center mb-10 text-white">Como funciona:</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-0.5 bg-[#8C6B1F]/20 -z-10 w-[70%] mx-auto left-0 right-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#8C6B1F] rounded-full flex items-center justify-center font-bold text-white mb-4 shadow-lg shadow-[#8C6B1F]/20 relative z-10 border border-[#A68A3A]">
                {step.id}
              </div>
              <p className="text-xs md:text-sm text-[#B8B8B8] max-w-[150px] leading-snug">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;