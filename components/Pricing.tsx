
import React from 'react';

export const Pricing: React.FC = () => {
  const checkoutUrl = "https://pay.hotmart.com/R103515220G";

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="bg-bege border border-gold/20 rounded-[3rem] p-8 md:p-16 shadow-xl relative overflow-hidden">
          {/* Badge de Oferta */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 bg-gold text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Limitado
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-olive mb-4 serif italic">Não deixe sua verdadeira identidade perdida no passado.</h2>
          <p className="text-stone-700 mb-10 leading-relaxed font-light">Recupere a visão de quem você é em Deus e cure as feridas que tentaram apagar o seu brilho. Sua nova história começa com um único clique.</p>
          
          <div className="mb-12">
            <span className="text-stone-400 line-through block text-sm mb-1 uppercase tracking-widest font-medium">De R$ 49,90</span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl text-olive font-medium">Por apenas</span>
              <span className="text-6xl md:text-7xl font-black text-olive tracking-tighter">R$ 27,00</span>
            </div>
            <p className="text-xs text-gold font-bold mt-4 tracking-widest uppercase bg-gold/5 inline-block px-4 py-2 rounded-lg">Pagamento único • Sem mensalidades</p>
          </div>
          
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-olive hover:bg-stone-900 text-white py-6 rounded-2xl font-bold text-xl md:text-2xl transition-all shadow-[0_20px_40px_-15px_rgba(74,93,35,0.4)] hover:scale-[1.02] active:scale-95 mb-8 group"
          >
            QUERO MEU EXEMPLAR AGORA
            <span className="block text-xs font-normal opacity-70 mt-1 group-hover:opacity-100">Acesso imediato no seu e-mail</span>
          </a>

          {/* Selos de Confiança */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-stone-500 font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Compra 100% Segura</span>
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Satisfação Garantida</span>
            </div>

            {/* Ícones de pagamento (SVG simples) */}
            <div className="flex justify-center items-center gap-4 opacity-40 grayscale hover:grayscale-0 transition-all">
               <img src="https://logodownload.org/wp-content/uploads/2014/07/visa-logo-1.png" alt="Visa" className="h-4 object-contain" />
               <img src="https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png" alt="Mastercard" className="h-6 object-contain" />
               <img src="https://logodownload.org/wp-content/uploads/2015/03/elo-logo-1.png" alt="Elo" className="h-5 object-contain" />
               <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-1.png" alt="Pix" className="h-4 object-contain" />
            </div>
            
            <p className="text-[10px] text-stone-400 max-w-md mx-auto italic">
              Seu acesso é processado com criptografia de ponta a ponta pela plataforma Hotmart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
