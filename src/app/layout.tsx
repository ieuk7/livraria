import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { LovableBadge } from '@/components/lovable-badge';

export const metadata: Metadata = {
  title: 'Cartas para Helena — um livro de Joaquim Vieira',
  description: 'Memórias de um amor que não termina. Adquira o livro de Joaquim Vieira em edição especial encadernada.',
  authors: [{ name: 'Joaquim Vieira' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Literata:ital,opsz,wght@0,7..72,400..700;1,7..72,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <LovableBadge />
      </body>
    </html>
  );
}
