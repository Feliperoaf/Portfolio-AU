import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DM_Sans, DM_Mono } from 'next/font/google';
import '../globals.css';

const sans = DM_Sans({ subsets: ['latin'], axes: ['opsz'], variable: '--font-sans', display: 'swap' });
const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

const locales = ['es', 'en'] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Felipe Roa - Art Director & UX/UI Designer',
  description: 'Portafolio de Felipe Roa. Art Director, UX/UI Designer y Publicista. Transforma ideas en experiencias visuales impactantes.',
};

const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  return (
    <html lang={locale} className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
