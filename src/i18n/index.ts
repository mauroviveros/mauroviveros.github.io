import spanish from './es.json';
import english from './en.json';

const LOCALES = {
  en: english,
  es: spanish,
};

export const locales = Object.keys(LOCALES);

type ValidLocales = keyof typeof LOCALES;
type Translations = Record<string, string>;

export const getI18n = (language: string) => {
  let json = LOCALES[language as ValidLocales] as Translations || {};
  return (id: string) => json[id];
}