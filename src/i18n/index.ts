import spanish from './es.json';
import english from './en.json';

export const LANGUAGES = {
  en: english,
  es: spanish,
};

type ValidLanguages = keyof typeof LANGUAGES;
type Translations = Record<string, string>;

export const getI18n = (language = 'en') => {
  let json = LANGUAGES[language as ValidLanguages] as Translations || {};
  return async (id: string) => json[id];
}