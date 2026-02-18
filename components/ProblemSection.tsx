import React from 'react';

const ProblemSection = () => {
  return (
    <section id="problem-section" className="py-20 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <img 
              src="https://i.ibb.co/p63vfrcm/Design-sem-nome-13.png" 
              alt="Pessoa preocupada" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500">
              A Dor Silenciosa de Quem Está Perdendo Alguém Para o Vício
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></span>
                  Medo de uma ligação de madrugada
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></span>
                  Discussões dentro de casa
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></span>
                  Mentiras repetidas
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></span>
                  Sensação de impotência
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0"></span>
                  Culpa por não conseguir ajudar
                </li>
              </ul>
              
              <p className="italic text-gray-400 text-base border-l-4 border-red-500 pl-4 py-1 mt-6">
                O vício não atinge só quem usa. Ele destrói toda a família.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;