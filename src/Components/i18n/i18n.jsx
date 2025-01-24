// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import so from './locales/so.json';

i18n
  .use(LanguageDetector) // Detect the user's language automatically
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: 'en', // Default language if user language isn't detected
    debug: true,
    resources: {
      en: { translation: en },
      so: { translation: so },
    },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
