import React from 'react';
import { CHECKOUT_URL } from '../config.ts';
import { useVslPlayerContext } from '../context/VslPlayerContext.tsx';

interface StickyMobileCTAProps {
  visible: boolean;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ visible }) => {
  const { isUnlocked } = useVslPlayerContext();

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[60] transition-all duration-500 transform ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="glass-morphism px-6 py-4 flex items-center justify-between shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.3)] border-t border-amber/15">
        {isUnlocked ? (
          <>
            <div className="flex flex-col justify-center">
              <span className="text-[10px] text-amber font-bold uppercase tracking-[0.2em] leading-none mb-1.5">
                Oferta
              </span>
              <span className="text-2xl font-black text-white leading-none">R$ 297,00</span>
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-amber text-asphalt px-7 py-3.5 rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-transform uppercase tracking-widest"
            >
              <span className="relative z-10">Garantir Agora</span>
              <div className="absolute inset-0 animate-shimmer" />
            </a>
          </>
        ) : (
          <span className="text-dawn/80 text-xs font-medium text-center w-full">
            Continue assistindo para liberar a oferta do Método CIF
          </span>
        )}
      </div>
    </div>
  );
};
