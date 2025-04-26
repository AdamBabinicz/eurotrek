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
  const [language, setLanguage] = useState<string>(() => {
    try {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage) {
        return savedLanguage;
      }

      const browserLang = navigator.language.split("-")[0];
      const supportedLanguages = ["pl", "en", "fr", "es", "de", "it", "cs"];

      if (supportedLanguages.includes(browserLang)) {
        return browserLang;
      }
    } catch (error) {
      console.error("Error accessing localStorage or navigator:", error);
    }

    return "en";
  });

  useEffect(() => {
    console.log("Setting language to:", language);

    i18n.changeLanguage(language);

    try {
      localStorage.setItem("language", language);
    } catch (error) {
      console.error("Error setting language in localStorage:", error);
    }
  }, [language]);

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
