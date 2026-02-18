import React from 'react';
import Button from './ui/Button';

const Hero = () => {
  const scrollToProblem = () => {
    const section = document.getElementById('problem-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-10 pb-16 px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center text-center bg-[#000000]">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
        Você sente que está perdendo alguém para o <span className="text-[#8C6B1F]">vício</span>…<br />
        e não sabe mais o que fazer?
      </h1>

      <img 
        src="https://i.ibb.co/6JsyXjbx/Design-sem-nome-14.png" 
        alt="Família restaurada" 
        className="w-full max-w-3xl rounded-xl shadow-2xl mb-8 border border-[#8C6B1F]/50"
        fetchPriority="high"
        loading="eager"
        decoding="sync"
      />

      <p className="text-[#B8B8B8] text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
        Especial de Quaresma São 9 Dias de Oração e Combate Espiritual Pela Libertação da Sua Casa.
      </p>

      <Button 
        variant="primary"
        size="xl" 
        className="w-full md:w-auto shadow-[0_0_30px_rgba(31,122,62,0.5)] animate-bounce-slow"
        onClick={scrollToProblem}
      >
        👉 Começar por apenas R$9,90
      </Button>
    </section>
  );
};

export default Hero;