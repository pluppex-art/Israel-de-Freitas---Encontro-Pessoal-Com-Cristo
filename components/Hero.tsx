
import React from 'react';

export const Hero: React.FC = () => {
  // Nova imagem da capa fornecida pelo usuário
  const bookCoverUrl = "https://lh3.googleusercontent.com/d/1arSoEkaR7EKCmmoYdGZGADq7mcMWTzcb";
  const checkoutUrl = "https://pay.hotmart.com/R103515220G";

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-center overflow-hidden bg-bege/50 py-4 md:py-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 md:w-96 md:h-96 bg-gold/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 lg:gap-16 flex-grow justify-center">
          
          {/* Book Cover - Resized for Mobile Viewport */}
          <div className="w-full md:w-2/5 flex justify-center order-1 mb-2 md:mb-0">
            <div className="relative group">
              <div className="absolute -inset-4 md:-inset-10 bg-gold/15 rounded-full blur-[40px] md:blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <img 
                src={bookCoverUrl} 
                alt="Capa do Livro Encontro Pessoal com Cristo" 
                className="relative rounded-lg shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] w-full max-w-[180px] xs:max-w-[200px] md:max-w-[380px] transform md:rotate-2 hover:rotate-0 transition-all duration-700 ease-out border-[4px] md:border-[10px] border-white"
                onError={(e) => { e.currentTarget.src = "https://lh3.googleusercontent.com/d/1u8zPOMRV1QQ0YCdsLOReTacEwv5r08OM"}}
              />
            </div>
          </div>

          {/* Text Content - Optimized for height constraints */}
          <div className="w-full md:w-3/5 text-center md:text-left order-2">
            <span className="text-gold font-bold text-[9px] md:text-xs uppercase tracking-[0.2em] mb-2 md:mb-6 block">O Despertar da Identidade</span>
            
            <h1 className="text-2xl xs:text-3xl md:text-5xl lg:text-6xl text-olive font-bold leading-tight mb-3 md:mb-8 serif">
              Você conhece as histórias sobre Deus, mas será que você <span className="italic text-gold underline decoration-gold/20">realmente O conhece?</span>
            </h1>
            
            <p className="hidden xs:block text-sm md:text-xl text-stone-600 mb-5 md:mb-10 font-light leading-snug md:leading-relaxed max-w-2xl mx-auto md:mx-0">
              Descubra como romper a barreira da religiosidade e viver a experiência que transformará a sua identidade.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-olive hover:bg-stone-900 text-white px-8 py-4 md:px-10 md:py-5 rounded-xl font-bold text-base md:text-lg transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group animate-pulse-gold md:animate-none"
              >
                QUERO O LIVRO AGORA
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </a>
            </div>

            <div className="mt-4 md:mt-8 flex items-center justify-center md:justify-start gap-3 md:gap-4 text-[10px] md:text-xs text-stone-500 italic opacity-80">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 md:w-4 md:h-4 text-olive" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                E-book Digital
              </span>
              <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
              <span>Acesso imediato</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
