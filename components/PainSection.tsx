
import React from 'react';

export const PainSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">A Busca pela Verdade</span>
          <h2 className="text-2xl md:text-4xl text-olive font-bold serif italic leading-tight">Ninguém compreende a vida sem a experiência do Amor de Cristo</h2>
        </div>
        
        <div className="space-y-8 text-base md:text-lg text-stone-600 leading-relaxed font-light">
          <p>
            Muitos de nós passamos anos dentro das igrejas, envolvidos em atividades religiosas e fazendo orações automáticas, mas, no fundo, ainda carregamos um <strong className="text-olive font-semibold">vazio inexplicável</strong>. Uma sensação silenciosa de que somos apenas servos distantes, e não filhos amados.
          </p>
          
          <div className="bg-bege/50 p-8 md:p-10 rounded-3xl border-l-4 border-gold italic shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <svg className="w-20 h-20 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V3L10.017 3V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z" /></svg>
            </div>
            <p className="relative z-10 text-stone-700 md:text-xl">
              "Vivemos cansados, carregando feridas da alma que parecem nunca cicatrizar — rejeição, medo e uma busca incessante por aprovação."
            </p>
          </div>
          
          <p>
            O problema central é que a religiosidade muitas vezes se torna um muro, nos impedindo de viver a única coisa que realmente importa: a <strong className="text-olive font-semibold">intimidade real</strong> com o Pai.
          </p>
          
          <div className="pt-6 text-center md:text-left">
            <p className="text-xl md:text-2xl font-bold text-olive serif">
              Você está pronto para derrubar esse muro?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
