"use client";

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleGenerateSnippet } from '@/app/actions';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';

const formSchema = z.object({
  theme: z.string().min(3, { message: 'Por favor, insira um tema com pelo menos 3 caracteres.' }).max(100),
});

type FormValues = z.infer<typeof formSchema>;

export function LetterGenerator() {
  const [generatedSnippet, setGeneratedSnippet] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedSnippet('');
    try {
      const result = await handleGenerateSnippet({ theme: data.theme });
      if (result && result.letterSnippet) {
        setGeneratedSnippet(result.letterSnippet);
      } else {
        throw new Error('A resposta da IA estava vazia.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Ocorreu um erro',
        description: 'Não foi possível gerar o trecho da carta. Por favor, tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mt-12 border-dashed">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline">
          <Wand2 className="h-6 w-6 text-accent" />
          Gerador de Cartas
        </CardTitle>
        <CardDescription className="font-headline italic">
          Sinta o tom do livro. Gere um trecho inspirado em um tema.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="theme"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Tema ou palavra-chave</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: saudade, um dia de chuva, o cheiro de café..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
              {isLoading ? 'Gerando...' : 'Gerar Trecho'}
            </Button>
          </form>
        </Form>
        {(isLoading || generatedSnippet) && (
          <div className="mt-6 rounded-md border bg-muted/50 p-4">
            {isLoading && <p className="animate-pulse text-muted-foreground">Pensando nas palavras certas...</p>}
            {generatedSnippet && (
              <blockquote className="font-headline text-lg italic text-foreground">
                “{generatedSnippet}”
              </blockquote>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
