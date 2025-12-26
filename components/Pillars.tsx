
import React from 'react';

const pillarData = [
  {
    icon: "🩸",
    title: "Cura das Feridas da Alma",
    desc: "Identifique os traumas que paralisaram suas emoções e receba a cura que só o encontro com Cristo proporciona."
  },
  {
    icon: "👑",
    title: "Da Orfandade à Paternidade",
    desc: "Deixe de viver como um órfão espiritual e assuma sua posição de herdeiro no Reino."
  },
  {
    icon: "🌱",
    title: "Atualização da Fé",
    desc: "Saia de uma fé baseada em tradições humanas e entre em uma espiritualidade viva, dinâmica e atual."
  },
  {
    icon: "🎯",
    title: "Ativação de Propósito",
    desc: "Entenda por que você foi criado e como usar o seu livre-arbítrio para cumprir o sonho de Deus para sua vida."
  }
];

export const Pillars: React.FC = () => {
  const checkoutUrl = "https://pay.hotmart.com/R103515220G";

  return (
    <section id="pillars" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-gold font-bold uppercase tracking-widest text-[10px] mb-3 block">A Metodologia</span>
          <h2 className="text-2xl md:text-4xl text-olive font-bold mb-4 md:mb-6 serif italic">Os 4 Pilares da Transformação</h2>
          <p className="text-stone-500 text-base md:text-lg font-light italic">O que você ganha ao ler esta obra?</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pillarData.map((pillar, idx) => (
            <div key={idx} className="bg-bege/20 p-8 rounded-[2rem] border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-500 group flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 bg-white w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm border border-gold/5">{pillar.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-olive mb-3 leading-tight min-h-[3rem] sm:min-h-0">{pillar.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-olive hover:bg-stone-900 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:scale-105 active:scale-95"
          >
            QUERO ESSA TRANSFORMAÇÃO
          </a>
        </div>
      </div>
    </section>
  );
};
