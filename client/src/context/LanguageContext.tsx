import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import i18n from "@/utils/i18n";

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  changeLanguage: () => {},
});

// Hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize language state (prefer local storage or browser language)
  const [language, setLanguage] = useState<string>(() => {
    try {
      // Try to get language from localStorage
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage) {
        return savedLanguage;
      }

      // Check browser language
      const browserLang = navigator.language.split("-")[0];
      const supportedLanguages = ["pl", "en", "fr", "es", "de", "it", "cs"];

      if (supportedLanguages.includes(browserLang)) {
        return browserLang;
      }
    } catch (error) {
      console.error("Error accessing localStorage or navigator:", error);
    }

    // Default to English
    return "en";
  });

  // Apply language changes when the language state changes
  useEffect(() => {
    console.log("Setting language to:", language);

    // Update i18n language
    i18n.changeLanguage(language);

    // Save language preference to localStorage
    try {
      localStorage.setItem("language", language);
    } catch (error) {
      console.error("Error setting language in localStorage:", error);
    }
  }, [language]);

  // Change the language
  const changeLanguage = (lang: string) => {
    console.log("Change language called, current:", language, "new:", lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
