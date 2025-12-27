
import React from 'react';

export const Footer: React.FC = () => {
  const checkoutUrl = "https://pay.hotmart.com/R103515220G";

  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 italic serif max-w-2xl mx-auto">
            Chegou a hora de não aceitar menos do que o melhor de Cristo.
          </h2>
          <p className="text-stone-400 max-w-3xl mx-auto mb-10 font-light text-lg">
            Não é sobre sorte, é sobre decisão. Clique no botão abaixo, adquira o seu exemplar e comece hoje a escrever o capítulo mais importante da sua história.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a 
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-olive hover:bg-gold text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:scale-105"
            >
              ADQUIRIR POR APENAS R$ 27,00
            </a>
            <span className="text-xs text-stone-500 uppercase tracking-widest font-bold">Acesso vitalício ao conteúdo digital</span>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Israel de Freitas. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-sm text-stone-500 uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
          </div>
        </div>
        
        <div className="mt-8 text-stone-600 text-xs font-light max-w-2xl mx-auto">
          Este produto é comercializado com o apoio da Hotmart. A plataforma não faz controle editorial prévio dos produtos comercializados, tão pouco avalia a tecnicidade e experiência daqueles que os produzem.
        </div>
      </div>
    </footer>
  );
};
