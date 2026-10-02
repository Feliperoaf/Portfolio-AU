import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CaseStudy from '../../../components/CaseStudy';
import { getCaseStudy } from '../../../../content';
import { collaborators, getProjectImages, projectSlugs, type Locale } from '../../../../lib/projects';
import es from '../../../../messages/es.json';
import en from '../../../../messages/en.json';
import styles from './project.module.css';

const messages = { es, en };

export function generateStaticParams() {
  return (['es', 'en'] as const).flatMap((locale) =>
    projectSlugs.map((slug) => ({ locale, slug }))
  );
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

  return (
    <>
      <Navbar locale={locale as Locale} navItems={t.nav} />
      <main className={styles.page}>
        <Link href={`/${locale}#portfolio`} className={styles.back}>
          ← {locale === 'es' ? 'Volver al portafolio' : 'Back to portfolio'}
        </Link>
        <header className={styles.header}>
          {project.year && <span className={styles.year}>{project.year}</span>}
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {study?.meta.length ? <p className={styles.meta}>{study.meta.join(' · ')}</p> : null}
          {(collaborators[slug] ?? []).length > 0 && (
            <div className={styles.collab}>
              <span>{locale === 'es' ? 'En colaboración con' : 'In collaboration with'}</span>
              {collaborators[slug].map((c) => (
                <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer" className={styles.collabLink}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.avatar} alt={c.name} width={32} height={32} />
                  {c.name}
                </a>
              ))}
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
      </main>
      <Footer locale={locale as Locale} social={t.social} />
    </>
  );
}
