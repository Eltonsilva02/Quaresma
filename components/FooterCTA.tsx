import React from 'react';
import Button from './ui/Button';
import { Clock, ShieldCheck, CreditCard } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#0F1E3A] to-[#000000] relative border-t border-[#8C6B1F]/30">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 mb-8 animate-pulse">
            <Clock className="w-5 h-5 text-[#8C6B1F]" />
            <span className="text-lg md:text-xl font-bold text-white">
                Oferta especial por <span className="text-[#8C6B1F]">tempo limitado</span>
            </span>
        </div>

        <p className="text-[#B8B8B8] text-sm mb-2">R$9,90 por poucas horas.</p>
        
        <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white">
          Proteja quem você <span className="text-[#8C6B1F]">ama</span>
        </h2>
        
        <p className="text-[#B8B8B8] text-lg mb-2">
          Inicie sua jornada de oração e libertação hoje mesmo.
        </p>
        <p className="text-[#B8B8B8] text-sm mb-10">
            Fé, oração e propósito.
        </p>

        <div className="flex justify-center mb-6">
            <Button 
              variant="primary"
              size="xl" 
              className="shadow-[0_0_40px_rgba(31,122,62,0.4)] hover:shadow-[0_0_60px_rgba(31,122,62,0.6)] animate-pulse"
              onClick={() => window.location.href = 'https://www.ggcheckout.com/checkout/v2/vfKxpiuPgsNeWcbn85E5'}
            >
            👉 Comece Agora – Garantido por 7 Dias
            </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-[10px] uppercase text-[#B8B8B8] font-bold tracking-widest">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Pagamento Seguro</span>
            <span className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> Acesso Imediato</span>
        </div>

      </div>
    </section>
  );
};

export default FooterCTA;