import Link from 'next/link';
import styles from './Portfolio.module.css';

interface PortfolioProps {
  locale: 'es' | 'en';
  covers?: Record<string, string | undefined>;
  portfolio: {
    title: string;
    groups: { ux: string; graphic: string; personal: string };
    projects: { [key: string]: { title: string; description: string; year: string } };
  };
}

const GROUPS = [
  { id: 'personal-projects', key: 'personal', slugs: ['driftler'] },
  { id: 'ux-ui', key: 'ux', slugs: ['avsa', 'censo', 'ux-report'] },
  { id: 'graphic-design', key: 'graphic', slugs: ['capel', 'capelsour', 'stellantis'] },
] as const;

export default function Portfolio({ locale, portfolio, covers = {} }: PortfolioProps) {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={`container ${styles.inner}`}>
        <h2>{portfolio.title}</h2>
        {GROUPS.map((group) => {
          const projects = group.slugs
            .filter((slug) => portfolio.projects[slug])
            .map((slug) => ({ id: slug, ...portfolio.projects[slug] }));
          return (
            <div key={group.id} id={group.id} className={styles.group}>
              <div className={styles.groupHead}>
                <h3 className={styles.groupTitle}>{portfolio.groups[group.key]}</h3>
                <span className="label">{String(projects.length).padStart(2, '0')}</span>
              </div>
              <div className={styles.grid}>
                {projects.map((p) => (
                  <Link key={p.id} href={`/${locale}/projects/${p.id}`} className={styles.card}>
                    <div className={styles.thumb}>
                      {covers[p.id] && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={covers[p.id]} alt="" loading="lazy" />
                      )}
                    </div>
                    <div className={styles.meta}>
                      <h4>{p.title}</h4>
                      {p.year && <span className="label">{p.year}</span>}
                    </div>
                    <p className={styles.desc}>{p.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
