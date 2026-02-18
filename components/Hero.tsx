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
    <section className="pt-10 pb-16 px-4 md:px-6 max-w-5xl mx-auto flex flex-col items-center text-center">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
        Você sente que está perdendo alguém para o <span className="text-red-600">vício</span>…<br />
        e não sabe mais o que fazer?
      </h1>

      <img 
        src="https://i.ibb.co/6JsyXjbx/Design-sem-nome-14.png" 
        alt="Família restaurada" 
        className="w-full max-w-3xl rounded-xl shadow-2xl mb-8 border border-white/10"
      />

      <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
        Especial de Quaresma 40 Dias Para Ressuscitar a Esperança da Sua Família
      </p>

      <Button 
        variant="success"
        size="xl" 
        className="w-full md:w-auto shadow-green-900/50 shadow-lg animate-bounce-slow"
        onClick={scrollToProblem}
      >
        👉 Começar por apenas R$9,90
      </Button>
    </section>
  );
};

export default Hero;