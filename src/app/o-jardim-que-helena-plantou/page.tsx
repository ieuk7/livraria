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
              O Jardim que Helena Plantou
            </h1>
            <p className="text-sm text-muted-foreground italic">
              por Joaquim Vieira
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
          <h2>Prefácio</h2>
          <p>
            Depois que Helena se foi, o jardim se tornou meu refúgio. Cada flor, cada folha, era uma lembrança dela. Ela o plantou não apenas com sementes, mas com amor, paciência e a esperança de ver a vida florescer. Este pequeno livro não é um manual de jardinagem, mas uma coleção de crônicas sobre como as flores me ensinaram a lidar com a saudade. É sobre encontrar beleza na impermanência e entender que, mesmo depois do inverno mais rigoroso, a primavera sempre volta.
          </p>

          <hr />

          <h2>As Rosas Teimosas</h2>
          <p>
            Helena amava as rosas. Ela dizia que elas eram como as pessoas: precisavam de cuidado, mas também de espaço para crescer. As roseiras que ela plantou perto da varanda são as mais teimosas. Mesmo nos dias mais cinzentos, elas insistem em dar flores de um vermelho vibrante. Cuido delas com um carinho especial, regando e podando, e sinto que, de alguma forma, estou cuidando de uma parte dela. Elas me lembram da sua força, da sua resiliência. E, assim como ela, florescem quando a gente menos espera.
          </p>

          <h2>O Perfume das Lavandas</h2>
          <p>
            O caminho de entrada da nossa casa é ladeado por pés de lavanda. Helena os plantou para que, ao chegarmos, fôssemos recebidos por um perfume que acalma a alma. E funciona. Todas as manhãs, quando saio para pegar o jornal, o aroma suave me envolve e traz uma sensação de paz. Fecho os olhos e consigo imaginá-la ali, sorrindo, com um ramo de lavanda nas mãos. É um perfume que ficou impregnado não só na casa, mas na minha memória.
          </p>

          <h2>Os Girassóis e a Busca pela Luz</h2>
          <p>
            No fundo do quintal, temos uma pequena plantação de girassóis. Foi uma das últimas coisas que plantamos juntos. Helena se encantava com a forma como eles se viravam em busca do sol. "Eles nos ensinam a procurar a luz, mesmo nos dias nublados", ela dizia. Hoje, quando olho para eles, com suas pétalas amarelas erguidas para o céu, entendo o que ela queria dizer. Eles são um lembrete constante de que é preciso ter esperança, de que sempre há uma luz a ser seguida.
          </p>

          <hr />

          <h2>As Pequenas Margaridas</h2>
          <p>
            Margaridas nasciam espontaneamente em vários cantos do jardim. Helena nunca as arrancava. Dizia que elas eram a alegria do jardim, pequenas estrelas brancas salpicadas na grama. Elas me lembram da simplicidade com que Helena via a vida. Para ela, a beleza estava nas pequenas coisas: num sorriso, num gesto de carinho, numa flor que nasce sem ser plantada. E é essa simplicidade que tento carregar comigo todos os dias.
          </p>

          <h2>O Chá de Hortelã</h2>
          <p>
            Tínhamos um canteiro só de hortelã. Nas noites mais frias, Helena colhia algumas folhas e preparava um chá que aquecia o corpo e a alma. O vapor com cheiro de menta preenchia a cozinha e, sentados à mesa, conversávamos sobre o dia, sobre a vida, sobre os nossos sonhos. Hoje, eu mesmo preparo o chá. O sabor me transporta para essas noites e, por um instante, sinto que ela está ali, sentada na minha frente, com sua xícara nas mãos.
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
