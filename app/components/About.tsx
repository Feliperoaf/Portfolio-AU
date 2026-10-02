import styles from './About.module.css';

interface AboutProps {
  locale: 'es' | 'en';
  about: { title: string; role: string; bio: string; experience: string; skills: string[] };
}

export default function About({ about }: AboutProps) {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.inner}`}>
        <h2 className="label">{about.title}</h2>
        <p className={styles.role}>{about.role}</p>
        <p className={styles.bio}>
          {about.bio.split('**').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))}
        </p>
        <div className={styles.skills}>
          <p className="label">{about.experience}</p>
          <ul>
            {about.skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
