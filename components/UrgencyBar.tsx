import React from 'react';

const UrgencyBar = () => {
  return (
    <div className="relative w-full z-[60] bg-[#0F1E3A] border-b-2 border-[#8C6B1F] shadow-lg flex items-center justify-center px-4 min-h-[70px] md:min-h-[80px]">
      
      <div className="flex flex-col md:flex-row items-center text-center gap-1 md:gap-6">
        
        <span className="text-[#D4AF37] font-extrabold text-sm md:text-lg tracking-wide drop-shadow-md leading-tight">
          NÃO ESPERE A PRÓXIMA CRISE PARA AGIR.
        </span>

        <span className="text-white font-black text-base md:text-xl uppercase tracking-wider drop-shadow-lg animate-pulse leading-tight">
          NÃO SAIA ANTES DE LER.
        </span>

      </div>

    </div>
  );
};

export default UrgencyBar;
