import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  "Mais paz",
  "Mais força",
  "Mais esperança",
  "Mais confiança",
  "Sensação de proteção espiritual real"
];

const Benefits = () => {
  return (
    <section className="py-16 bg-neutral-900/10">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          Após os 9 dias você poderá <span className="text-red-500">sentir</span>:
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {benefits.map((benefit, idx) => (
            <div key={idx} className={`bg-[#131313] p-6 rounded-lg flex items-center gap-4 border border-white/5 hover:border-red-900/30 transition-all ${idx === 4 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''}`}>
              <CheckCircle2 className="w-6 h-6 text-red-600 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-200 text-lg">{benefit}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;