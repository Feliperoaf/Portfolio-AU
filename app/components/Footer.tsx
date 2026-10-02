'use client';

import { FaBehance, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import styles from './Footer.module.css';

interface FooterProps {
  locale: 'es' | 'en';
  social: {
    instagram: string;
    behance: string;
    linkedin: string;
    github: string;
  };
}

export default function Footer({ locale, social }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Felipe Roa</h3>
            <p>Art Director & UX/UI Designer</p>
          </div>

          <div className={styles.social}>
            <a href="https://www.behance.net/feliperoaf" target="_blank" rel="noopener noreferrer" title={social.behance} aria-label={social.behance}><FaBehance /></a>
            <a href="https://linkedin.com/in/feliperoaf" target="_blank" rel="noopener noreferrer" title={social.linkedin} aria-label={social.linkedin}><FaLinkedinIn /></a>
            <a href="https://github.com/feliperoaf" target="_blank" rel="noopener noreferrer" title={social.github} aria-label={social.github}><FaGithub /></a>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Felipe Roa. {locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <p className={styles.credit}>{locale === 'es' ? 'Diseñado y desarrollado desde Australia' : 'Designed and built from Australia'}</p>
        </div>
      </div>
    </footer>
  );
}
