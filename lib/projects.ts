import fs from 'fs';
import path from 'path';

export type Locale = 'es' | 'en';

export const projectSlugs = ['capel', 'capelsour', 'stellantis', 'avsa', 'censo', 'ux-report'] as const;
export type ProjectSlug = (typeof projectSlugs)[number];

const IMAGE_RE = /\.(png|jpe?g|webp|avif|gif)$/i;

export function getProjectImages(slug: string, locale: Locale): string[] {
  const root = path.join(process.cwd(), 'public', 'projects', slug);
  const localized = path.join(root, locale);
  const dir = fs.existsSync(localized) ? localized : root;
  if (!fs.existsSync(dir)) return [];
  const urlBase = dir === localized ? `/projects/${slug}/${locale}` : `/projects/${slug}`;
  return fs
    .readdirSync(dir)
    .filter((f) => IMAGE_RE.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => `${urlBase}/${f}`);
}

export type Collaborator = { name: string; url?: string; avatar?: string };

export const marieGarrido: Collaborator = {
  name: 'Marie Garrido',
  url: 'https://www.behance.net/MarieGarrido',
  avatar: '/people/mariegarrido.jpg',
};

export const carolinaHidalgo: Collaborator = { name: 'Carolina Hidalgo' };

export const collaborators: Record<string, Collaborator[]> = {
  avsa: [marieGarrido],
  censo: [marieGarrido, carolinaHidalgo],
  'ux-report': [marieGarrido],
};

export const projectGroup: Record<string, { key: 'ux' | 'graphic'; anchor: string }> = {
  avsa: { key: 'ux', anchor: 'ux-ui' },
  censo: { key: 'ux', anchor: 'ux-ui' },
  'ux-report': { key: 'ux', anchor: 'ux-ui' },
  capel: { key: 'graphic', anchor: 'graphic-design' },
  capelsour: { key: 'graphic', anchor: 'graphic-design' },
  stellantis: { key: 'graphic', anchor: 'graphic-design' },
};
