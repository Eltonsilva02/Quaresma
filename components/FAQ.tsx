import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Essa novena realmente funciona?",
    a: "A novena é um instrumento de fé e intercessão. Ela não substitui tratamento médico ou psicológico, mas fortalece espiritualmente quem está lutando e quem ama. Muitas vezes, a mudança começa quando alguém decide orar com constância, direção e intenção clara."
  },
  {
    q: "Serve apenas para vício em drogas?",
    a: (
      <>
        Não. Ela foi estruturada para interceder por:
        <br /><br />
        • Drogas<br />
        • Álcool<br />
        • Jogos<br />
        • Pornografia<br />
        • Compulsões<br />
        • Dependências emocionais
        <br /><br />
        Se existe aprisionamento, existe oração direcionada.
      </>
    )
  },
  {
    q: "Posso fazer a novena por outra pessoa?",
    a: "Sim. Ela foi criada especialmente para mães, pais, avós e familiares que estão sofrendo por alguém que não consegue orar por si. Você pode oferecer cada dia por uma pessoa específica."
  },
  {
    q: "E se a pessoa não quiser mudar?",
    a: "A novena não força ninguém. Mas fortalece espiritualmente o ambiente, a família e quem está intercedendo. Muitas transformações começam de forma invisível."
  },
  {
    q: "Preciso ser muito religioso para fazer?",
    a: "Não. Você precisa apenas de fé e disposição para dedicar alguns minutos por dia. O conteúdo é simples, guiado e acessível."
  },
  {
    q: "Como recebo o acesso?",
    a: "Assim que o pagamento é confirmado, você recebe acesso imediato ao material digital. Pode começar no mesmo dia."
  },
  {
    q: "E se eu já tentei muitas orações antes?",
    a: "Talvez faltasse direção. Talvez faltasse constância. Talvez faltasse começar com intenção clara. Esta novena organiza sua fé em uma jornada estratégica de 9 dias."
  },
  {
    q: "Por que o valor é apenas R$9,90?",
    a: "Porque nossa missão é permitir que qualquer família possa começar a lutar espiritualmente, sem barreira financeira. É um primeiro passo acessível."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 px-4 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          Perguntas <span className="text-red-500">Frequentes</span>
        </h3>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#161616] border border-white/5 rounded-lg overflow-hidden">
              <button 
                onClick={() => toggle(idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors focus:outline-none"
              >
                <span className="font-bold text-sm md:text-base text-gray-200">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-sm text-gray-400 border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;