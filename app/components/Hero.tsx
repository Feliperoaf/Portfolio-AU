import styles from './Hero.module.css';

interface HeroProps {
  locale: 'es' | 'en';
  hero: { greeting: string; title: string; slogan: string; availability: string };
}

export default function Hero({ locale, hero }: HeroProps) {
  const [first, ...rest] = hero.title.split(' ');
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>
          <span className="sr-only">{hero.greeting} </span>
          <span>{first}</span> <span className={styles.hl}>{rest.join(' ')}</span>
        </h1>
        <div className={styles.row}>
          <p className={styles.slogan}>
            {hero.slogan.split('**').map((part, i) => (i % 2 ? <mark key={i} className={styles.spark}>{part}</mark> : part))}
          </p>
        </div>
        <div className={styles.actions}>
          <a href="#portfolio" className={styles.cta}>
            {locale === 'es' ? 'Ver trabajos' : 'View work'} <span aria-hidden>↓</span>
          </a>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden />
            {hero.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
