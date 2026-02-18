import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto border border-white/10 rounded-xl bg-[#0a0a0a] p-8 md:p-12 text-center relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-50"></div>

        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-red-600" strokeWidth={1.5} />
        </div>
        
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          Garantia incondicional de <span className="text-red-500">7 dias</span>
        </h3>
        
        <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-2">
          Se você não sentir nenhuma diferença, devolvemos seu dinheiro.
        </p>
        <p className="text-gray-600 text-xs">
          Sem perguntas. Sem letras miúdas.
        </p>
      </div>
    </section>
  );
};

export default Guarantee;