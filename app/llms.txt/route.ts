import { projectSlugs } from '../../lib/projects';
import en from '../../messages/en.json';
import es from '../../messages/es.json';

export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.froa.digital';

type Entry = { title: string; description: string; seo?: { description: string } };

export function GET() {
  const list = (locale: 'en' | 'es', projects: Record<string, Entry>) =>
    projectSlugs
      .filter((s) => projects[s])
      .map((s) => `- [${projects[s].title}](${SITE_URL}/${locale}/projects/${s}): ${projects[s].seo?.description ?? projects[s].description}`)
      .join('\n');

  const body = `# Felipe Roa

> Art director and UX/UI designer based in Sydney, Australia, open to roles. Eight years of experience in art direction, UX/UI and social media for brands such as Stellantis (Jeep, RAM, Dodge, Alfa Romeo), Capel and Banco Santander. The site is bilingual (English and Spanish).

## Portfolio (English)

${list('en', en.portfolio.projects as Record<string, Entry>)}

## Portafolio (Español)

${list('es', es.portfolio.projects as Record<string, Entry>)}

## Links

- [Home (English)](${SITE_URL}/en)
- [Inicio (Español)](${SITE_URL}/es)
- [Behance](https://www.behance.net/feliperoaf)
- [LinkedIn](https://linkedin.com/in/feliperoaf)
- [GitHub](https://github.com/feliperoaf)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
