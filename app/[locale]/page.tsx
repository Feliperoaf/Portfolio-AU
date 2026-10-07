import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { getProjectImages, projectSlugs } from '../../lib/projects';
import es from '../../messages/es.json';
import en from '../../messages/en.json';

const messages = { es, en };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return { alternates: { canonical: `/${locale}`, languages: { es: '/es', en: '/en' } } };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'es' && locale !== 'en') notFound();
  const t = messages[locale];
  const covers = Object.fromEntries(projectSlugs.map((s) => [s, getProjectImages(s, locale)[0]]));

  return (
    <>
      <Navbar locale={locale} navItems={t.nav} />
      <Hero locale={locale} hero={t.hero} />
      <About locale={locale} about={t.about} />
      <Portfolio locale={locale} portfolio={t.portfolio} covers={covers} />
      <Resume resume={t.resume} />
      <Skills locale={locale} />
      <Contact locale={locale} contact={t.contact} />
      <Footer locale={locale} social={t.social} />
    </>
  );
}
