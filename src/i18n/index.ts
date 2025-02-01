import spanish from './es.json';
import english from './en.json';

export const LOCALES = {
  en: english,
  es: spanish,
};

type ValidLocales = keyof typeof LOCALES;
type Translations = Record<string, string>;

export const getI18n = (language: string) => {
  let json = LOCALES[language as ValidLocales] as Translations || {};
  return async (id: string) => json[id];
}