import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] py-12 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="flex items-center gap-2 mb-6 opacity-50">
           <span className="font-black text-red-900 tracking-tighter text-xl uppercase">NOVENA DA LIBERTAÇÃO</span>
        </div>

        <p className="text-gray-600 text-xs text-center max-w-md mb-6 leading-relaxed">
            Este conteúdo tem caráter de aconselhamento espiritual e não substitui tratamento médico ou psicológico especializado.
        </p>

        <div className="flex gap-6 mb-8 text-[10px] text-gray-500 uppercase tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Termos de uso</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Política de privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Suporte e contato</a>
        </div>

        <p className="text-gray-700 text-[10px]">
            © 2025 Novena da Libertação. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;