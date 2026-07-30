import React from 'react';

const TESTIMONIALS = [
  {
    name: 'Eduarda',
    text: 'Antes de passar pelo processo com o Israel, a minha vida estava completamente travada. Eu me sentia perdida, sem saber quem eu era, qual era o meu propósito. A partir daquele direcionamento, a chave virou. Eu recuperei o comando da minha história e hoje a atmosfera do meu lar é de total clareza e paz. Foi um divisor de águas.',
  },
  {
    name: 'Marcos',
    text: 'O que mais me tirava o sono era perceber que, apesar de ser muito bem-sucedido no trabalho, eu chegava exausto em casa e descontava nas pessoas que eu mais amava. O Israel me ensinou que o líder do lar treina pelo exemplo, não pelo grito. Recuperei meu autocontrole emocional, restabeleci a autoridade pela admiração e hoje meus filhos sentam à mesa para me ouvir.',
  },
  {
    name: 'Sandra',
    text: 'Eu vivia em uma rotina de guerra diária, exausta. Minha casa era movida a regras sem propósito que só geravam birra e desobediência crônica. Quando apliquei a técnica de canalizar a energia e o "não" com propósito, o clima mudou no mesmo dia. Hoje meu lar é seguro, meu filho me respeita com amor e eu finalmente voltei a ter noites de paz.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-amber font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">
            Resultados Reais
          </span>
          <h2 className="text-2xl md:text-4xl text-graphite font-bold italic serif leading-tight">
            Famílias que já atravessaram essa mudança de assento
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-dawn rounded-2xl p-7 border border-amber/15 shadow-sm flex flex-col"
            >
              <svg className="w-7 h-7 text-amber/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.5 8.5C7 8.5 5 10.5 5 13s2 4.5 4.5 4.5c.3 0 .6 0 .9-.1-.5 1.6-1.9 2.9-3.9 3.1v2c3.9-.3 6.5-3.2 6.5-7.5v-2c0-2.5-1.6-4.5-3.5-4.5zm10 0c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c.3 0 .6 0 .9-.1-.5 1.6-1.9 2.9-3.9 3.1v2c3.9-.3 6.5-3.2 6.5-7.5v-2c0-2.5-1.6-4.5-3.5-4.5z" />
              </svg>
              <p className="text-sm text-stone-600 leading-relaxed font-light flex-1">
                "{t.text}"
              </p>
              <span className="block mt-5 text-graphite font-bold serif italic">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
