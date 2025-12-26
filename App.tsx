
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { SolutionSection } from './components/SolutionSection';
import { AudienceSection } from './components/AudienceSection';
import { Pillars } from './components/Pillars';
import { AboutAuthor } from './components/AboutAuthor';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);
  const checkoutUrl = "https://pay.hotmart.com/R103515220G";
  const whatsappUrl = "https://wa.me/5563981392009?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20livro%20Encontro%20Pessoal%20com%20Cristo.";

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-offWhite selection:bg-gold/30">
      <Hero />
      
      {/* O Gancho: Conexão e Dor */}
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
      
      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float shadow-2xl"
        title="Dúvidas no WhatsApp?"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.481 8.403 0 6.556-5.332 11.891-11.891 11.891-2.093 0-4.134-.544-5.928-1.583L0 24zm6.702-3.848c1.547.918 3.129 1.403 4.751 1.403 5.341 0 9.691-4.351 9.691-9.691 0-2.585-1.013-5.015-2.852-6.855-1.838-1.837-4.27-2.85-6.839-2.85-5.342 0-9.691 4.351-9.691 9.691 0 1.638.463 3.243 1.34 4.674l-1.02 3.723 3.82-1.005zm10.953-7.53c-.158-.079-1.121-.553-1.295-.615-.174-.063-.301-.094-.428.094-.127.188-.491.615-.602.738-.111.123-.222.138-.38.058-.158-.079-.667-.246-1.27-.783-.47-.419-.788-.937-.88-1.096-.092-.159-.01-.244.07-.323.071-.071.158-.184.238-.276.079-.092.106-.159.159-.265.053-.106.026-.198-.013-.276-.04-.079-.428-1.031-.587-1.413-.154-.372-.31-.322-.428-.328-.11-.006-.238-.007-.365-.007-.127 0-.333.048-.507.238-.174.188-.667.651-.667 1.59s.683 1.847.778 1.973c.095.127 1.343 2.051 3.255 2.876.455.196.81.314 1.087.402.458.145.875.125 1.204.076.366-.055 1.121-.458 1.279-.901.159-.442.159-.821.111-.901-.048-.079-.174-.123-.333-.203z"/>
        </svg>
      </a>

      {/* Sticky Mobile CTA - Refined UX */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-[60] transition-all duration-500 transform ${showSticky ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <div className="glass-morphism px-6 py-4 flex items-center justify-between shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.1)]">
          <div>
            <p className="text-[10px] text-gold font-bold uppercase tracking-tighter">Oferta Digital</p>
            <p className="text-lg font-black text-olive">R$ 27,00</p>
          </div>
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-olive text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg flex items-center gap-2"
          >
            <span className="relative z-10 uppercase tracking-widest">Garantir Agora</span>
            <div className="absolute inset-0 animate-shimmer"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
