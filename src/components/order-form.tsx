"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Minus, Plus, Check, Lock, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

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
  image?: ImagePlaceholder;
};

type OrderFormProps = {
  editions: Edition[];
  addons: Addon[];
};

export function OrderForm({ editions, addons }: OrderFormProps) {
  const [selectedEdition, setSelectedEdition] = useState<string>(
    editions[0]?.id
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [email, setEmail] = useState('');

  const handleAddonToggle = (addonId: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const subtotal = useMemo(() => {
    const edition = editions.find((e) => e.id === selectedEdition);
    return (edition?.price || 0) * quantity;
  }, [selectedEdition, quantity, editions]);

  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((total, addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
  }, [selectedAddons, addons]);

  const total = subtotal + addonsTotal;

  return (
    <Card className="rounded-sm border-border bg-card p-8 shadow-sm">
      <div className="flex items-baseline justify-between">
        <h2 className="font-serif text-2xl text-ink">
          Finalize seu pedido
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Passo 1 de 1
        </span>
      </div>
      <Separator className="my-6" />

      <div className="space-y-6">
        <div>
          <Label className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Escolha a edição
          </Label>
          <RadioGroup
            value={selectedEdition}
            onValueChange={setSelectedEdition}
            className="grid gap-2"
          >
            {editions.map((edition) => (
              <Label
                key={edition.id}
                htmlFor={edition.id}
                className={cn(
                  'flex cursor-pointer items-center justify-between rounded-sm border p-4 py-3 transition-colors hover:border-accent/50',
                  selectedEdition === edition.id &&
                    'border-accent bg-secondary/60'
                )}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem value={edition.id} id={edition.id} className='shadow-none'>
                    {selectedEdition === edition.id && <Circle className="h-3.5 w-3.5 fill-primary" />}
                  </RadioGroupItem>
                  <div>
                    <p className="font-serif text-base text-ink">
                      {edition.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {edition.description}
                    </p>
                  </div>
                </div>
                <span className="font-serif text-base text-ink">
                  {formatCurrency(edition.price)}
                </span>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Label className="mb-3 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Quantidade
          </Label>
          <div className="inline-flex items-center rounded-sm border border-border">
            <Button
              variant="ghost"
              size="icon"
              className="h-auto rounded-none p-2 text-foreground/70 transition-colors hover:bg-transparent hover:text-foreground"
              aria-label="Diminuir quantidade"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center font-serif text-lg">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-auto rounded-none p-2 text-foreground/70 transition-colors hover:bg-transparent hover:text-foreground"
              aria-label="Aumentar quantidade"
              onClick={() => setQuantity((q) => q + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Adicione à sua leitura
          </Label>
          <p className="text-xs italic text-muted-foreground">
            Outras obras de Joaquim Vieira, com desconto exclusivo nesta
            página.
          </p>
          {addons.map((addon) => {
            const isSelected = selectedAddons.includes(addon.id);
            return (
              <button
                key={addon.id}
                type="button"
                onClick={() => handleAddonToggle(addon.id)}
                className={cn(
                  'flex w-full items-start gap-3 rounded-sm border p-3 text-left transition-all',
                  isSelected
                    ? 'border-accent bg-accent/5 shadow-sm'
                    : 'border-dashed border-border hover:border-accent/60'
                )}
              >
                <div
                  className={cn(
                    'mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border',
                    isSelected
                      ? 'border-accent bg-accent text-accent-foreground'
                      : 'border-muted-foreground/40'
                  )}
                >
                  {isSelected && (
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  )}
                </div>
                {addon.image && (
                  <Image
                    src={addon.image.imageUrl}
                    alt={addon.image.description}
                    width={56}
                    height={75}
                    loading="lazy"
                    className="h-[75px] w-[56px] shrink-0 rounded-[2px] object-cover shadow-sm"
                    data-ai-hint={addon.image.imageHint}
                  />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-serif text-sm leading-tight text-ink">
                    {addon.title}
                  </p>
                  <p className="text-xs italic text-muted-foreground">
                    {addon.subtitle}
                  </p>
                  <p className="mt-1 text-xs text-foreground/80">
                    {addon.description}
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-serif text-sm font-semibold text-accent">
                      {formatCurrency(addon.price)}
                    </span>
                    <span className="text-xs text-muted-foreground line-through">
                      {formatCurrency(addon.originalPrice)}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <Separator />

        <div className="space-y-3">
          <div>
            <Label
              htmlFor="email"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              E-mail
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 h-9 rounded-sm bg-transparent text-base"
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Enviaremos o livro digital para este e-mail.
            </p>
          </div>
        </div>

        <Separator />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>
          {addonsTotal > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Adicionais</span>
              <span>{formatCurrency(addonsTotal)}</span>
            </div>
          )}
          <div className="flex items-baseline justify-between pt-3">
            <span className="font-serif text-lg text-ink">Total</span>
            <span className="font-serif text-2xl text-ink">
              {formatCurrency(total)}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            ou em até 3x de {formatCurrency(total / 3)} sem juros
          </p>
        </div>

        <Button
          size="lg"
          className="h-auto w-full rounded-sm py-3 font-serif text-base tracking-wide"
        >
          <Lock className="mr-2 h-4 w-4" strokeWidth={2} /> Comprar agora
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Pagamento seguro via PIX · Aprovação imediata
        </p>
      </div>
    </Card>
  );
}
