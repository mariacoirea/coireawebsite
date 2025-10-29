import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    defaultNS: 'common',
    ns: ['common', 'home', 'about', 'offerings', 'journey', 'tools', 'insights', 'assessment', 'leadership', 'results', 'raices'],
    
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
