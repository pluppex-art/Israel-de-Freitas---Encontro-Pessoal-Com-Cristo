import React from 'react';

const LAWS = [
  {
    title: '1. Conexão Antes de Correção',
    text: 'O coração do seu filho só vai aceitar a sua direção se ele estiver conectado ao seu amor, nunca ao seu medo. Sem conexão, a sua correção vira apenas ruído e rebeldia.',
  },
  {
    title: '2. Firmeza Sem Perder o Controle Emocional',
    text: 'O grito é o recibo claro de que você perdeu a autoridade e o domínio do carro. Pais fortes estabelecem limites inegociáveis com paz, calmaria e firmeza de comando.',
  },
  {
    title: '3. Liderança Pelo Exemplo',
    text: 'Você jamais poderá exigir que o seu passageiro use o cinto de segurança se você mesmo dirige de forma imprudente. Seus filhos herdam os seus padrões de comportamento, nunca as suas palavras.',
  },
];

export const AuthorBio: React.FC = () => {
  const authorImageUrl = 'https://lh3.googleusercontent.com/d/1vHKU12vfm1gLNX_csydIxJxeX-krJyzC';

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-dawn rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 border border-amber/10 shadow-lg relative overflow-hidden mb-12 md:mb-16">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber/5 rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="relative group max-w-[280px] mx-auto md:max-w-none">
              <img
                src={authorImageUrl}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';
                }}
                alt="Israel de Freitas"
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-4 -right-4 bg-asphalt text-white px-4 py-3 rounded-xl font-bold text-xs md:text-sm shadow-xl">
                Autor & Mentor
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 text-center md:text-left">
            <span className="text-amber font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 block">
              O Padrão Invisível
            </span>
            <h2 className="text-2xl md:text-4xl text-graphite font-bold mb-6 italic serif leading-tight">
              "Não foi descobrir que os filhos estavam perdidos. Foi descobrir que os pais
              também estão."
            </h2>

            <div className="space-y-4 text-stone-600 text-sm md:text-base leading-relaxed font-light">
              <p>
                Eu fui criado em um pequeno povoado no interior do Tocantins. Minha infância foi
                marcada por uma pobreza extrema, a ponto de passarmos dias sem ter um punhado de
                arroz para colocar no prato. Mas a nossa pior escassez nunca foi o dinheiro. Foi a
                direção.
              </p>
              <p>
                Meu pai foi vítima do alcoolismo durante 24 anos da vida dele. Aos 11 anos, eu
                repeti o erro: mergulhei no álcool, na desobediência e em comportamentos
                destrutivos. Até que, no dia <span className="text-graphite font-medium">24 de maio de 1997</span>,
                eu fui confrontado com um choque de realidade que mudou a minha rota para sempre.
              </p>
              <p>
                Ao longo de mais de 25 anos como mentor, escritor e palestrante, eu comecei a
                perceber um padrão invisível se repetindo em famílias completamente diferentes,
                com histórias diferentes, mas exatamente com o mesmo resultado. Não era
                coincidência. Era uma lei. E foi assim que nasceu o Método CIF.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl text-graphite font-bold serif italic">
            As Três Leis Universais da Direção Familiar
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {LAWS.map((law) => (
            <div
              key={law.title}
              className="bg-asphalt rounded-2xl p-7 md:p-8 shadow-md flex flex-col"
            >
              <h4 className="text-amber font-bold serif italic text-lg mb-3">{law.title}</h4>
              <p className="text-dawn/85 text-sm leading-relaxed font-light">{law.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
