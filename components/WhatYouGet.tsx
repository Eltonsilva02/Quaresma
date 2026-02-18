import React from 'react';
import { BookOpen, Shield, Heart, MessageCircle, Bird } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-[#8C6B1F]" />,
    text: "9 dias de oração guiada passo a passo"
  },
  {
    icon: <Shield className="w-6 h-6 text-[#8C6B1F]" />,
    text: "Clamor específico contra drogas, álcool, jogos e compulsões"
  },
  {
    icon: <Heart className="w-6 h-6 text-[#8C6B1F]" />,
    text: "Direcionamento espiritual diário"
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-[#8C6B1F]" />,
    text: "Frases de fortalecimento para momentos de crise"
  },
  {
    icon: <Bird className="w-6 h-6 text-white" />,
    text: "Ato final de consagração da pessoa amada"
  }
];

const WhatYouGet = () => {
  return (
    <section className="py-16 bg-[#0F1E3A] border-y border-[#8C6B1F]/20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          🛡️ Novena da Libertação dos Vícios
        </h3>
        <p className="text-2xl text-[#8C6B1F] font-bold mb-12">
          Por apenas R$9,90
        </p>
        
        <div className="bg-[#000000] border border-[#8C6B1F]/30 p-5 md:p-8 rounded-2xl max-w-2xl mx-auto text-left shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8C6B1F] to-[#A68A3A]"></div>
           <h4 className="text-xl font-bold mb-8 text-white border-b border-[#8C6B1F]/20 pb-4">
             Você recebe:
           </h4>
           <div className="space-y-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-2 bg-[#0F1E3A] rounded-lg shrink-0 border border-[#8C6B1F]/30">
                  {feature.icon}
                </div>
                <p className="text-[#B8B8B8] font-medium pt-1 text-lg leading-snug">
                  {feature.text}
                </p>
              </div>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;