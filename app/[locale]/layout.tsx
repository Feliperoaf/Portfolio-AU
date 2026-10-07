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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.froa.digital';

const copy = {
  es: {
    title: 'Felipe Roa – Director de Arte y Diseñador UX/UI',
    description: 'Portafolio de Felipe Roa: diseño UX/UI y diseño gráfico para marcas como Stellantis y Capel, con casos de usabilidad para AVSA y el Censo 2024.',
  },
  en: {
    title: 'Felipe Roa – Art Director & UX/UI Designer',
    description: 'Portfolio of Felipe Roa: UX/UI and graphic design for brands like Stellantis and Capel, with usability case studies for AVSA and the 2024 Census.',
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale === 'es' ? 'es' : 'en'];
  return {
    metadataBase: new URL(SITE_URL),
    title: c.title,
    description: c.description,
    icons: { icon: '/favicon.svg', apple: '/apple-icon.png' },
    alternates: { languages: { es: '/es/', en: '/en/' } },
    openGraph: {
      title: c.title,
      description: c.description,
      type: 'website',
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      images: [{ url: '/projects/avsa/cover.jpg' }],
    },
    twitter: { card: 'summary_large_image' },
  };
}

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
