import styles from './About.module.css';

interface AboutProps {
  locale: 'es' | 'en';
  about: { title: string; bio: string; experience: string; skills: string[] };
}

export default function About({ about }: AboutProps) {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.inner}`}>
        <p className="label">{about.title}</p>
        <p className={styles.bio}>{about.bio}</p>
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
