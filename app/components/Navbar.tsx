'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavbarProps {
  locale: 'es' | 'en';
  navItems: { home: string; about: string; portfolio: string; resume: string; contact: string };
}

export default function Navbar({ locale, navItems }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const switchLocale = () => {
    const next = locale === 'es' ? 'en' : 'es';
    window.location.href = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${next}`) + window.location.hash;
  };

  const toggleTheme = () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch {}
  };

  const close = () => setOpen(false);
  const themeLabel = locale === 'es' ? 'Cambiar tema' : 'Toggle theme';

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link href={`/${locale}`} className={styles.logo} aria-label="Felipe Roa">
          <Image src="/logo.png" alt="" width={599} height={129} className={styles.logoImage} priority />
        </Link>

        <nav className={`${styles.links} ${open ? styles.open : ''}`} aria-label="Principal">
          <Link href={`/${locale}`} onClick={close}>{navItems.home}</Link>
          <Link href={`/${locale}#about`} onClick={close}>{navItems.about}</Link>
          <Link href={`/${locale}#portfolio`} onClick={close}>{navItems.portfolio}</Link>
          <Link href={`/${locale}#resume`} onClick={close}>{navItems.resume}</Link>
          <Link href={`/${locale}#contact`} onClick={close}>{navItems.contact}</Link>
        </nav>

        <div className={styles.tools}>
          <button className={styles.theme} onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
            <span aria-hidden />
          </button>
          <button className={styles.lang} onClick={switchLocale}>
            <b>{locale.toUpperCase()}</b> / {locale === 'es' ? 'EN' : 'ES'}
          </button>
          <button className={styles.burger} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">
            <i /><i />
          </button>
        </div>
      </div>
    </header>
  );
}
