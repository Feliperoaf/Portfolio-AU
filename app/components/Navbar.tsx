'use client';

import { useEffect, useState } from 'react';
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
  const [active, setActive] = useState('');

  useEffect(() => {
    if (pathname.replace(/\/$/, '') !== `/${locale}`) return;
    const ids = ['about', 'portfolio', 'resume', 'contact'];
    const update = () => {
      if (window.scrollY < 200) return setActive('');
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname, locale]);

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
          <Link href={`/${locale}#about`} onClick={close} data-active={active === 'about'}>{navItems.about}</Link>
          <Link href={`/${locale}#portfolio`} onClick={close} data-active={active === 'portfolio'}>{navItems.portfolio}</Link>
          <Link href={`/${locale}#resume`} onClick={close} data-active={active === 'resume'}>{navItems.resume}</Link>
          <Link href={`/${locale}#contact`} onClick={close} data-active={active === 'contact'}>{navItems.contact}</Link>
        </nav>

        <div className={styles.tools}>
          <button className={styles.theme} onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
            <span aria-hidden />
          </button>
          <button className={styles.lang} onClick={switchLocale} aria-label={locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}>
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
