import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import i18n from "@/utils/i18n";

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  changeLanguage: () => {}
});

export const useLanguage = () => useContext(LanguageContext);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>(() => {
    // Check if language is stored in localStorage
    const savedLanguage = localStorage.getItem("language");
    
    if (savedLanguage) {
      return savedLanguage;
    }
    
    // Check browser language
    const browserLang = navigator.language.split("-")[0];
    const supportedLanguages = ["en", "fr", "es", "de", "it"];
    
    if (supportedLanguages.includes(browserLang)) {
      return browserLang;
    }
    
    // Default to English
    return "en";
  });

  useEffect(() => {
    // Set the i18n language
    i18n.changeLanguage(language);
    
    // Store language preference in localStorage
    localStorage.setItem("language", language);
  }, [language]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
