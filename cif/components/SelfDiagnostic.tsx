import React from 'react';

export const SelfDiagnostic: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-dawn border-y border-amber/10">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <span className="text-amber font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 block">
          Exercício de Diagnóstico
        </span>
        <h2 className="text-xl md:text-3xl text-graphite font-bold mb-8 serif italic leading-tight">
          Pense na idade exata do seu filho. Em qual das quatro posições ele deveria estar hoje?
        </h2>

        <div className="bg-white rounded-2xl p-7 md:p-10 shadow-md border border-amber/10 text-left space-y-5">
          <p className="text-stone-700 leading-relaxed font-light">
            Agora responda outra pergunta: você mudou de lugar junto com ele... ou continua
            tentando resolver os desafios de hoje usando a mesma postura que funcionava quando
            ele tinha cinco anos?
          </p>
          <p className="text-stone-700 leading-relaxed font-light">
            Se o seu filho já precisa ocupar o banco do passageiro para aprender a decidir... mas
            você continua tentando mantê-lo preso no banco de trás... você acabou de descobrir o
            verdadeiro motivo de tantas discussões.
          </p>
          <p className="text-graphite font-medium leading-relaxed">
            Você não está enfrentando apenas um problema de comportamento. Está enfrentando um
            problema de posicionamento.
          </p>
        </div>
      </div>
    </section>
  );
};
