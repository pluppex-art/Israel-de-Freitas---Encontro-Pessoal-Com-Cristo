import React, { useState } from 'react';

interface ModuleData {
  number: number;
  title: string;
  quote: string;
  task: string;
}

const MODULES: ModuleData[] = [
  {
    number: 1,
    title: 'Cuidado com as Regras e os Bloqueios na Criação dos Filhos',
    quote:
      'Regras sem propósito viram apenas ordens, e imposição sem amor gera resistência. Em vez de regras, ensine princípios.',
    task: 'Tarefa 0 — Alinhamento do Casal + Tarefa 1 — Diagnóstico do Ambiente Familiar.',
  },
  {
    number: 2,
    title: 'Pais como Treinadores nas Três Áreas da Criação dos Filhos',
    quote:
      'Pais não foram chamados para serem juízes, mas treinadores. Treino emocional, espiritual e comportamental, adaptado às fases de 0-7, 8-12 e 13-18 anos.',
    task: 'Tarefa 2 — O Mapa do Treinador.',
  },
  {
    number: 3,
    title: 'Não Grite com Seus Filhos, Aprenda a Canalizar as Energias dos Mesmos',
    quote:
      'Quem grita com o próprio filho é porque está distante demais dele para que ele te ouça. A voz do amor é baixa, mas tem poder de transformação.',
    task: 'Tarefa 3 — Técnica dos 3 Passos do Controle Emocional.',
  },
  {
    number: 4,
    title: 'O Poder de Dizer "NÃO"',
    quote:
      'O "não" é o limite que protege o filho da autodestruição — a moldura que dá forma à liberdade. Existe o "não" que forma e o "não" que fere.',
    task: 'Tarefa 4 — O Exercício do "NÃO que Ensina".',
  },
  {
    number: 5,
    title: 'O Tempo de Qualidade com os Filhos',
    quote:
      'O que os filhos mais desejam não é brinquedo ou permissão — é atenção verdadeira. Tempo de qualidade é o maior investimento no coração do filho.',
    task: 'Tarefa 5 — O Ritual do Tempo de Qualidade.',
  },
  {
    number: 6,
    title: 'Pais que Aprendem a Dialogar Tornam-se Heróis na Vida de Seus Filhos',
    quote:
      'O diálogo é a ponte entre o coração dos pais e a mente dos filhos. Regra do 70/30: 70% ouvir, 30% falar.',
    task: 'Tarefa 6 — O Ritual do Diálogo Consciente.',
  },
  {
    number: 7,
    title: 'Sejam os Maiores Heróis da Vida de Seus Filhos',
    quote:
      'Os heróis da vida real não vestem capas. São homens e mulheres comuns que decidiram não desistir da missão que mais importa: a família.',
    task: 'Tarefa Final — O Compromisso do Herói.',
  },
];

export const ModulesSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-dawn">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-amber font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">
            O Que Você Vai Receber
          </span>
          <h2 className="text-2xl md:text-4xl text-graphite font-bold italic serif leading-tight">
            7 Módulos + Tarefas Práticas do Método CIF
          </h2>
        </div>

        <div className="space-y-3">
          {MODULES.map((mod, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={mod.number}
                className="bg-white rounded-2xl border border-amber/15 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center gap-4 text-left px-5 md:px-7 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full bg-asphalt text-amber font-bold flex items-center justify-center text-sm">
                    {mod.number}
                  </span>
                  <span className="flex-1 font-semibold text-graphite text-sm md:text-base">
                    {mod.title}
                  </span>
                  <svg
                    className={`w-5 h-5 text-amber flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-7 pb-6 pl-[4.25rem] md:pl-[4.75rem] space-y-3">
                    <p className="text-sm text-stone-600 leading-relaxed font-light italic">
                      "{mod.quote}"
                    </p>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber">
                      {mod.task}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-center text-stone-500 text-sm mt-8 font-light">
          + Bônus: Declaração de Compromisso Familiar, versículos de apoio e leituras
          recomendadas.
        </p>
      </div>
    </section>
  );
};
