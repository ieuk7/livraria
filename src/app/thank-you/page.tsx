import { CheckCircle, Home } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-muted/30 font-sans text-foreground flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center shadow-lg animate-in fade-in-50 zoom-in-95 duration-500">
        <CardHeader className="p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="font-serif text-3xl text-ink">
            Obrigado pela sua compra!
          </CardTitle>
           <CardDescription className="pt-2">
            Seu pagamento foi confirmado com sucesso.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 bg-slate-50/80 p-8 pt-6">
          <p className="text-muted-foreground">
            Enviamos o acesso ao seu livro digital e a confirmação do pedido para o seu e-mail.
          </p>
          <p className="text-xs text-muted-foreground">
            Caso não o encontre na sua caixa de entrada, por favor, verifique também a pasta de spam.
          </p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Voltar para a página inicial
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
