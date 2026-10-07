import type { MetadataRoute } from 'next';
import { projectSlugs } from '../lib/projects';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.froa.digital';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'es'] as const;
  const alt = (path: string) => ({ languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`])) });
  const pages = ['', ...projectSlugs.map((s) => `/projects/${s}`)];
  return pages.flatMap((path) =>
    locales.map((l) => ({
      url: `${SITE_URL}/${l}${path}`,
      lastModified: new Date(),
      priority: path === '' ? 1 : 0.7,
      alternates: alt(path),
    }))
  );
}
