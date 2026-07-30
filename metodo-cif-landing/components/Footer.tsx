import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-graphite text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="border-b border-white/10 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/50 text-sm">
            © {new Date().getFullYear()} Israel de Freitas. Todos os direitos reservados.
          </div>
          <div className="flex gap-8 text-sm text-white/40 uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-amber transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-amber transition-colors">
              Privacidade
            </a>
          </div>
        </div>

        <div className="mt-6 text-white/30 text-xs font-light max-w-2xl mx-auto">
          Este produto é comercializado com o apoio da Hotmart. A plataforma não faz controle
          editorial prévio dos produtos comercializados, tão pouco avalia a tecnicidade e
          experiência daqueles que os produzem.
        </div>
      </div>
    </footer>
  );
};
