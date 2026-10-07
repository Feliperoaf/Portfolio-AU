import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CaseStudy from '../../../components/CaseStudy';
import { getCaseStudy } from '../../../../content';
import { collaborators, getProjectImages, projectGroup, projectSlugs, type Locale } from '../../../../lib/projects';
import es from '../../../../messages/es.json';
import en from '../../../../messages/en.json';
import styles from './project.module.css';

const messages = { es, en };

export function generateStaticParams() {
  return (['es', 'en'] as const).flatMap((locale) =>
    projectSlugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (locale !== 'es' && locale !== 'en') return {};
  const project = (messages[locale as Locale].portfolio.projects as Record<string, { title: string; description: string; seo?: { title: string; description: string } }>)[slug];
  if (!project) return {};
  const image = getCaseStudy(slug, locale as Locale)?.hero.src ?? getProjectImages(slug, locale as Locale)[0];
  const title = project.seo?.title ?? `${project.title} – Felipe Roa`;
  const description = project.seo?.description ?? project.description;
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: { es: `/es/projects/${slug}`, en: `/en/projects/${slug}` },
    },
    openGraph: { title, description, type: 'article', images: image ? [{ url: image }] : undefined },
    twitter: { card: 'summary_large_image' },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== 'es' && locale !== 'en') notFound();
  const t = messages[locale as Locale];
  const project = (t.portfolio.projects as Record<string, { title: string; description: string; year: string }>)[slug];
  if (!project) notFound();
  const study = getCaseStudy(slug, locale as Locale);
  const images = study ? [] : getProjectImages(slug, locale as Locale);
  const group = projectGroup[slug];

  return (
    <>
      <Navbar locale={locale as Locale} navItems={t.nav} />
      <main className={styles.page}>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <ol>
            <li>
              <Link href={`/${locale}#portfolio`}>{t.portfolio.title}</Link>
            </li>
            {group && (
              <li>
                <Link href={`/${locale}#${group.anchor}`}>{t.portfolio.groups[group.key]}</Link>
              </li>
            )}
            <li aria-current="page">{project.title}</li>
          </ol>
        </nav>
        <header className={styles.header}>
          {project.year && <span className={styles.year}>{project.year}</span>}
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {study?.meta.length && !study.glance ? <p className={styles.meta}>{study.meta.join(' · ')}</p> : null}
          {(collaborators[slug] ?? []).length > 0 && (
            <div className={styles.collab}>
              <span>{locale === 'es' ? 'En colaboración con' : 'In collaboration with'}</span>
              {collaborators[slug].map((c) => {
                const avatar = c.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.avatar} alt="" width={32} height={32} />
                ) : (
                  <svg className={styles.anon} viewBox="0 0 24 24" width={28} height={28} aria-hidden="true">
                    <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.15" />
                    <circle cx="12" cy="9.5" r="3.6" fill="currentColor" />
                    <path d="M4.8 20.2c.9-3.6 3.8-5.4 7.2-5.4s6.3 1.8 7.2 5.4A12 12 0 0 1 12 24a12 12 0 0 1-7.2-3.8Z" fill="currentColor" />
                  </svg>
                );
                return c.url ? (
                  <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className={styles.collabLink}>
                    {avatar}
                    {c.name}
                  </a>
                ) : (
                  <span key={c.name} className={`${styles.collabLink} ${styles.collabStatic}`}>
                    {avatar}
                    {c.name}
                  </span>
                );
              })}
            </div>
          )}
        </header>
        {study ? (
          <CaseStudy study={study} locale={locale as Locale} />
        ) : images.length > 0 ? (
          <div className={styles.gallery}>
            {images.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={project.title} loading="lazy" />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>
            {locale === 'es' ? 'Contenido próximamente.' : 'Content coming soon.'}
          </p>
        )}
        <div className={styles.end}>
          <Link href={`/${locale}#portfolio`} className={styles.back}>
            <span aria-hidden>←</span> {locale === 'es' ? 'Volver al portafolio' : 'Back to portfolio'}
          </Link>
        </div>
      </main>
      <Footer locale={locale as Locale} social={t.social} />
    </>
  );
}
