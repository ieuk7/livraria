"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PixModal } from '@/components/pix-modal';
import { useToast } from '@/hooks/use-toast';

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
  addons: Addon[];
  onDecline: () => void;
  email: string;
  purchasedItems: string[];
};

type PixData = {
    hash: string;
    pix: {
      pix_qr_code: string;
    };
    amount_paid: number;
    purchasedItems: string[];
    email: string;
};

export function OrderForm({ addons, onDecline, email, purchasedItems }: OrderFormProps) {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPixModalOpen, setIsPixModalOpen] = useState(false);
  const [pixData, setPixData] = useState<PixData | null>(null);

  const { toast } = useToast();

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

  const addonsTotal = useMemo(() => {
    return selectedAddons.reduce((total, addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
  }, [selectedAddons, addons]);

  const total = addonsTotal;
  
  const handlePurchase = async () => {
    if (selectedAddons.length === 0) {
        toast({
            title: 'Nenhum item selecionado',
            description: 'Por favor, adicione um item para continuar.',
            variant: 'destructive',
        });
        return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ total, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Não foi possível gerar o pagamento.');
      }
      
      const allPurchasedItems = [...purchasedItems, ...selectedAddons];
      setPixData({ ...data, purchasedItems: allPurchasedItems, email });
      setIsPixModalOpen(true);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro desconhecido.';
      toast({
        title: 'Erro no Pagamento',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <Card className="rounded-sm border-border bg-card p-8 shadow-sm">
      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Adicione à sua compra
          </Label>
          <p className="text-sm italic text-muted-foreground">
            Aproveite esta oferta única com um desconto especial.
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

        <div className="space-y-2 text-sm">
          <div className="flex items-baseline justify-between pt-3">
            <span className="font-serif text-lg text-ink">Total a adicionar</span>
            <span className="font-serif text-2xl text-ink">
              {formatCurrency(total)}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4">
            <Button
              size="lg"
              className="h-auto w-full rounded-sm py-3 font-serif text-base tracking-wide"
              onClick={handlePurchase}
              disabled={isLoading || selectedAddons.length === 0}
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Check className="mr-2 h-4 w-4" strokeWidth={2} />
              )}
              {isLoading ? 'Processando...' : 'Sim, eu quero!'}
            </Button>
        </div>
      </div>
    </Card>
    <PixModal isOpen={isPixModalOpen} onClose={() => setIsPixModalOpen(false)} pixData={pixData} />
    </>
  );
}
