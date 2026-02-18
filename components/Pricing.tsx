import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-2">Escolha seu plano</h3>
          <p className="text-gray-500 text-sm">Sem pegadinhas. Acesso imediato.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {/* Plano Básico (Updated to match design) */}
          <div className="bg-[#121212] rounded-xl p-8 border border-white/10 flex flex-col relative transform hover:scale-105 transition-transform duration-300">
             <div className="text-center mb-8">
                <h4 className="text-lg font-bold text-white mb-4 leading-tight">Comece hoje a lutar pela sua família</h4>
                <div className="flex flex-col items-center">
                    <span className="text-red-600 font-bold line-through text-lg mb-1">De: R$29</span>
                    <div className="text-4xl font-black text-green-500 mb-2">Por apenas: R$9,90</div>
                </div>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                <span>Bônus: Oração matinal de 3 minutos</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-red-600 shrink-0" />
                <span>Acesso imediato após pagamento.</span>
              </li>
            </ul>

            <a 
              href="https://www.ggcheckout.com/checkout/v2/SwsacXDTz5MG6FoxqXMx"
              className="w-full py-4 rounded-lg font-bold text-sm md:text-base bg-green-600 text-white hover:bg-green-700 transition-colors shadow-lg shadow-green-900/40 animate-pulse uppercase tracking-wide block text-center"
            >
              QUERO COMEÇAR A NOVENA AGORA
            </a>
          </div>

          {/* Kit Guerra Espiritual (Antigo Plano Completo) */}
          <div className="bg-[#121212] rounded-xl p-8 border border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.15)] flex flex-col relative transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-6 py-1.5 rounded-full uppercase tracking-wide">
              Mais Popular
            </div>

            <div className="text-center mb-8">
                <h4 className="text-xl font-bold text-white mb-2 leading-tight">Kit Guerra Espiritual Pela Família</h4>
                <p className="text-xs text-gray-400 mb-4">
                  Pra você quer ir além da libertação<br />
                  e proteger toda a sua casa…
                </p>
                <div className="flex flex-col items-center">
                    <span className="text-red-600 font-bold line-through text-lg mb-1">De 67,00</span>
                    <div className="text-4xl font-black text-green-500 mb-2">Por apenas R$27,90</div>
                </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
               <li className="flex gap-3 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>A Novena da Libertação</span>
              </li>
               <li className="flex gap-3 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Consagração da Casa</span>
              </li>
               <li className="flex gap-3 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Oração das Madrugadas</span>
              </li>
               <li className="flex gap-3 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>21 Declarações “Quem Como Deus?”</span>
              </li>
              <li className="flex gap-3 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                <span>Guia rápido de blindagem contra recaídas</span>
              </li>
            </ul>

            <div className="text-center mb-4">
              <p className="text-xs text-gray-400 italic">Não lute uma guerra espiritual com armas incompletas.</p>
            </div>

            <a 
              href="https://www.ggcheckout.com/checkout/v2/vfKxpiuPgsNeWcbn85E5"
              className="w-full py-4 rounded-lg font-bold text-sm bg-green-600 text-white hover:bg-green-700 transition-colors shadow-lg shadow-green-900/40 animate-pulse uppercase tracking-wide block text-center"
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