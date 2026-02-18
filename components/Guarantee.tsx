import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-12 px-4 bg-[#0F1E3A] border-t border-[#8C6B1F]/20">
      <div className="max-w-3xl mx-auto border border-[#8C6B1F]/30 rounded-xl bg-[#0a0a0a] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#8C6B1F] to-transparent opacity-50"></div>

        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-[#8C6B1F]" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
          Garantia incondicional de <span className="text-[#8C6B1F]">7 dias</span>
        </h3>
        
        <p className="text-[#B8B8B8] text-sm md:text-base max-w-lg mx-auto mb-2">
          Se você não sentir nenhuma diferença, devolvemos seu dinheiro.
        </p>
        <p className="text-[#B8B8B8] text-xs">
          Sem perguntas. Sem letras miúdas.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;