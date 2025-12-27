
import React from 'react';

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-bege/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Identificação</span>
          <h2 className="text-3xl md:text-4xl text-olive font-bold serif italic">Para quem é esta obra?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-gold font-serif text-4xl mb-6 opacity-50">01</div>
            <h3 className="text-xl font-bold text-olive mb-4">Os que nunca viveram o Encontro</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              Pessoas (dentro ou fora da igreja) que ainda não tiveram uma experiência real e pessoal com Cristo e desejam romper a barreira do conhecimento intelectual para o relacional.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-gold font-serif text-4xl mb-6 opacity-50">02</div>
            <h3 className="text-xl font-bold text-olive mb-4">Os que estão estagnados</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              Aqueles que já viveram algo com Cristo no passado, mas pararam de avançar. Pessoas que pararam de sonhar e vivem um estado de mornidão espiritual.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gold/10 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-gold font-serif text-4xl mb-6 opacity-50">03</div>
            <h3 className="text-xl font-bold text-olive mb-4">Os que vivem uma ilusão</h3>
            <p className="text-stone-600 leading-relaxed font-light">
              Pessoas que acreditam ter tido o encontro, mas não possuem raízes e se sentem facilmente seduzidas por propostas sem nexo, sem conseguir perseverar.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl text-olive font-serif italic mb-4">
            "Não tem sentido uma vida sem o amor de Cristo, sem assumirmos a nossa verdadeira identidade de filhos."
          </p>
          <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">Descubra seu perfil e parta para a ação.</p>
        </div>
      </div>
    </section>
  );
};
