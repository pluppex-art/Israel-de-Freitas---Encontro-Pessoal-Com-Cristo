import React from 'react';
import { CHECKOUT_URL } from '../config.ts';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-asphalt">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <p className="text-dawn/90 text-lg md:text-xl leading-relaxed font-light italic mb-8">
          "Porque criar filhos nunca foi sobre manter o controle do carro, mas sobre preparar
          novos motoristas para a estrada da vida."
        </p>

        <blockquote className="text-amber text-xl md:text-2xl serif italic mb-3">
          "Eu e a minha casa serviremos ao Senhor."
        </blockquote>
        <span className="block text-dawn/50 text-xs uppercase tracking-widest font-bold mb-10">
          Josué 24:15
        </span>

        <h2 className="text-2xl md:text-3xl text-white font-bold serif mb-10 leading-tight">
          Que tipo de motorista você espera ter formado?
        </h2>

        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber hover:bg-white text-asphalt px-12 py-5 rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-2xl hover:scale-105"
        >
          QUERO O MÉTODO CIF AGORA
        </a>
      </div>
    </section>
  );
};
