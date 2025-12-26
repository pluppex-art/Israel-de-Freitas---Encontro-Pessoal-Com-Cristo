
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero.tsx';
import { PainSection } from './components/PainSection.tsx';
import { SolutionSection } from './components/SolutionSection.tsx';
import { AudienceSection } from './components/AudienceSection.tsx';
import { Pillars } from './components/Pillars.tsx';
import { AboutAuthor } from './components/AboutAuthor.tsx';
import { Pricing } from './components/Pricing.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);
  
  const checkoutUrl = "https://pay.hotmart.com/R103515220G";
  const whatsappUrl = "https://wa.me/5563981392009?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20Encontro%20Pessoal%20com%20Cristo.";
  const whatsappIconUrl = "https://lh3.googleusercontent.com/d/1vAxsLh_lZncLcpMBGprCt-6yIb06vOEX";

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;
      setShowSticky(window.scrollY > 800 && !isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-offWhite selection:bg-gold/30">
      <Hero />
      
      <div className="reveal">
        <PainSection />
      </div>

      <div className="bg-white py-12 md:py-20 border-y border-gold/5 reveal">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl text-olive font-bold mb-6 md:mb-8 italic serif leading-tight">
            Uma jornada de volta ao coração do Pai
          </h2>
          <p className="text-base md:text-lg text-stone-700 leading-relaxed font-light">
            Este livro é um convite para você abandonar o peso da religiosidade e experimentar um relacionamento real, leve e transformador com Cristo. Através de uma linguagem simples e profunda, Israel de Freitas compartilha as chaves para a restauração da sua identidade e o despertar do seu propósito.
          </p>
        </div>
      </div>

      <div className="reveal">
        <SolutionSection />
      </div>
      
      <div className="reveal">
        <AudienceSection />
      </div>
      
      <div className="reveal">
        <Pillars />
      </div>
      
      <div className="reveal">
        <AboutAuthor />
      </div>
      
      <div className="reveal">
        <Pricing />
      </div>
      
      <div className="reveal">
        <FAQ />
      </div>
      
      <Footer />
      
      {/* Botão WhatsApp - Atualizado com o novo Ícone */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float z-[70]"
        title="Dúvidas no WhatsApp?"
      >
        <img 
          src={whatsappIconUrl} 
          alt="WhatsApp" 
          className="w-full h-full object-contain"
        />
      </a>

      {/* Rodapé Fixo Mobile - Proporções Ajustadas */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-[60] transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="glass-morphism px-6 py-4 flex items-center justify-between shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)] border-t border-gold/15">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] leading-none mb-1.5">Oferta</span>
            <span className="text-2xl font-black text-olive leading-none">R$ 27,00</span>
          </div>
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-olive text-white px-7 py-3.5 rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-transform uppercase tracking-widest"
          >
            <span className="relative z-10">Garantir Agora</span>
            <div className="absolute inset-0 animate-shimmer"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
