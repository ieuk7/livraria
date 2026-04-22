'use client';

import Image from 'next/image';
import { Book, Copy, Home, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { OrderForm } from '@/components/order-form-post-purchase';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

type Edition = {
  id: string;
  title: string;
  description: string;
  price: number;
};

type Addon = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    price: number;
    originalPrice: number;
    image?: {
        imageUrl: string;
        description: string;
        imageHint: string;
    };
};

export default function ThankYouPage() {
  const searchParams = useSearchParams();
  const purchased = searchParams.get('purchased')?.split(',') || ['ebook'];
  const showUpsell = searchParams.get('upsell') === 'true';
  const email = searchParams.get('email') || '';

  const [displayUpsell, setDisplayUpsell] = useState(showUpsell);
  const [accessUrl, setAccessUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    setAccessUrl(window.location.href);
  }, []);


  const logo = PlaceHolderImages.find((img) => img.id === 'logo');
  const bookCover = PlaceHolderImages.find((img) => img.id === 'book-cover');
  const addonJardim = PlaceHolderImages.find(
    (img) => img.id === 'addon-jardim'
  );
  const addonReceitas = PlaceHolderImages.find(
    (img) => img.id === 'addon-receitas'
  );

  const allItems = useMemo(() => [
    {
      id: 'ebook-cartas',
      title: 'Cartas para Helena',
      subtitle: 'memórias de um amor que não termina',
      image: bookCover,
      downloads: [
        { format: 'Ler Agora', icon: Book, href: '/cartas-para-helena' },
      ],
      extras: 'Inclui 12 cartas inéditas',
    },
     {
      id: 'ebook',
      title: 'Cartas para Helena',
      subtitle: 'memórias de um amor que não termina',
      image: bookCover,
      downloads: [
        { format: 'Ler Agora', icon: Book, href: '/cartas-para-helena' },
      ],
    },
    {
      id: 'jardim',
      title: 'O Jardim que Helena Plantou',
      subtitle: 'contos de uma vida em flor',
      image: addonJardim,
      downloads: [{ format: 'Ler Agora', icon: Book, href: '/o-jardim-que-helena-plantou' }],
    },
    {
      id: 'receitas',
      title: 'Receitas de Domingo',
      subtitle: 'a mesa da nossa casa',
      image: addonReceitas,
      downloads: [{ format: 'Ler Agora', icon: Book, href: '/receitas-de-domingo' }],
    },
  ], [bookCover, addonJardim, addonReceitas]);

  const purchasedItems = useMemo(() => {
    return allItems.filter(item => purchased.includes(item.id));
  }, [allItems, purchased]);
  
  const addonsForUpsell = useMemo(() => ([
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
  ]), [addonJardim, addonReceitas]);

  const hasJardim = purchased.includes('jardim');
  const hasReceitas = purchased.includes('receitas');

  const upsellAddons = addonsForUpsell.filter(addon => !purchased.includes(addon.id));

  const copyToClipboard = () => {
    if (accessUrl) {
      navigator.clipboard.writeText(accessUrl);
      toast({
        title: 'Link Copiado!',
        description: 'Seu link de acesso foi copiado para a área de transferência.',
      });
    }
  };
  
  if (displayUpsell && upsellAddons.length > 0 && email) {
    return (
       <div className="min-h-screen bg-background font-sans text-foreground">
         <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-20">
            <div className="text-center">
                <h1 className="font-serif text-4xl text-ink md:text-5xl">
                    Espere! Uma oferta final...
                </h1>
                 <p className="mt-4 text-lg text-muted-foreground">
                    Sua compra foi aprovada, mas vimos que você pode gostar destes outros títulos do mesmo autor.
                </p>
            </div>
            <div className="mt-12">
                 <OrderForm 
                    addons={upsellAddons} 
                    onDecline={() => setDisplayUpsell(false)}
                    email={email}
                    purchasedItems={purchased}
                 />
            </div>
              <div className="text-center mt-8">
                <Button variant="link" onClick={() => setDisplayUpsell(false)}>
                    Não, obrigado. Ir para minha compra.
                </Button>
            </div>
         </main>
       </div>
    );
  }


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
        </div>

        <Card className="my-12 p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <LinkIcon className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-ink">Seu link de acesso permanente</h2>
            <p className="mt-1 text-sm text-muted-foreground">
                Salve este link para acessar seus livros a qualquer momento.
            </p>
            <div className="mt-4 flex items-center gap-2">
                <Input
                    readOnly
                    value={accessUrl}
                    className="text-xs text-muted-foreground"
                />
                <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copiar link">
                    <Copy className="h-4 w-4" />
                </Button>
            </div>
        </Card>

        <div className="space-y-8">
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
                  Acesse sua cópia:
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
