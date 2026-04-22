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
