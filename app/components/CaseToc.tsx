'use client';

import { useEffect, useState } from 'react';
import styles from './CaseStudy.module.css';

interface Item { id: string; label: string }

export default function CaseToc({ items, label, short }: { items: Item[]; label: string; short: string }) {
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(false);

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = '';
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= line) current = it.id;
      }
      setActive(current);
      const start = document.getElementById('case-start');
      setPast(!!start && start.getBoundingClientRect().top <= 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [items]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const links = items.map((t) => (
    <li key={t.id}>
      <a href={`#${t.id}`} data-active={active === t.id || undefined} aria-current={active === t.id ? 'location' : undefined} onClick={() => setOpen(false)}>
        {t.label}
      </a>
    </li>
  ));

  return (
    <>
      <nav aria-label={label} className={styles.rail}>
        <ul>{links}</ul>
      </nav>
      <div className={styles.fab} data-show={past || undefined}>
        {open && (
          <nav aria-label={label} className={styles.fabPanel}>
            <ul>{links}</ul>
          </nav>
        )}
        <button type="button" className={styles.fabBtn} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? '×' : '≡'} {short}
        </button>
      </div>
    </>
  );
}
