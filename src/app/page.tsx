import Image from 'next/image';
import { Download, Heart, Quote, ShieldCheck, BadgeCheck } from 'lucide-react';

import { OrderForm } from '@/components/order-form';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const logo = PlaceHolderImages.find((img) => img.id === 'logo');
  const bookCover = PlaceHolderImages.find((img) => img.id === 'book-cover');
  const addonJardim = PlaceHolderImages.find((img) => img.id === 'addon-jardim');
  const addonReceitas = PlaceHolderImages.find((img) => img.id === 'addon-receitas');

  const addons = [
    {
      id: 'jardim',
      title: 'O Jardim que Helena Plantou',
      subtitle: 'contos de uma vida em flor',
      description:
        'Do mesmo autor. Adicione por R$ 12,90 — 50% OFF só nesta página.',
      price: 12.9,
      originalPrice: 24.9,
      image: addonJardim,
    },
    {
      id: 'receitas',
      title: 'Receitas de Domingo',
      subtitle: 'a mesa da nossa casa',
      description:
        'Do mesmo autor. As receitas de Helena, contadas com afeto. Inclua por R$ 9,90.',
      price: 9.9,
      originalPrice: 19.9,
      image: addonReceitas,
    },
  ];

  const editions = [
    {
      id: 'ebook',
      title: 'eBook (PDF + ePub)',
      description: 'Acesso imediato após o pagamento',
      price: 9.9,
    },
    {
      id: 'ebook-cartas',
      title: 'eBook + Cartas Inéditas',
      description: 'Inclui 12 cartas que não entraram no livro',
      price: 19.9,
    },
  ];

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            {logo && (
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                data-ai-hint={logo.imageHint}
              />
            )}
            <span className="font-serif text-lg tracking-wide">
              Edições Helena
            </span>
          </div>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-muted-foreground sm:block">
            Livro Digital · Acesso imediato
          </span>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-accent">
              Romance memorialístico
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-ink md:text-6xl">
              Cartas para Helena
            </h1>
            <p className="font-serif text-xl italic text-muted-foreground">
              memórias de um amor que não termina
            </p>
            <div className="relative inline-flex items-center gap-3 pt-4">
                <Image
                    src="https://s3.typebotstorage.com/public/workspaces/clo2dg2hi0041mj0fephb5rrf/typebots/cmoag4gon000704lastl1gbnq/blocks/k1tvc5an9l24uo4i5otd4bne?v=1776916773562"
                    alt="Lindomar Souza"
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover border-2 border-border/40"
                />
                <div>
                    <div className="flex items-center gap-2">
                    <p className="font-serif text-lg text-ink">
                        por Lindomar Souza
                    </p>
                    <BadgeCheck className="h-5 w-5 text-blue-500" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                    Autor com documentos verificados
                    </p>
                </div>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm" style={{boxShadow: 'var(--shadow-book)'}}>
            {bookCover && (
              <Image
                src={bookCover.imageUrl}
                alt={bookCover.description}
                width={768}
                height={1024}
                className="h-full w-full object-cover"
                priority
                data-ai-hint={bookCover.imageHint}
              />
            )}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>

          <figure className="border-l-2 border-accent/60 pl-6">
            <Quote className="mb-3 h-5 w-5 text-accent" aria-hidden="true" strokeWidth={1.5} />
            <blockquote className="font-serif text-xl italic leading-relaxed text-ink">
              “Aprendi tarde que o amor não cabe num adeus. Por isso escrevo —
              porque há coisas que só o papel ainda escuta.”
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              — trecho de <span className="italic">Cartas para Helena</span>
            </figcaption>
          </figure>

          <div className="space-y-4 text-base leading-relaxed text-foreground/85">
            <p>
              Aos setenta e oito anos, depois de perder Helena, sua companheira
              de cinco décadas, Joaquim começou a escrever. Não diários, não
              poemas — <em>cartas</em>. Cartas para a mulher que continuava
              presente em cada xícara de chá esquecida na mesa, em cada cadeira
              de balanço que ainda parecia se mover sozinha.
            </p>
            <p>
              <span className="font-serif italic">Cartas para Helena</span> é
              um livro escrito devagar, à mão, com a paciência de quem sabe que
              a saudade não tem pressa. Uma obra sobre envelhecer amando, sobre
              o luto que se transforma em gratidão, e sobre o silêncio luminoso
              que fica quando alguém amado parte.
            </p>
            <p className="text-muted-foreground">
              Edição independente · 248 páginas · papel pólen soft 80g ·
              prefácio de Lygia Bojunga.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 border-t border-border/60 pt-8 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Download
                className="mt-0.5 h-5 w-5 text-accent"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm font-medium">Acesso imediato</p>
                <p className="text-xs text-muted-foreground">no seu e-mail</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 text-accent"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm font-medium">Garantia de 7 dias</p>
                <p className="text-xs text-muted-foreground">
                  100% do dinheiro de volta
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart
                className="mt-0.5 h-5 w-5 text-accent"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm font-medium">Edição independente</p>
                <p className="text-xs text-muted-foreground">direto do autor</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-8 lg:self-start">
          <OrderForm editions={editions} addons={addons} />
          <p className="mt-6 text-center font-serif text-sm italic text-muted-foreground">
            “um livro para ler devagar, com chá ao lado.”
          </p>
        </aside>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} Edições Helena · Publicado de forma
            independente
          </span>
          <span className="uppercase tracking-[0.3em]">feito com cuidado</span>
        </div>
      </footer>
    </main>
  );
}
