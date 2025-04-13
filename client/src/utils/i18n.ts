import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "../translations/en";
import frTranslation from "../translations/fr";
import esTranslation from "../translations/es";
import deTranslation from "../translations/de";
import itTranslation from "../translations/it";
import plTranslation from "../translations/pl";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      },
      es: {
        translation: esTranslation
      },
      de: {
        translation: deTranslation
      },
      it: {
        translation: itTranslation
      },
      pl: {
        translation: plTranslation
      }
    },
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
