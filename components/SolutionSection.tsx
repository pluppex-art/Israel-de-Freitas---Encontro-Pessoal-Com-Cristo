
import React from 'react';

export const SolutionSection: React.FC = () => {
  const solutionImageUrl = "https://lh3.googleusercontent.com/d/1YCrXq-JIjC_e6F5E-NLQb0ec5pFNpzk8";

  return (
    <section className="py-20 bg-olive text-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-2/5 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/5 rounded-full blur-2xl"></div>
              <img 
                src={solutionImageUrl} 
                alt="Um Convite para se Sentar no Banco da Praça" 
                className="relative rounded-full border-8 border-white/10 shadow-2xl w-full aspect-square object-cover"
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1469474099711-423907c111e4?auto=format&fit=crop&q=80&w=800" }}
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5 order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 serif italic leading-tight">Um Convite para se Sentar no Banco da Praça e Conversar com o Mestre</h2>
            <div className="space-y-6 text-lg text-bege/90 leading-relaxed font-light">
              <p>
                O livro <strong>'Encontro Pessoal com Cristo'</strong> não é apenas uma leitura teológica ou acadêmica. É um guia prático para quem deseja sair do automático.
              </p>
              <p>
                Nestas páginas, Israel de Freitas conduz você através de uma jornada de autodescoberta e ativação espiritual. Você será guiado a dar o seu <strong>"SIM"</strong> mais importante. 
              </p>
              <p className="text-gold font-semibold text-xl italic">
                Aquele que ativa o seu livre-arbítrio para tomar posse do que é seu por direito: o melhor de Cristo nesta Terra.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
    </section>
  );
};
