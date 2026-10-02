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

export type Collaborator = { name: string; url: string; avatar: string };

export const marieGarrido: Collaborator = {
  name: 'Marie Garrido',
  url: 'https://www.behance.net/MarieGarrido',
  avatar: '/people/mariegarrido.jpg',
};

export const collaborators: Record<string, Collaborator[]> = {
  avsa: [marieGarrido],
  censo: [marieGarrido],
  'ux-report': [marieGarrido],
};
