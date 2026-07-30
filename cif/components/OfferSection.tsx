import React from 'react';
import { CHECKOUT_URL } from '../config.ts';

const DELIVERABLES = [
  'O Manual de Aplicação Prática — em vídeo-aulas e em PDF, para mapear e estancar os pontos cegos da rotina.',
  'As Tarefas do Propósito Familiar, para colocar o ambiente em ordem.',
  'A Declaração de Compromisso Familiar, o documento premium para selar a nova aliança de respeito na mesa da sua casa.',
];

export const OfferSection: React.FC = () => {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="bg-dawn border border-amber/20 rounded-[2rem] md:rounded-[3rem] pt-14 pb-10 px-5 md:p-16 shadow-xl relative overflow-visible">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber text-white text-[10px] md:text-xs font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg z-20 whitespace-nowrap">
            Método CIF Completo
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-graphite mb-6 serif italic leading-tight">
            O passaporte completo para o Método CIF
          </h2>

          <ul className="text-left max-w-lg mx-auto space-y-3 mb-10">
            {DELIVERABLES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm md:text-base text-stone-700 font-light">
                <svg className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <div className="mb-8 md:mb-10">
            <span className="text-stone-400 line-through block text-xs md:text-sm mb-1 uppercase tracking-widest font-medium">
              Mentoria privada equivalente: R$ 2.497,00
            </span>
            <div className="flex flex-col xs:flex-row items-center justify-center gap-1 xs:gap-3">
              <span className="text-base md:text-xl text-graphite font-medium">Por apenas</span>
              <span className="text-5xl md:text-7xl font-black text-graphite tracking-tighter">
                R$ 297,00
              </span>
            </div>
            <div className="mt-4">
              <p className="text-[9px] md:text-xs text-amber font-bold tracking-widest uppercase bg-amber/10 inline-block px-4 py-2 rounded-lg border border-amber/20">
                OU 12X DE R$ 29,64 — MENOS DE UM REAL POR DIA
              </p>
            </div>
          </div>

          <div className="mb-4 max-w-md mx-auto">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-asphalt hover:bg-graphite text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-xl transition-all shadow-[0_15px_30px_-10px_rgba(27,36,48,0.4)] hover:scale-[1.02] active:scale-95"
            >
              QUERO O MÉTODO CIF AGORA
            </a>
            <p className="text-[10px] md:text-xs font-semibold text-stone-500 mt-4 uppercase tracking-[0.15em] flex items-center justify-center gap-2">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Acesso imediato no seu e-mail
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
