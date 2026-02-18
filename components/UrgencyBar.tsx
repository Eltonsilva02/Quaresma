import React from 'react';

const UrgencyBar = () => {
  return (
    <div className="relative w-full z-[60] bg-[#d19e1f] shadow-lg border-b border-white/20 flex flex-col md:flex-row items-center justify-center px-4 py-3 md:py-4 min-h-[60px] gap-2">
      
      <div className="flex flex-col md:flex-row items-center text-center gap-1 md:gap-3">
        <span className="text-white font-bold text-sm md:text-base drop-shadow-md font-sans">
          Não espere a próxima crise para agir.
        </span>
        <span className="text-blue-800 font-black text-base md:text-xl uppercase animate-pulse drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] tracking-wide font-sans">
          NÃO SAIA ANTES DE LER.
        </span>
      </div>

    </div>
  );
};

export default UrgencyBar;