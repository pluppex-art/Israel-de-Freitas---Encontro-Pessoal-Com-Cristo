import React from 'react';

export const PainSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-offWhite">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-4xl text-graphite font-bold mb-8 md:mb-10 italic serif text-center leading-tight">
          Você não chegou até esse estado de exaustão porque é um pai ruim ou uma mãe
          negligente.
        </h2>

        <div className="space-y-5 text-stone-600 text-base md:text-lg leading-relaxed font-light">
          <p>
            Eu estou falando aqui com mães e pais sérios. Homens e mulheres que trabalham duro,
            que dão a vida para construir um patrimônio e oferecer o melhor conforto, a melhor
            escola e o melhor futuro para a família.
          </p>
          <p>
            Mas que, infelizmente, ao abrirem a porta de casa no fim do dia, percebem que a
            rotina virou uma negociação exaustiva. Que a simples hora do jantar virou uma
            discussão por causa de uma tela. Que o horário do banho vira uma disputa de poder.
            Que o simples pedido para desligar o celular ou o videogame parece o início de uma
            batalha, e uma tentativa de conversa de cinco minutos termina com respostas ríspidas
            ou portas batendo no corredor.
          </p>
          <p>
            E o que mais dói é que, muitas vezes, para conseguir que uma regra simples seja
            cumprida, você se vê obrigado a subir o tom de voz e dar um grito. Um grito que não
            resolve nada e que, cinco minutos depois, se transforma em uma culpa esmagadora
            quando você entra no quarto e olha para o seu filho dormindo.
          </p>
          <p className="text-graphite font-medium">
            O problema nunca foi a falta de amor. O problema é a falta de um método.
          </p>
        </div>
      </div>
    </section>
  );
};
