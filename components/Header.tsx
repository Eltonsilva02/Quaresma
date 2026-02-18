import React from 'react';
import Button from './ui/Button';

const Header = () => {
  return (
    <header className="fixed top-[110px] md:top-[70px] left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="font-black text-red-600 tracking-tighter text-lg md:text-xl uppercase">
          NOVENA DA LIBERTAÇÃO
        </div>
        <Button size="sm" variant="primary">
          Começar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;