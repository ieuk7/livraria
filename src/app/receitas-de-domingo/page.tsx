'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BookPage() {
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
        .book-prose ul {
          font-size: 1.125rem;
          line-height: 1.8;
          margin-top: 1.25em;
          margin-bottom: 1.25em;
          color: hsl(var(--foreground) / 0.85);
          list-style-position: inside;
          padding-left: 1rem;
        }
        .book-prose li {
            margin-bottom: 0.5rem;
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
              Receitas de Domingo
            </h1>
            <p className="text-sm text-muted-foreground italic">
              por Helena Vieira
            </p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar à Loja
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 sm:px-8 py-12">
        <article className="book-prose max-w-none text-justify">
          <h2>Introdução</h2>
          <p>
            Cozinhar, para mim, nunca foi sobre medidas exatas ou técnicas complicadas. Sempre foi sobre afeto. Cada prato que preparei ao longo dos anos carrega uma história, uma lembrança, um pedaço da nossa vida. Aos domingos, nossa casa se enchia com o cheiro de comida boa e o som das risadas dos nossos filhos e, mais tarde, dos nossos netos. Este livro é um convite para a minha cozinha. Um lugar onde o principal ingrediente é o amor. Espero que estas receitas aqueçam o coração de vocês, assim como aqueceram o da minha família.
          </p>
          <p className="text-right italic text-muted-foreground">
            — Com carinho, Helena.
          </p>

          <hr />

          <h2>O Frango Assado do Joaquim</h2>
          <p>
            Joaquim sempre disse que se casou comigo por causa do meu frango assado. É um exagero, claro, mas este prato se tornou um símbolo dos nossos domingos. Ele dizia que o cheiro do alecrim assando o transportava de volta para a nossa primeira casa. O segredo? Um bom tempo de marinada e paciência. Como tudo na vida.
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>1 frango inteiro de aproximadamente 2kg</li>
            <li>4 dentes de alho amassados</li>
            <li>Suco de 2 limões</li>
            <li>Sal e pimenta do reino a gosto</li>
            <li>4 ramos de alecrim fresco</li>
            <li>2 colheres de sopa de manteiga em temperatura ambiente</li>
            <li>Batatas pequenas para assar junto</li>
          </ul>
          <p><strong>Modo de Preparo:</strong></p>
          <p>
            Na véspera, tempere o frango por dentro e por fora com o alho, o suco de limão, sal e pimenta. Coloque dois ramos de alecrim dentro do frango. Deixe na geladeira de um dia para o outro. No dia seguinte, pré-aqueça o forno a 200°C. Besunte o frango com a manteiga e coloque-o em uma assadeira. Distribua as batatas ao redor e os outros dois ramos de alecrim. Leve para assar por cerca de 1 hora e 30 minutos, ou até que esteja dourado e cozido por dentro. Sirva com arroz branco e uma boa conversa.
          </p>

          <hr />
          
          <h2>Bolo de Fubá com Goiabada</h2>
          <p>
            As tardes de domingo pediam um café fresco e um bolo quentinho. Este era o preferido dos netos. Eles chegavam da rua, com os joelhos ralados e as bochechas coradas, e o cheiro de bolo de fubá já os recebia no portão. A goiabada derretida no meio era a surpresa que sempre os fazia sorrir.
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
              <li>2 xícaras de fubá</li>
              <li>1 xícara de farinha de trigo</li>
              <li>2 xícaras de açúcar</li>
              <li>1 xícara de óleo</li>
              <li>4 ovos</li>
              <li>1 xícara de leite</li>
              <li>1 colher de sopa de fermento em pó</li>
              <li>200g de goiabada em cubos</li>
          </ul>
           <p><strong>Modo de Preparo:</strong></p>
           <p>
               No liquidificador, bata os ovos, o óleo e o leite. Em uma tigela, misture o fubá, a farinha, o açúcar e o fermento. Despeje a mistura do liquidificador na tigela e mexa bem até obter uma massa homogênea. Passe os cubos de goiabada na farinha de trigo (para não afundarem na massa). Despeje a massa em uma forma untada e enfarinhada, distribua os cubos de goiabada e leve ao forno pré-aquecido a 180°C por cerca de 40 minutos. O cheiro vai te avisar quando estiver pronto.
           </p>

          <hr />
          
          <h2>Pão de Queijo da Manhã</h2>
          <p>
            Não há nada como acordar com cheiro de pão de queijo. Era a nossa tradição nas manhãs de domingo. Eu acordava cedo, preparava a massa enquanto Joaquim coava o café. Era um ritual silencioso, cheio de cumplicidade. A receita é da minha mãe, que dizia que pão de queijo bom tem que ter queijo de verdade e ser feito com as mãos.
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
              <li>500g de polvilho azedo</li>
              <li>1 xícara de leite</li>
              <li>1/2 xícara de óleo</li>
              <li>1 colher de chá de sal</li>
              <li>2 ovos</li>
              <li>250g de queijo minas curado ralado</li>
          </ul>
           <p><strong>Modo de Preparo:</strong></p>
           <p>
               Ferva o leite, o óleo e o sal. Despeje sobre o polvilho e misture bem com uma colher de pau. Deixe a massa amornar. Adicione os ovos, um a um, e sove bem a massa. Por último, incorpore o queijo ralado. Faça bolinhas e coloque em uma assadeira, deixando espaço entre elas. Asse em forno pré-aquecido a 180°C por cerca de 30 minutos, ou até dourarem. Sirva quente, com manteiga e uma xícara de café. E, claro, com a melhor companhia.
           </p>
          
           <hr />

          <h2>Sopa de Mandioquinha para Aconchegar</h2>
          <p>
            Em noites mais frias, não havia nada melhor do que uma sopa cremosa. Joaquim adorava esta sopa de mandioquinha. Ele dizia que ela aquecia não só o corpo, mas a alma. Eu sempre servia com pedacinhos de pão torrado no azeite e uma pitada de cheiro-verde. Era o nosso jeito de encontrar conforto nos dias cinzentos.
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>1kg de mandioquinha (batata-baroa)</li>
            <li>1 cebola média picada</li>
            <li>2 dentes de alho picados</li>
            <li>1 litro de caldo de legumes</li>
            <li>Sal e pimenta do reino a gosto</li>
            <li>Azeite de oliva</li>
            <li>Cheiro-verde picado para decorar</li>
          </ul>
          <p><strong>Modo de Preparo:</strong></p>
          <p>
            Descasque e corte a mandioquinha em pedaços. Em uma panela grande, refogue a cebola e o alho no azeite até dourarem. Adicione a mandioquinha e o caldo de legumes. Deixe cozinhar em fogo médio até que a mandioquinha esteja bem macia. Bata tudo no liquidificador (ou use um mixer de mão na própria panela) até obter um creme liso. Volte o creme para a panela, tempere com sal e pimenta e aqueça bem. Sirva em tigelas, regue com um fio de azeite e salpique o cheiro-verde.
          </p>

          <hr />

          <h2>Torta de Limão da Helena</h2>
          <p>
            Essa torta era a minha especialidade nas festas de família. Refrescante, com o equilíbrio perfeito entre o doce e o azedo. Os netos sempre tentavam roubar uma colherada do merengue antes da hora. Joaquim, com seu jeito doce, sempre me defendia: "Deixem a artista trabalhar!". Era a sobremesa que celebrava a alegria de estarmos juntos.
          </p>
          <p><strong>Ingredientes da Massa:</strong></p>
          <ul>
            <li>1 pacote de biscoito de maisena triturado</li>
            <li>100g de manteiga derretida</li>
          </ul>
          <p><strong>Ingredientes do Recheio:</strong></p>
          <ul>
            <li>1 lata de leite condensado</li>
            <li>1 lata de creme de leite</li>
            <li>Suco de 4 limões taiti</li>
          </ul>
          <p><strong>Ingredientes do Merengue:</strong></p>
          <ul>
            <li>3 claras</li>
            <li>1/2 xícara de açúcar</li>
          </ul>
          <p><strong>Modo de Preparo:</strong></p>
          <p>
            Para a massa, misture o biscoito triturado com a manteiga até formar uma farofa úmida. Forre o fundo e as laterais de uma forma de torta e leve ao forno pré-aquecido a 180°C por 10 minutos. Reserve. Para o recheio, bata no liquidificador o leite condensado, o creme de leite e o suco de limão. Despeje sobre a massa já fria. Para o merengue, bata as claras em neve. Adicione o açúcar aos poucos e continue batendo até formar um merengue firme e brilhante. Espalhe o merengue sobre o recheio e, com as costas de uma colher, faça picos. Leve ao forno apenas para dourar o merengue. Sirva gelada.
          </p>

          <hr />

          <h2>Arroz de Forno Cremoso</h2>
          <p>
            Esta receita era a solução perfeita para aproveitar as sobras do almoço de domingo. Transformar o arroz do dia anterior em um prato novo e delicioso era quase uma mágica. Eu adicionava queijo, presunto, milho, ervilha... tudo o que a geladeira oferecia. O resultado era sempre um prato farto, cremoso, que reunia todo mundo à mesa de novo, como se o domingo se recusasse a acabar.
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>4 xícaras de arroz cozido</li>
            <li>1 lata de milho verde</li>
            <li>1 lata de ervilha</li>
            <li>200g de presunto picado</li>
            <li>200g de queijo muçarela picado</li>
            <li>1 copo de requeijão cremoso</li>
            <li>1/2 xícara de leite</li>
            <li>Queijo parmesão ralado para gratinar</li>
          </ul>
          <p><strong>Modo de Preparo:</strong></p>
          <p>
            Em uma tigela grande, misture o arroz cozido, o milho, a ervilha, o presunto e a muçarela. Em outra vasilha, misture o requeijão com o leite para ficar mais fluido. Incorpore essa mistura ao arroz. Despeje tudo em um refratário, salpique o queijo parmesão ralado por cima e leve ao forno pré-aquecido a 200°C por cerca de 20 minutos, ou até o queijo derreter e gratinar. É o abraço em forma de comida.
          </p>

          <hr />

          <h2>Doce de Abóbora com Coco</h2>
          <p>
            No outono, o cheiro deste doce tomava conta da casa. Joaquim me ajudava a cortar a abóbora, sentado na varanda, enquanto contava histórias da sua infância. Era um doce simples, mas cheio de significado. O cravo e a canela davam o toque final de aconchego. Servíamos com queijo branco, uma combinação que, para mim, tem o gosto exato da felicidade.
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>1kg de abóbora de pescoço descascada e picada</li>
            <li>2 xícaras de açúcar</li>
            <li>100g de coco ralado (fresco ou de pacote)</li>
            <li>5 cravos-da-índia</li>
            <li>1 canela em pau</li>
          </ul>
          <p><strong>Modo de Preparo:</strong></p>
          <p>
            Em uma panela grande, coloque a abóbora e o açúcar. Leve ao fogo baixo e cozinhe, mexendo de vez em quando, até que a abóbora comece a desmanchar. Adicione o coco, os cravos e a canela. Continue cozinhando, mexendo sempre, até que o doce se desprenda do fundo da panela. Deixe esfriar e sirva. Dura vários dias na geladeira, se a família deixar!
          </p>
          
          <hr />

          <h2>Feijoada de Sábado</h2>
          <p>
            Embora o livro seja sobre 'Receitas de Domingo', a feijoada era o nosso ritual de sábado. Começava na sexta, com o feijão de molho e as carnes dessalgando. O sábado era dia de panela no fogo por horas, a casa cheia de amigos, o som de samba no rádio. Era um evento. Joaquim cuidava da caipirinha, eu da panela. E no fim, a mesa farta era a maior prova de que a vida é feita para ser compartilhada.
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
              <li>500g de feijão preto</li>
              <li>200g de carne seca</li>
              <li>200g de lombo de porco</li>
              <li>1 linguiça paio</li>
              <li>1 linguiça calabresa</li>
              <li>1 cebola grande picada</li>
              <li>4 dentes de alho picados</li>
              <li>Folhas de louro</li>
              <li>Laranja, couve e farofa para acompanhar</li>
          </ul>
          <p><strong>Modo de Preparo:</strong></p>
          <p>
              Deixe o feijão e as carnes de molho de um dia para o outro, trocando a água das carnes algumas vezes. Cozinhe o feijão com as carnes e o louro na pressão por cerca de 1 hora. Enquanto isso, frite as linguiças e reserve. Em outra panela, refogue a cebola e o alho em óleo. Pegue uma concha do feijão cozido, amasse os grãos e junte ao refogado para engrossar o caldo. Volte tudo para a panela do feijão, adicione as linguiças e cozinhe em fogo baixo por mais 30 minutos para apurar o sabor. Sirva com arroz, couve refogada, farofa e fatias de laranja.
          </p>

          <hr />

          <h2>Biscoitos de Nata</h2>
          <p>
            A lata azul na prateleira de cima sempre guardava esses biscoitos. Eram o tesouro dos netos. Eles derretiam na boca. A receita era da minha avó, passada de geração em geração. Fazer esses biscoitos era uma forma de manter a memória dela viva. Era um trabalho de paciência, enrolar um por um, mas a alegria nos olhos de quem os comia fazia tudo valer a pena.
          </p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            <li>200g de nata (creme de leite fresco)</li>
            <li>1 xícara de açúcar</li>
            <li>1 ovo</li>
            <li>Aproximadamente 500g de amido de milho</li>
            <li>1 colher de sopa de fermento em pó</li>
          </ul>
          <p><strong>Modo de Preparo:</strong></p>
          <p>
            Misture a nata, o açúcar e o ovo. Aos poucos, adicione o amido de milho e o fermento, mexendo com as mãos, até que a massa não grude mais. O ponto é quando ela fica bem macia e maleável. Faça bolinhas pequenas, coloque em uma assadeira e amasse levemente com um garfo. Leve ao forno pré-aquecido a 180°C por cerca de 15 minutos. Não deixe dourar muito, eles devem ficar clarinhos. Guarde em uma lata bem fechada, se conseguir resistir a não comer tudo de uma vez.
          </p>
        </article>
      </main>

      <footer className="border-t border-border mt-12">
        <div className="mx-auto max-w-3xl px-6 py-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar à Loja
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-6">
            © {new Date().getFullYear()} Edições Helena
          </p>
        </div>
      </footer>
    </div>
  );
}
