import React from 'react';
import { VslPlayer } from './VslPlayer.tsx';

interface VideoIntroProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  isReady: boolean;
  isPlaying: boolean;
  fakeProgress: number;
  togglePlay: () => void;
}

export const VideoIntro: React.FC<VideoIntroProps> = (playerProps) => {
  return (
    <section className="bg-asphalt pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <span className="text-amber font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-4 block">
          Método CIF — Criação Inteligente de Filhos
        </span>
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-6 italic serif leading-tight">
          "Criar filhos é como iniciar uma longa viagem de carro."
        </h1>
        <p className="text-dawn/80 max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed font-light">
          Nos próximos minutos, eu não vou te dar conselhos românticos de internet. Vou te
          entregar a engenharia prática por trás de uma metodologia que eu chamo de Método
          CIF — o mapa exato para você educar filhos fortes, responsáveis e capazes de tomar
          boas decisões, restabelecendo o respeito no seu lar sem precisar viver refém dos
          gritos e da culpa no fim do dia.
        </p>

        <div className="max-w-3xl mx-auto">
          <VslPlayer {...playerProps} />
        </div>
      </div>
    </section>
  );
};
