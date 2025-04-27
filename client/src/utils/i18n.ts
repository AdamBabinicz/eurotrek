import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // <<< 1. Importuj detektor

// Importuj tłumaczenia
import plTranslation from "../translations/pl";
import enTranslation from "../translations/en";
import frTranslation from "../translations/fr";
import esTranslation from "../translations/es";
import deTranslation from "../translations/de";
import itTranslation from "../translations/it";
import cs from "../translations/cs"; // Upewnij się, że ścieżka jest poprawna (.ts?)

// Usuń ten console.log, gdy już nie jest potrzebny
// console.log(plTranslation);

i18n
  .use(LanguageDetector) // <<< 2. Dodaj użycie detektora
  .use(initReactI18next)
  .init({
    resources: {
      // Zasoby bez zmian
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      es: { translation: esTranslation },
      de: { translation: deTranslation },
      it: { translation: itTranslation },
      pl: { translation: plTranslation },
      cs: { translation: cs },
    },

    lng: "pl", // <<< 3. Ustaw 'pl' jako preferowany język startowy

    fallbackLng: "en", // Język używany, gdy brakuje klucza tłumaczenia

    interpolation: {
      escapeValue: false, // Standard dla React
    },

    // --- 4. Dodaj konfigurację detekcji ---
    detection: {
      // Kolejność wykrywania języka:
      // 1. Sprawdź localStorage (zapisany wybór użytkownika)
      // 2. Sprawdź cookie (zapisany wybór użytkownika)
      // --- NIE sprawdzaj języka przeglądarki ('navigator') ---
      // 3. Sprawdź tag <html lang="...">
      // 4. Sprawdź ścieżkę URL (obsługiwane przez Twój LanguageSetter, ale można zostawić)
      // 5. Sprawdź subdomenę (mało prawdopodobne w Twoim przypadku)
      // Jeśli nic nie zostanie znalezione, i18next użyje wartości z opcji 'lng' ('pl')
      order: ["localStorage", "cookie", "htmlTag", "path", "subdomain"],

      // Klucze/nazwy używane do zapisywania/odczytywania
      lookupLocalStorage: "i18nextLng", // Klucz w localStorage
      lookupCookie: "i18next", // Nazwa ciasteczka

      // Gdzie zapisywać wybór użytkownika?
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"], // Nie zapisuj języka developerskiego
    },
    // --- Koniec konfiguracji detekcji ---
  });

export default i18n;
