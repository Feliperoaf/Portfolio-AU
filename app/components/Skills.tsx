import Image from 'next/image';
import styles from './Skills.module.css';

const skillsData = [
  { name: 'Figma', icon: '/icons/Figma.svg' },
  { name: 'Photoshop', icon: '/icons/Photoshop.svg' },
  { name: 'Illustrator', icon: '/icons/Illustrator.svg' },
  { name: 'After Effects', icon: '/icons/After.svg' },
  { name: 'Premiere', icon: '/icons/Premier.svg' },
  { name: 'Lightroom', icon: '/icons/Lightroom.svg' },
  { name: 'Notion', icon: '/icons/Notion.svg' },
  { name: 'HTML', icon: '/icons/HTML.svg' },
  { name: 'CSS', icon: '/icons/CSS.svg' },
  { name: 'JavaScript', icon: '/icons/Javascript.svg' },
  { name: 'React', icon: '/icons/React.svg' },
  { name: 'Tailwind', icon: '/icons/Tailwind.svg' },
];

export default function Skills({ locale }: { locale: 'es' | 'en' }) {
  return (
    <section className={styles.skills}>
      <div className={`container ${styles.inner}`}>
        <p className="label">{locale === 'es' ? 'Herramientas' : 'Tools'}</p>
        <ul className={styles.grid}>
          {skillsData.map((s) => (
            <li key={s.name} className={styles.item}>
              <Image src={s.icon} alt="" width={36} height={36} unoptimized />
              <span>{s.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
