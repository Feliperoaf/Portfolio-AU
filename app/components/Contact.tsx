import styles from './Contact.module.css';

interface ContactProps {
  locale: 'es' | 'en';
  contact: { title: string; subtitle: string; email: string; cta: string };
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.info}>
          <h2>{contact.title}</h2>
          <p className={styles.subtitle}>{contact.subtitle}</p>
        </div>
        <a href={`mailto:${contact.email}`} className={styles.emailLink}>
          <span>{contact.email}</span>
          <span className={styles.arrow} aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
