import React from 'react';

const POSITIONS = [
  {
    label: 'Posição 1',
    title: 'O Volante',
    subtitle: 'A Autoridade de Comando',
    text: 'A criança ainda não possui maturidade emocional nem repertório para interpretar os perigos da vida. Autoridade aqui não é autoritarismo — é proteção, direção e segurança.',
  },
  {
    label: 'Posição 2',
    title: 'O Banco do Passageiro',
    subtitle: 'A Autoridade que Ensina',
    text: 'O filho cresce, pergunta, questiona, discorda. Não é rebeldia — é o cérebro desenvolvendo autonomia. E autonomia não nasce no silêncio, nasce no diálogo.',
  },
  {
    label: 'Posição 3',
    title: 'O Motorista',
    subtitle: 'A Autoridade de Influência',
    text: 'O volante muda de mãos: seu filho agora toma as próprias decisões. A autoridade de comando termina. A autoridade de influência começa — você aconselha, mas não controla.',
  },
  {
    label: 'Posição 4',
    title: 'O Porto Seguro',
    subtitle: 'A Reserva Estratégica',
    text: 'Você deixa de ser quem conduz e passa a ser quem acolhe e apoia. Como o estepe de um veículo: ninguém dirige olhando para ele, mas quando a estrada fica difícil, é ele que salva a viagem.',
  },
];

export const MechanismSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-amber font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">
            O Mecanismo do Método CIF
          </span>
          <h2 className="text-2xl md:text-4xl text-graphite font-bold italic serif leading-tight max-w-3xl mx-auto">
            O Mapa das Quatro Trocas de Assento
          </h2>
          <p className="text-stone-600 mt-5 max-w-2xl mx-auto font-light">
            Dentro do carro da criação, os lugares nunca permanecem os mesmos. Eles mudam ao
            longo da jornada — e cada mudança de assento exige uma mudança de postura.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {POSITIONS.map((p) => (
            <div
              key={p.title}
              className="bg-dawn rounded-2xl p-6 border border-amber/15 shadow-sm flex flex-col"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber mb-2">
                {p.label}
              </span>
              <h3 className="text-lg font-bold text-graphite serif mb-1">{p.title}</h3>
              <span className="text-xs text-stone-500 italic mb-3">{p.subtitle}</span>
              <p className="text-sm text-stone-600 leading-relaxed font-light">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-14 bg-asphalt rounded-3xl p-8 md:p-12 text-center">
          <p className="text-dawn text-lg md:text-xl leading-relaxed serif italic">
            "O erro não é falta de amor. Nunca foi. O erro é acreditar que o mesmo tipo de
            autoridade funciona durante toda a viagem. Quando os pais insistem em ocupar o
            assento da fase anterior... o conflito começa."
          </p>
          <span className="block mt-5 text-amber text-sm font-bold uppercase tracking-widest">
            — Israel de Freitas
          </span>
        </div>
      </div>
    </section>
  );
};
