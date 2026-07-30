import React, { useState } from 'react';

const QUESTIONS = [
  {
    q: 'Como recebo acesso ao Método CIF depois da compra?',
    a: 'O acesso é imediato e enviado para o seu e-mail assim que o pagamento é confirmado, com login na plataforma onde ficam as vídeo-aulas, os PDFs e os materiais de bônus.',
  },
  {
    q: 'Preciso assistir aos módulos em algum dia ou horário específico?',
    a: 'Não. O conteúdo fica disponível para você assistir e revisar no seu próprio ritmo, um módulo por vez, aplicando as tarefas práticas antes de avançar.',
  },
  {
    q: 'E se eu sentir que não era para mim?',
    a: 'Você tem 7 dias de garantia incondicional. Basta enviar um e-mail dentro desse prazo para receber 100% do valor de volta, sem burocracia.',
  },
  {
    q: 'O conteúdo serve para filhos de qualquer idade?',
    a: 'Sim. O Método CIF adapta a aplicação de cada módulo às três fases de desenvolvimento — infância (0 a 7 anos), juventude (8 a 12 anos) e adolescência (13 a 18 anos).',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl md:text-4xl text-graphite font-bold mb-10 serif italic text-center leading-tight">
          Perguntas Frequentes
        </h2>

        <div className="space-y-3">
          {QUESTIONS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className="bg-dawn rounded-2xl border border-amber/15 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-7 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-graphite text-sm md:text-base">{item.q}</span>
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
                  <p className="px-5 md:px-7 pb-5 text-sm text-stone-600 leading-relaxed font-light">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
