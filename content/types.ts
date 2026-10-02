export type Locale = 'es' | 'en';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'note'; text: string }
  | { type: 'cards'; items: { title: string; text: string }[] }
  | { type: 'swatches'; items: { hex: string; name: string; use: string }[] }
  | { type: 'typescale'; family: string; weights: string; rows: { label: string; font: string; size: string }[] }
  | { type: 'buttons'; items: { label: string; variant: 'dark' | 'light'; states: { state: string; bg: string; text: string; ring?: string }[] }[] }
  | { type: 'stats'; items: { value: string; label: string }[] }
  | { type: 'rules'; items: { id: string; question: string; pass: boolean; body: string[] }[] }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string; tone?: boolean }
  | { type: 'survey'; groups: { question: string; items: { quote: string; insight: string }[] }[] }
  | { type: 'groups'; items: { title: string; points: string[] }[] }
  | { type: 'quote'; text: string; cite: string }
  | { type: 'gallery'; items: { src: string; alt: string; caption: string; date: string; video?: boolean; href?: string }[]; note?: string }
  | { type: 'image'; src: string; alt: string; caption?: string; cropTop?: number; width?: number };

export type Section = { id: string; title: string; subtitle?: string; blocks: Block[] };

export type CaseStudy = {
  meta: string[];
  hero: { src: string; alt: string };
  sections: Section[];
};
