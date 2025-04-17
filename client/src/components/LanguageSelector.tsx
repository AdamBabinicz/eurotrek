import { Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "pl", label: "Polski" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "cs", label: "Čeština" },
];

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === language)?.code.toUpperCase() ||
    "EN";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-1 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors h-8 px-2"
          aria-label={t("language.changeLanguage")}
        >
          <Globe className="h-4 w-4" />
          <span>{currentLanguage}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-32">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="cursor-pointer text-sm"
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
