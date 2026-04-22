'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

declare var QRCode: any;

type PixModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pixData: {
    hash: string;
    pix: {
      pix_qr_code: string;
    };
    amount_paid: number;
    purchasedItems: string[];
    email: string;
  } | null;
};

export function PixModal({ isOpen, onClose, pixData }: PixModalProps) {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const paymentCheckInterval = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen || !pixData) return;

    let qrCodeCreationInterval: NodeJS.Timeout | null = null;

    const tryCreateQrCode = () => {
      // Check if QRCode library is loaded and ref is available
      if (typeof QRCode !== 'undefined' && qrCodeRef.current && pixData.pix.pix_qr_code) {
        // If we have an interval running, clear it
        if (qrCodeCreationInterval) {
          clearInterval(qrCodeCreationInterval);
        }

        // Clear any previous QR code
        qrCodeRef.current.innerHTML = '';
        
        // Create new QR code
        new QRCode(qrCodeRef.current, {
          text: pixData.pix.pix_qr_code,
          width: 184,
          height: 184,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.M,
        });
      }
    };

    // Start checking for payment status
    startPaymentChecker(pixData.hash);

    // Try to create QR code immediately. If it fails, set an interval to retry.
    tryCreateQrCode();
    qrCodeCreationInterval = setInterval(tryCreateQrCode, 200);

    // Cleanup function
    return () => {
      if (paymentCheckInterval.current) {
        clearInterval(paymentCheckInterval.current);
      }
      if (qrCodeCreationInterval) {
        clearInterval(qrCodeCreationInterval);
      }
    };
  }, [isOpen, pixData]);

  const handleSuccessfulPayment = (isSimulation = false) => {
    if (paymentCheckInterval.current) {
      clearInterval(paymentCheckInterval.current);
    }
    toast({
      title: `Pagamento Aprovado!${isSimulation ? ' (Simulação)' : ''}`,
      description: "Obrigado pela sua compra. Redirecionando...",
      variant: "default",
    });

    const purchasedItems = pixData?.purchasedItems || [];
    const email = pixData?.email || '';
    const hasAllAddons = purchasedItems.includes('jardim') && purchasedItems.includes('receitas');
    
    let url = '/thank-you';
    const params = new URLSearchParams();
    params.set('purchased', purchasedItems.join(','));
    if(email) params.set('email', email);
    
    if (!hasAllAddons) {
        params.set('upsell', 'true');
    }

    url = `${url}?${params.toString()}`;

    router.push(url);
  };

  const startPaymentChecker = (hash: string) => {
    if (paymentCheckInterval.current) {
      clearInterval(paymentCheckInterval.current);
    }
    paymentCheckInterval.current = setInterval(async () => {
      try {
        const response = await fetch(`/api/checkout/status?hash=${hash}`);
        const data = await response.json();

        if (data && data.payment_status === 'paid') {
          handleSuccessfulPayment();
        }
      } catch (error) {
        console.error('Payment check failed:', error);
      }
    }, 3000);
  };

  const copyToClipboard = () => {
    if (pixData?.pix.pix_qr_code) {
      navigator.clipboard.writeText(pixData.pix.pix_qr_code);
      toast({
        title: 'Copiado!',
        description: 'O código PIX foi copiado para a área de transferência.',
      });
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };
  
  if (!pixData) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-sm text-center p-6">
        <DialogHeader className="space-y-2">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-2">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl font-bold text-gray-900">Pagamento Gerado!</DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
                Escaneie o QR code ou use o código PIX para pagar.
            </DialogDescription>
            <p className="text-lg font-bold text-gray-800">{formatCurrency(pixData.amount_paid)}</p>
        </DialogHeader>

        <div className="bg-gray-50 p-4 rounded-xl border-2 border-dashed border-gray-200 my-4 flex justify-center">
            <div ref={qrCodeRef} className="mix-blend-multiply"></div>
        </div>

        <div className="space-y-3">
            <div className="relative">
                <Input
                    id="pix-code"
                    readOnly
                    value={pixData.pix.pix_qr_code}
                    className="pr-10 text-xs font-mono text-gray-600"
                />
                <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2" onClick={copyToClipboard}>
                    <Copy className="h-4 w-4" />
                </Button>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 font-bold text-base" onClick={copyToClipboard}>
                <Copy className="mr-2 h-4 w-4" /> Copiar Código PIX
            </Button>
        </div>

        <p className="text-xs text-gray-400 mt-4 leading-tight">
            Após o pagamento, a confirmação será processada automaticamente e você receberá o acesso no e-mail informado.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 border-t pt-4">
            <p className="text-xs text-center text-muted-foreground mb-2">Apenas para desenvolvimento:</p>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => handleSuccessfulPayment(true)}
            >
              Simular Pagamento Aprovado
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
