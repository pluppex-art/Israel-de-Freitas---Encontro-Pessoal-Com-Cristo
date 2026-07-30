import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-dawn">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-amber/15 flex flex-col items-center text-center">
          <svg className="w-12 h-12 text-amber mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.03 8.4-7.183 9.635a1.14 1.14 0 01-.634 0C9.03 20.4 6 16.556 6 12V6.741c0-.83.507-1.575 1.276-1.87l4.5-1.732a1.5 1.5 0 011.048 0l4.5 1.732A1.5 1.5 0 0121 6.741V12z"
            />
          </svg>
          <h3 className="text-xl md:text-2xl font-bold text-graphite serif italic mb-3">
            7 Dias de Garantia Incondicional
          </h3>
          <p className="text-stone-600 font-light leading-relaxed">
            O risco é zero. Acesse a plataforma, baixe os manuais e aplique as ferramentas. Se
            você não sentir uma mudança imediata na atmosfera da sua casa, basta um único e-mail
            para receber de volta 100% do seu dinheiro. Sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
};
