import React from 'react';

const steps = [
  { id: 1, text: "Faça a compra com 1 clique" },
  { id: 2, text: "Receba acesso imediato ao conteúdo" },
  { id: 3, text: "Aplique o hábito matinal em casa" },
  { id: 4, text: "Sinta os primeiros sinais em até 7 dias" }
];

const HowItWorks = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto border border-white/10 rounded-2xl bg-[#0f0f0f] p-8 md:p-12">
        <h3 className="text-2xl font-bold text-center mb-10 text-gray-200">Como funciona:</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-0.5 bg-neutral-800 -z-10 w-[70%] mx-auto left-0 right-0"></div>

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-white mb-4 shadow-lg shadow-red-900/20 relative z-10">
                {step.id}
              </div>
              <p className="text-xs md:text-sm text-gray-400 max-w-[150px] leading-snug">
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