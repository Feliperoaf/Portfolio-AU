import { avsa } from './avsa';
import { censo } from './censo';
import { uxReport } from './ux-report';
import { capel } from './capel';
import { capelsour } from './capelsour';
import { stellantis } from './stellantis';
import type { CaseStudy, Locale } from './types';

const studies: Record<string, Record<Locale, CaseStudy>> = { avsa, censo, 'ux-report': uxReport, capel, capelsour, stellantis };

export function getCaseStudy(slug: string, locale: Locale): CaseStudy | undefined {
  return studies[slug]?.[locale];
}
