
import React, { useState } from 'react';

const faqItems = [
  {
    q: "Como recebo o livro após a compra?",
    a: "Sendo um produto digital (e-book), você receberá o link de acesso diretamente no seu e-mail logo após a confirmação do pagamento. O processo é imediato para cartões de crédito e Pix."
  },
  {
    q: "É seguro comprar pelo link?",
    a: "Sim, totalmente seguro. A compra é processada pela Hotmart, a maior plataforma de produtos digitais da América Latina, que garante a proteção dos seus dados e a entrega do produto."
  },
  {
    q: "O livro serve para quem não frequenta igreja?",
    a: "Sim. O 'Encontro Pessoal com Cristo' foca na experiência espiritual individual e no relacionamento com o Mestre, algo que transcende instituições e foca na restauração do ser humano."
  },
  {
    q: "E se eu não gostar do conteúdo?",
    a: "Temos total confiança na transformação que este livro pode gerar. Por isso, oferecemos 7 dias de garantia total. Se você ler e sentir que não faz sentido para sua caminhada, devolvemos seu investimento sem perguntas."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-bege">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-olive text-center mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqItems.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gold/10 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-stone-50 transition-colors"
              >
                <span className="font-bold text-olive pr-4">{item.q}</span>
                <span className={`text-gold transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-stone-600 border-t border-bege animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
