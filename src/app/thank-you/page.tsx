import Image from 'next/image';
import { Download, Book, FileText, Home } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';

export default function ThankYouPage() {
  const logo = PlaceHolderImages.find((img) => img.id === 'logo');
  const bookCover = PlaceHolderImages.find((img) => img.id === 'book-cover');
  const addonJardim = PlaceHolderImages.find(
    (img) => img.id === 'addon-jardim'
  );
  const addonReceitas = PlaceHolderImages.find(
    (img) => img.id === 'addon-receitas'
  );

  // Nota: Atualmente, todos os produtos são exibidos.
  // Isso deve ser tornado dinâmico com base na compra real do cliente.
  const purchasedItems = [
    {
      title: 'Cartas para Helena',
      subtitle: 'memórias de um amor que não termina',
      image: bookCover,
      downloads: [
        { format: 'PDF', icon: FileText, href: '#' },
        { format: 'ePub', icon: Book, href: '#' },
      ],
      extras: 'Inclui 12 cartas inéditas',
    },
    {
      title: 'O Jardim que Helena Plantou',
      subtitle: 'contos de uma vida em flor',
      image: addonJardim,
      downloads: [{ format: 'PDF', icon: FileText, href: '#' }],
    },
    {
      title: 'Receitas de Domingo',
      subtitle: 'a mesa da nossa casa',
      image: addonReceitas,
      downloads: [{ format: 'PDF', icon: FileText, href: '#' }],
    },
  ];

  return (
    <div className="min-h-screen bg-muted/30 font-sans text-foreground">
      <header className="border-b border-border/60 bg-background">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            {logo && (
              <Link href="/">
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </Link>
            )}
            <span className="font-serif text-lg tracking-wide">
              Edições Helena
            </span>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" /> Voltar à Loja
            </Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-20">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-ink md:text-5xl">
            Obrigado por sua compra!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Acesse seus livros abaixo. Esperamos que você aproveite a leitura.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Uma cópia dos seus produtos digitais também foi enviada para o seu
            e-mail.
          </p>
        </div>

        <div className="mt-12 space-y-8 lg:mt-16">
          {purchasedItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-sm transition-shadow hover:shadow-md sm:flex"
            >
              <div className="relative aspect-[3/4] w-full flex-shrink-0 sm:w-[150px]">
                {item.image && (
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex-grow p-6">
                <CardTitle className="font-serif text-2xl text-ink">
                  {item.title}
                </CardTitle>
                <CardDescription className="mt-1 italic">
                  {item.subtitle}
                </CardDescription>

                {item.extras && (
                  <p className="mt-4 text-sm font-medium text-accent">
                    {item.extras}
                  </p>
                )}

                <Separator className="my-4" />

                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  Baixar sua cópia:
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {item.downloads.map((download) => (
                    <Button key={download.format} asChild>
                      <Link href={download.href}>
                        <download.icon className="mr-2 h-4 w-4" />
                        {download.format}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Em caso de dúvidas ou problemas, por favor, responda ao e-mail de
            confirmação que enviamos.
          </p>
        </div>
      </main>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} Edições Helena · Publicado de forma
            independente
          </span>
          <span className="uppercase tracking-[0.3em]">feito com cuidado</span>
        </div>
      </footer>
    </div>
  );
}
