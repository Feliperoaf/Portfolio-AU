import styles from './Hero.module.css';

interface HeroProps {
  locale: 'es' | 'en';
  hero: { greeting: string; title: string; subtitle: string; description: string };
}

export default function Hero({ locale, hero }: HeroProps) {
  const [first, ...rest] = hero.title.split(' ');
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <p className="label">{hero.greeting}</p>
        <h1 className={styles.title}>
          <span>{first}</span> <mark>{rest.join(' ')}</mark>
        </h1>
        <div className={styles.row}>
          <p className={styles.subtitle}>{hero.subtitle}</p>
          <p className={styles.description}>{hero.description}</p>
        </div>
        <a href="#portfolio" className={styles.cta}>
          {locale === 'es' ? 'Ver trabajos' : 'View work'} <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}
