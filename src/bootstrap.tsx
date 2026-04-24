import gtConfig from '../gt.config.json';
import { bootstrap } from 'gt-react/browser';

async function loadTranslations(locale: string) {
  return (await import(`./_gt/${locale}.json`)).default;
}

const { defaultLocale, locales } = gtConfig;

await bootstrap({
  defaultLocale,
  locales,
  loadTranslations,
});

await import('./main.tsx');
