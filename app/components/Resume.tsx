import styles from './Resume.module.css';

type Item = { role: string; org: string; years: string };

interface ResumeProps {
  resume: { title: string; experience: string; education: string; jobs: Item[]; studies: Item[] };
}

function List({ heading, items }: { heading: string; items: Item[] }) {
  return (
    <div className={styles.col}>
      <p className="label">{heading}</p>
      <ul className={styles.list}>
        {items.map((i) => (
          <li key={i.role + i.years}>
            <span className={styles.years}>{i.years}</span>
            <div>
              <h3>{i.role}</h3>
              <p>{i.org}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume({ resume }: ResumeProps) {
  return (
    <section className={styles.resume} id="resume">
      <div className={`container ${styles.inner}`}>
        <h2>{resume.title}</h2>
        <div className={styles.cols}>
          <List heading={resume.experience} items={resume.jobs} />
          <List heading={resume.education} items={resume.studies} />
        </div>
      </div>
    </section>
  );
}
