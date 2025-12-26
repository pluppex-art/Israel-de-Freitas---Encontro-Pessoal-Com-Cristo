
import React from 'react';

export const Pricing: React.FC = () => {
  const checkoutUrl = "https://pay.hotmart.com/R103515220G";

  return (
    <section id="pricing" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="bg-bege border border-gold/20 rounded-[2rem] md:rounded-[3rem] pt-14 pb-10 px-5 md:p-16 shadow-xl relative overflow-visible">
          {/* Badge de Oferta Simplificado */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white text-[10px] md:text-xs font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg z-20 whitespace-nowrap">
            Oferta Especial
          </div>

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-olive mb-4 md:mb-6 serif italic leading-tight">
              Não deixe sua verdadeira identidade perdida no passado.
            </h2>
            <p className="text-stone-700 mb-8 md:mb-10 text-sm md:text-base leading-relaxed font-light px-2">
              Recupere a visão de quem você é em Deus e cure as feridas que tentaram apagar o seu brilho. Sua nova história começa com um único clique.
            </p>
            
            <div className="mb-8 md:mb-10">
              <span className="text-stone-400 line-through block text-xs md:text-sm mb-1 uppercase tracking-widest font-medium">De R$ 49,90</span>
              <div className="flex flex-col xs:flex-row items-center justify-center gap-1 xs:gap-3">
                <span className="text-base md:text-xl text-olive font-medium">Por apenas</span>
                <span className="text-5xl md:text-7xl font-black text-olive tracking-tighter">R$ 27,00</span>
              </div>
              <div className="mt-4">
                <p className="text-[9px] md:text-xs text-gold font-bold tracking-widest uppercase bg-gold/10 inline-block px-4 py-2 rounded-lg border border-gold/20">
                  PAGAMENTO ÚNICO • SEM MENSALIDADES
                </p>
              </div>
            </div>
            
            <div className="mb-8 max-w-md mx-auto">
              <a 
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-olive hover:bg-stone-900 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-xl transition-all shadow-[0_15px_30px_-10px_rgba(74,93,35,0.4)] hover:scale-[1.02] active:scale-95"
              >
                QUERO MEU EXEMPLAR AGORA
              </a>
              <p className="text-[10px] md:text-xs font-semibold text-stone-500 mt-4 uppercase tracking-[0.15em] flex items-center justify-center gap-2">
                <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                Acesso imediato no seu e-mail
              </p>
            </div>

            {/* Selos de Confiança */}
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  Compra 100% Segura
                </span>
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  Satisfação Garantida
                </span>
              </div>

              {/* Ícones de pagamento - Removido ícone quebrado/desnecessário e ajustado tamanhos */}
              <div className="flex justify-center items-center gap-5 opacity-60 grayscale hover:grayscale-0 transition-all">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-2.5 md:h-3.5 w-auto" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 md:h-5 w-auto" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-2.5 md:h-3.5 w-auto" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-3 md:h-4 w-auto" />
              </div>
              
              <p className="text-[9px] md:text-[10px] text-stone-400 max-w-xs mx-auto italic leading-tight mt-2">
                Seu acesso é processado com total segurança pela plataforma Hotmart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
