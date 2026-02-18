import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-[#000000]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-2">Escolha seu plano</h3>
          <p className="text-[#B8B8B8] text-sm">Sem pegadinhas. Acesso imediato.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {/* Plano Básico */}
          <div className="bg-[#0F1E3A] rounded-xl p-5 md:p-8 border border-[#8C6B1F]/30 flex flex-col relative transform hover:scale-105 transition-transform duration-300">
             <div className="text-center mb-8">
                <h4 className="text-lg font-bold text-white mb-4 leading-tight">Comece hoje a lutar pela sua família</h4>
                <div className="flex flex-col items-center">
                    <span className="text-red-600 font-bold line-through text-lg mb-1">De: R$29</span>
                    <div className="text-4xl font-black text-white mb-2">Por apenas: <span className="text-[#1F7A3E]">R$9,90</span></div>
                </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-[#8C6B1F] shrink-0" />
                <span>Bônus: Oração matinal de 3 minutos</span>
              </li>
              <li className="flex gap-3 text-sm text-white">
                <CheckCircle2 className="w-5 h-5 text-[#8C6B1F] shrink-0" />
                <span>Acesso imediato após pagamento.</span>
              </li>
            </ul>

            <a 
              href="https://www.ggcheckout.com/checkout/v2/SwsacXDTz5MG6FoxqXMx"
              className="w-full py-4 rounded-lg font-bold text-sm md:text-base bg-[#1F7A3E] text-white hover:bg-[#249B4E] transition-colors shadow-lg shadow-[#1F7A3E]/40 animate-pulse uppercase tracking-wide block text-center"
            >
              QUERO COMEÇAR A NOVENA AGORA
            </a>
          </div>

          {/* Kit Guerra Espiritual */}
          <div className="bg-[#0a0a0a] rounded-xl p-5 md:p-8 border border-[#8C6B1F] shadow-[0_0_30px_rgba(140,107,31,0.15)] flex flex-col relative transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8C6B1F] text-white text-[10px] font-bold px-6 py-1.5 rounded-full uppercase tracking-wide border border-[#A68A3A]">
              Mais Popular
            </div>

            <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-white mb-2 leading-tight">Kit Guerra Espiritual Pela Família</h4>
                <p className="text-xs text-[#B8B8B8] mb-4">
                  Pra você quer ir além da libertação<br />
                  e proteger toda a sua casa…
                </p>
                <div className="flex flex-col items-center">
                    <span className="text-red-600 font-bold line-through text-lg mb-1">De 67,00</span>
                    <div className="text-4xl font-black text-white mb-2">Por apenas <span className="text-[#1F7A3E]">R$27,90</span></div>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
               <li className="flex gap-3 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-[#8C6B1F] shrink-0" />
                <span>A Novena da Libertação</span>
              </li>
               <li className="flex gap-3 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-[#8C6B1F] shrink-0" />
                <span>Consagração da Casa</span>
              </li>
               <li className="flex gap-3 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-[#8C6B1F] shrink-0" />
                <span>Oração das Madrugadas</span>
              </li>
               <li className="flex gap-3 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-[#8C6B1F] shrink-0" />
                <span>21 Declarações “Quem Como Deus?”</span>
              </li>
              <li className="flex gap-3 text-xs text-white">
                <CheckCircle2 className="w-4 h-4 text-[#8C6B1F] shrink-0" />
                <span>Guia rápido de blindagem contra recaídas</span>
              </li>
            </ul>

            <div className="text-center mb-4">
              <p className="text-xs text-[#8C6B1F] font-bold uppercase">NÃO LUTE UMA GUERRA ESPIRITUAL COM ARMAS INCOMPLETAS.</p>
            </div>

            <a 
              href="https://www.ggcheckout.com/checkout/v2/vfKxpiuPgsNeWcbn85E5"
              className="w-full py-4 rounded-lg font-bold text-sm bg-[#1F7A3E] text-white hover:bg-[#249B4E] transition-colors shadow-lg shadow-[#1F7A3E]/40 animate-pulse uppercase tracking-wide block text-center"
            >
              SIM, QUERO O KIT COMPLETO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;