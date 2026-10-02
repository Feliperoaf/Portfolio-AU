import { DM_Sans } from 'next/font/google';
import type { Block, CaseStudy as CaseStudyData } from '../../content/types';
import styles from './CaseStudy.module.css';

function toneClass(c: string) {
  const m = c.match(/(\d+)/);
  if (!m || !/%|\//.test(c)) return undefined;
  if (/^\d\/3$/.test(c.trim())) return c.startsWith('3') ? styles.t3 : c.startsWith('2') ? styles.t2 : styles.t1;
  const n = parseInt(m[1], 10);
  return n >= 75 ? styles.t3 : n >= 50 ? styles.t2 : styles.t1;
}

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['500', '600', '700'] });

function renderBlock(block: Block, key: number, locale: 'es' | 'en') {
  switch (block.type) {
    case 'p':
      return <p key={key} className={styles.p}>{block.text}</p>;
    case 'h3':
      return <h3 key={key} className={styles.h3}>{block.text}</h3>;
    case 'list':
      return (
        <ul key={key} className={styles.list}>
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    case 'note':
      return <p key={key} className={styles.note}>{block.text}</p>;
    case 'cards':
      return (
        <div key={key} className={styles.cards}>
          {block.items.map((c) => (
            <div key={c.title} className={styles.card}>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      );
    case 'swatches':
      return (
        <div key={key} className={styles.swatches}>
          {block.items.map((s) => (
            <div key={s.hex} className={styles.swatch}>
              <span className={styles.chip} style={{ background: s.hex }} aria-hidden />
              <div>
                <strong>{s.name}</strong>
                <code>{s.hex}</code>
                <p>{s.use}</p>
              </div>
            </div>
          ))}
        </div>
      );
    case 'typescale':
      return (
        <div key={key} className={`${styles.typeBox} ${dmSans.className}`}>
          <div className={styles.typeHead}>
            <span className={styles.ag}>Ag</span>
            <div>
              <strong>{block.family}</strong>
              <p>{block.weights}</p>
            </div>
          </div>
          <table className={styles.typeTable}>
            <tbody>
              {block.rows.map((r) => (
                <tr key={r.label}>
                  <th>{r.label}</th>
                  <td>{r.font}</td>
                  <td>{r.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'buttons':
      return (
        <div key={key} className={styles.buttons}>
          {block.items.map((b) => (
            <div key={b.label} className={styles.buttonGroup}>
              {b.states.map((s) => (
                <div key={s.state} className={styles.buttonState}>
                  <span
                    className={`${styles.demoBtn} ${dmSans.className}`}
                    style={{ background: s.bg, color: s.text, boxShadow: s.ring ? `0 0 0 3px #0e0e0e, 0 0 0 5px ${s.ring}` : undefined }}
                  >
                    {b.label}
                  </span>
                  <small>
                    {s.state}
                    <br />
                    {s.bg} / {s.text}
                    {s.ring && <><br />ring {s.ring}</>}
                  </small>
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    case 'stats':
      return (
        <div key={key} className={styles.stats}>
          {block.items.map((i) => (
            <div key={i.label} className={styles.stat}>
              <strong>{i.value}</strong>
              <span>{i.label}</span>
            </div>
          ))}
        </div>
      );
    case 'rules':
      return (
        <div key={key} className={styles.rules}>
          {block.items.map((r) => (
            <div key={r.id} className={styles.rule}>
              <p className={`${styles.ruleQ} ${r.pass ? styles.pass : styles.fail}`}>
                <span aria-hidden>{r.pass ? '✓' : '✕'}</span>
                <span><b>{r.id}</b> {r.question}</span>
              </p>
              {r.body.map((t) => <p key={t} className={styles.p}>{t}</p>)}
            </div>
          ))}
        </div>
      );
    case 'table':
      return (
        <div key={key} className={styles.tableWrap}>
          <table className={styles.table}>
            {block.caption && <caption>{block.caption}</caption>}
            <thead><tr>{block.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {block.rows.map((r) => (
                <tr key={r.join('|')}>
                  {r.map((c, i) => <td key={i} className={block.tone ? toneClass(c) : undefined}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'survey':
      return (
        <div key={key} className={styles.survey}>
          {block.groups.map((g) => (
            <details key={g.question} className={styles.group}>
              <summary>{g.question}</summary>
              <div className={styles.quotes}>
                {g.items.map((i) => (
                  <figure key={i.quote} className={styles.quote}>
                    <blockquote>{i.quote}</blockquote>
                    <figcaption>{i.insight}</figcaption>
                  </figure>
                ))}
              </div>
            </details>
          ))}
        </div>
      );
    case 'groups':
      return (
        <div key={key} className={styles.cards}>
          {block.items.map((g) => (
            <div key={g.title} className={styles.card}>
              <h4>{g.title}</h4>
              <ul className={styles.list}>
                {g.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      );
    case 'quote':
      return (
        <blockquote key={key} className={styles.pull}>
          <p>{block.text}</p>
          <cite>{block.cite}</cite>
        </blockquote>
      );
    case 'gallery':
      return (
        <div key={key}>
          <div className={styles.gallery}>
            {block.items.map((g) => (
              <figure key={g.src} className={styles.post}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={g.src} alt={g.alt} loading="lazy" />
                <figcaption>
                  <time dateTime={g.date}>
                    {new Date(g.date + 'T12:00:00Z').toLocaleDateString(locale === 'es' ? 'es-CL' : 'en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' })}
                  </time>
                  <span>{g.caption}</span>
                  {g.href && (
                    <a href={g.href} target="_blank" rel="noopener noreferrer">
                      {g.video
                        ? locale === 'es' ? 'Ver el video en Instagram ↗' : 'Watch the video on Instagram ↗'
                        : locale === 'es' ? 'Ver la publicación completa en Instagram ↗' : 'See the full post on Instagram ↗'}
                    </a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
          {block.note && <p className={styles.caption}>{block.note}</p>}
        </div>
      );
    case 'image':
      return (
        <figure key={key} className={styles.figure} style={block.width ? { maxWidth: block.width } : undefined}>
          <div className={styles.frame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={block.src}
              alt={block.alt}
              loading="lazy"
              style={block.cropTop ? { marginTop: `-${(block.cropTop * 100).toFixed(3)}%` } : undefined}
            />
          </div>
          {block.caption && <figcaption className={styles.caption}>{block.caption}</figcaption>}
        </figure>
      );
  }
}

export default function CaseStudy({ study, locale = 'en' }: { study: CaseStudyData; locale?: 'es' | 'en' }) {
  return (
    <>
      <div className={styles.hero}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={study.hero.src} alt={study.hero.alt} />
      </div>
      {study.sections.map((s) => (
        <section key={s.id} id={s.id} className={styles.section}>
          <h2 className={styles.h2}>{s.title}</h2>
          {s.subtitle && <p className={styles.subtitle}>{s.subtitle}</p>}
          {s.blocks.map((b, i) => renderBlock(b, i, locale))}
        </section>
      ))}
    </>
  );
}
