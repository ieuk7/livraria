'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function BookPage() {
  const router = useRouter();

  return (
    <div className="bg-background min-h-screen font-serif text-foreground">
      <style jsx global>{`
        .book-prose h2 {
          font-size: 1.875rem;
          line-height: 2.25rem;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          font-weight: 700;
          border-bottom: 1px solid hsl(var(--border));
          padding-bottom: 0.5rem;
          color: hsl(var(--ink));
        }
        .book-prose p {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-top: 1.25em;
          margin-bottom: 1.25em;
          color: hsl(var(--foreground) / 0.85);
        }
        .book-prose hr {
          margin-top: 3rem;
          margin-bottom: 3rem;
          border-color: hsl(var(--border));
          border-style: dashed;
        }
      `}</style>
      <header className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-10">
        <div className="mx-auto max-w-3xl px-6 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-ink">
              Cartas para Helena
            </h1>
            <p className="text-sm text-muted-foreground italic">
              por Joaquim Vieira
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar aos Livros
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 sm:px-8 py-12">
        <article className="book-prose max-w-none text-justify">
          <h2>Prefácio</h2>
          <p>
            O amor, dizem, é a única coisa que transcende o tempo e o espaço.
            Nas cartas que se seguem, Joaquim prova essa teoria com uma devoção
            que desarma. Não são apenas palavras; são fragmentos de uma alma que
            se recusa a dizer adeus, um coração que continua a bater em uníssono
            com a memória de Helena. Este livro é um testemunho, uma conversa
            que a morte não pôde interromper.
          </p>
          <p className="text-right italic text-muted-foreground">
            — Lygia Bojunga
          </p>

          <hr />

          <h2>Capítulo 1: A Cadeira Vazia</h2>
          <p>
            Minha Helena,
            <br />
            Hoje faz um mês. Trinta dias desde que o seu lado da cama amanheceu
            frio. A casa ainda tem o seu cheiro, sabe? Uma mistura de lavanda e
            daquele biscoito de canela que você fazia em dias de chuva. A sua
            cadeira de balanço na varanda ainda se move com o vento, e por um
            instante, eu juro que é você ali, com o livro no colo e os óculos na
            ponta do nariz. Os vizinhos me olham com pena. Trazem caçarolas,
            oferecem companhia. São gentis, mas não entendem. Como poderiam?
            Eles não viram o brilho dos seus olhos quando a nossa primeira neta
            nasceu. Não ouviram sua risada, que parecia música, preenchendo cada
            canto desta casa. Escrevo porque falar dói. O papel não me julga.
            Ele apenas escuta. E eu tenho tanto para lhe contar.
          </p>

          <h2>Capítulo 2: O Jardim</h2>
          <p>
            Helena, meu amor,
            <br />
            Lembra do nosso jardim? As rosas que você plantou estão
            florescendo. Vermelhas, vibrantes, teimosas como você. Cuido delas
            todos os dias, como prometi. Rego, podo, converso com elas. Sim, eu
            converso com as flores. Digo a elas que você as amava, que eram o
            seu orgulho. O jardineiro me disse que nunca as viu tão bonitas.
            Talvez seja a saudade que as alimenta. Ou talvez seja apenas a sua
            essência, que se recusa a deixar este lugar. Cada pétala é uma
            lembrança. O dia em que dançamos na chuva, a vez que construímos a
            casa na árvore para os meninos, a noite em que ficamos acordados
            até o amanhecer, apenas contando estrelas. O nosso amor está
            plantado neste chão, Helena. E ele continua a florescer.
          </p>

          <h2>Capítulo 3: O Som do Silêncio</h2>
          <p>
            Minha querida Helena,
            <br />
            O silêncio é a coisa mais barulhenta que já ouvi. Ele grita a sua
            ausência. O tic-tac do relógio na parede, que antes eu mal notava,
            agora soa como um martelo. O assobio do vento na janela parece um
            lamento. Tento preencher o vazio com o rádio, com a televisão, mas
            nada abafa a verdade. Você não está aqui. Hoje encontrei uma
            fotografia nossa, do nosso casamento. Você, tão jovem, com um
            sorriso que prometia uma vida inteira de felicidade. E você
            cumpriu, meu amor. Você me deu a vida mais feliz que um homem
            poderia sonhar. Guardo a foto no bolso do peito, para sentir você
            mais perto. É um consolo frágil, mas é tudo o que tenho.
          </p>

          <h2>Capítulo 4: Retalhos de Memória</h2>
          <p>
            Helena,
            <br />
            Fui arrumar o seu armário hoje. Uma tarefa que adiei por semanas.
            Cada vestido, cada lenço, uma história. Encontrei aquele vestido
            azul que você usou no nosso aniversário de 25 anos. Ainda tem o seu
            perfume. Fechei os olhos e pude ver você, rodopiando pela sala,
            linda como uma rainha. Chorei, Helena. Chorei como um menino que
            perdeu o seu tesouro mais precioso. Não pela dor, mas pela beleza
            da lembrança. Dobrei cada peça com cuidado, como se estivesse
            ajeitando suas asas para um voo que eu ainda não posso seguir.
            Guardei tudo numa caixa de madeira, a nossa caixa de tesouros. As
            suas roupas, as nossas memórias, o nosso amor.
          </p>

          <h2>Capítulo 5: Conversas com a Lua</h2>
          <p>
            Minha eterna companheira,
            <br />
            As noites são as mais difíceis. A cama parece um oceano de vazio.
            Procuro o calor do seu corpo, o toque da sua mão, mas encontro
            apenas o frio do lençol. Então eu me levanto e vou para a janela.
            Converso com a lua. Pergunto se ela a vê, aí do alto. Peço que lhe
            diga que estou bem, mesmo quando não estou. Peço que lhe envie o
            meu amor, um beijo de boa noite sussurrado ao vento. Será que você
            me ouve, Helena? Será que, de alguma forma, você sabe que cada
            pensamento meu, antes de dormir, é seu? Eu gosto de acreditar que
            sim. Gosto de pensar que as estrelas são pequenas frestas no céu,
            por onde você espia e cuida de mim.
          </p>

          <hr />

          <h2>Capítulo 10: O Barco de Papel</h2>
          <p>
            Helena, minha vida,
            <br />
            Hoje choveu. Aquela chuva fina, persistente, que você tanto
            gostava. Fui até o riacho nos fundos do nosso terreno. Lembra de
            quando os meninos eram pequenos e fazíamos barcos de papel para
            eles? Fiz um hoje. Um pequeno barco, frágil como a minha esperança.
            Nele, escrevi apenas o seu nome: Helena. Soltei-o na correnteza e o
            observei partir, navegando para longe, para um destino que não
            conheço. Talvez ele encalhe numa margem qualquer. Ou talvez, de
            alguma forma mágica, ele chegue até você. Um mensageiro silencioso
            do meu amor, navegando no rio do tempo.
          </p>

          <h2>Capítulo 15: O Gato e o Novelos</h2>
          <p>
            Meu bem,
            <br />
            O Simão, aquele gato malandro que você adotou, deitou-se hoje sobre
            a sua cesta de tricô. Ele parecia procurar por você, enfiando o
            focinho entre os novelos de lã coloridos. Ele sempre fazia isso,
            lembra? Deitava no seu colo enquanto você tecia cachecóis para os
            netos. A cena partiu meu coração. Acariciei seu pelo macio e ele
            ronronou, um som que trouxe um pouco de calor a esta casa fria. É
            curioso como os animais sentem. Ele também sente a sua falta,
            Helena. Somos dois velhos companheiros, eu e o gato, à espera da
            dona da casa voltar.
          </p>

          <hr />

          <h2>Capítulo 20: A Promessa</h2>
          <p>
            Minha amada Helena,
            <br />
            Aprendi tarde que o amor não cabe num adeus. Por isso escrevo —
            porque há coisas que só o papel ainda escuta. As pessoas me dizem
            para "seguir em frente". Que palavra tola. Como se fosse possível
            deixar para trás cinquenta anos de história, de cumplicidade, de
            amor. Não se segue em frente de uma vida inteira. A gente a carrega
            conosco, dentro do peito. Eu não vou seguir em frente, Helena. Eu
            vou seguir com você. Com as suas lembranças, com os seus
            ensinamentos, com o amor imenso que você me deixou. Essa é a minha
            promessa. E eu nunca quebrei uma promessa feita a você.
          </p>

          <h2>Capítulo 25: O Cheiro do Café</h2>
          <p>
            Querida,
            <br />
            Passei o café hoje de manhã e, por um instante, me virei para a
            cozinha esperando ouvir sua voz me pedindo para não fazer tão
            forte. O hábito, essa teia invisível que nos prende ao passado.
            Ainda coloco duas xícaras na mesa. Uma para mim, uma para a sua
            ausência. Tomo o meu café em silêncio, olhando para a sua cadeira
            vazia. O vapor que sobe da xícara desenha formas no ar, e eu
            procuro o seu rosto nelas. É uma tolice, eu sei. Mas são essas
            pequenas tolices que me mantêm de pé.
          </p>

          <hr />

          <h2>Capítulo 30: Cartas Futuras</h2>
          <p>
            Minha Helena,
            <br />
            Nossa neta me perguntou para quem eu tanto escrevia. Eu disse a
            ela: "Para a vovó". Ela sorriu, com a inocência de quem ainda não
            entende a permanência da partida. "Mas o correio não entrega cartas
            no céu, vovô", ela disse. Eu sorri de volta. "Talvez não, meu anjo.
            Mas o amor encontra um caminho." Um dia, ela vai entender. Um dia,
            quando ela amar alguém com toda a alma, ela vai saber que certas
            conversas nunca terminam.
          </p>

          <h2>Capítulo 35: O Fio da Vida</h2>
          <p>
            Meu amor eterno,
            <br />
            Encontrei hoje um fio de cabelo seu, prateado, preso no meu casaco
            velho de lã. Um único fio. Tão fino, tão frágil, mas continha toda
            a força do nosso amor. Guardei-o dentro do meu livro de cabeceira,
            como um marcador de página. A página onde a nossa história parou,
            mas não terminou. É um fio que me liga a você, um lembrete de que
            estivemos entrelaçados por uma vida inteira. E que, de alguma
            forma, ainda estamos.
          </p>

          <hr />

          <h2>Capítulo 40: Até Breve</h2>
          <p>
            Helena,
            <br />
            Esta é a última carta que escrevo neste caderno. Mas não é um
            adeus. É um "até breve". Porque, enquanto eu viver, continuarei a
            conversar com você. Nos meus pensamentos, nas minhas preces, no
            desabrochar de cada rosa no nosso jardim. O amor, Helena, não
            morre. Ele apenas muda de endereço. E o meu, agora, mora na
            saudade. Uma saudade serena, grata, que me aquece a alma. Obrigado
            por tudo, meu amor. Por cada riso, cada abraço, cada momento.
            Obrigado por ter sido a minha vida.
            <br />
            <br />
            Com todo o meu amor, para sempre,
            <br />
            <br />
            Seu,
            <br />
            Joaquim.
          </p>
        </article>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="mx-auto max-w-3xl px-6 py-8 text-center">
          <Button variant="outline" onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar aos Livros
          </Button>
          <p className="text-xs text-muted-foreground mt-6">
            © {new Date().getFullYear()} Edições Helena
          </p>
        </div>
      </footer>
    </div>
  );
}
