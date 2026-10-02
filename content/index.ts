import { avsa } from './avsa';
import { censo } from './censo';
import { uxReport } from './ux-report';
import { capel } from './capel';
import { capelsour } from './capelsour';
import { stellantis } from './stellantis';
import type { CaseStudy, Locale } from './types';

const studies: Record<string, Record<Locale, CaseStudy>> = { avsa, censo, 'ux-report': uxReport, capel, capelsour, stellantis };

const sources: Record<string, { name: string; href: string }> = {
  avsa: { name: 'Behance', href: 'https://www.behance.net/gallery/238749757/AVSA-Rent-a-Car-Rediseno-UIUX' },
  censo: { name: 'Behance', href: 'https://www.behance.net/gallery/238511111/Auditoria-de-Usabilidad-Censo-2024' },
  'ux-report': { name: 'Behance', href: 'https://www.behance.net/gallery/239290895/Reporte-UX-Levantamiento-y-Sugerencias-de-Mejora' },
};

export function getCaseStudy(slug: string, locale: Locale): CaseStudy | undefined {
  const study = studies[slug]?.[locale];
  return study && sources[slug] ? { ...study, source: sources[slug] } : study;
}
