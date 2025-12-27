
import React from 'react';

export const AboutAuthor: React.FC = () => {
  const authorImageUrl = "https://lh3.googleusercontent.com/d/1vHKU12vfm1gLNX_csydIxJxeX-krJyzC";

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-bege rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 border border-gold/10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative group max-w-[280px] mx-auto md:max-w-none">
              <img 
                src={authorImageUrl} 
                onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" }}
                alt="Israel de Freitas" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-4 -right-4 bg-olive text-white px-4 py-3 rounded-xl font-bold text-xs md:text-sm shadow-xl">
                Autor & Mentor
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 text-center md:text-left">
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">Conheça o Autor</span>
            <h2 className="text-3xl md:text-5xl text-olive font-bold mb-8 italic serif leading-tight">Israel de Freitas Silva</h2>
            
            <div className="space-y-5 text-stone-600 text-base md:text-lg leading-relaxed font-light">
              <p>
                Israel de Freitas Silva, segundo de três filhos do casal José Martins da Silva e Maria Rita de Freitas Silva. Pai de <span className="text-olive font-medium">Ávila Maria, Evelyn Maria, Angelo Gabriel e Angelina de Maria</span>. 
              </p>
              <p>
                Nasceu dia 27 de fevereiro de 1979, num pequeno povoado, hoje cidade de São Miguel do Tocantins. Pregador do Evangelho, há mais de 25 anos em vários estados do Brasil, palestrante, professor da rede pública desde 2002, formado em Ciências Biológicas, com ampla experiência em gestão de pessoas e liderança. 
              </p>
              <p>
                Atua como líder e mentor de jovens e famílias por todo o Brasil, ajudando milhares de pessoas a descobrirem sua verdadeira identidade e propósito. Sua maior alegria é orientar e acompanhar vidas <span className="text-olive font-semibold italic">sendo transformadas pelo amor de Deus</span>, para que cada um possa viver o melhor de Cristo nesta Terra.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gold/10 flex justify-center md:justify-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-olive/10 flex items-center justify-center text-olive">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gold uppercase tracking-widest">Missão</p>
                  <p className="text-sm text-stone-500 italic">Despertar a identidade e propósito.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
