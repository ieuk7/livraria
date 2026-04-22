import type { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cartas para Helena — um livro de Joaquim Vieira',
  description: 'Memórias de um amor que não termina. Adquira o livro de Joaquim Vieira em edição especial encadernada.',
  authors: [{ name: 'Joaquim Vieira' }],
  openGraph: {
    title: 'Cartas para Helena — um livro de Joaquim Vieira',
    description: 'Memórias de um amor que não termina. Adquira o livro de Joaquim Vieira em edição especial encadernada.',
    type: 'website',
    images: ['https://storage.googleapis.com/gpt-engineer-file-uploads/Vodq2S2meMUjXev5R1PxOHuAqwq1/social-images/social-1776873327322-Captura_de_tela_2026-04-22_125450.webp'],
  },
  twitter: {
    card: 'summary',
    site: '@Lovable',
    title: 'Cartas para Helena — um livro de Joaquim Vieira',
    description: 'Memórias de um amor que não termina. Adquira o livro de Joaquim Vieira em edição especial encadernada.',
    images: ['https://storage.googleapis.com/gpt-engineer-file-uploads/Vodq2S2meMUjXev5R1PxOHuAqwq1/social-images/social-1776873327322-Captura_de_tela_2026-04-22_125450.webp'],
  },
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
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <Script src="https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs/qrcode.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
